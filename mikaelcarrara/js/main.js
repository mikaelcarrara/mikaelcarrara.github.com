(function() {
  var scenes = ['scene-design', 'scene-ai', 'scene-code'];
  var dots = ['pd0', 'pd1', 'pd2'];
  var current = 0;
  var HOLD = 3000;
  var FADE = 1200;

  function goTo(next) {
    var from = document.getElementById(scenes[current]);
    var to = document.getElementById(scenes[next]);
    var fromDot = document.getElementById(dots[current]);
    var toDot = document.getElementById(dots[next]);

    if (!from || !to) return;

    from.style.transition = 'opacity ' + (FADE / 1000) + 's ease';
    from.style.opacity = '0';

    setTimeout(function() {
      to.style.transition = 'opacity ' + (FADE / 1000) + 's ease';
      to.style.opacity = '1';
      if (fromDot) fromDot.classList.remove('active');
      if (toDot) toDot.classList.add('active');
      current = next;
    }, FADE * 0.4);
  }

  function cycle() {
    var next = (current + 1) % scenes.length;
    goTo(next);
  }

  setInterval(cycle, HOLD + FADE);
})();

(function() {
  var reveals = document.querySelectorAll('.reveal');
  if (!reveals.length || !('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
      var idx = siblings.indexOf(entry.target);
      setTimeout(function() { entry.target.classList.add('visible'); }, idx * 70);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08 });

  reveals.forEach(function(el) { observer.observe(el); });
})();

(function() {
  var navSections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('header ul a');
  var header = document.querySelector('header');
  if (!navSections.length || !navLinks.length) return;

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  }

  window.addEventListener('scroll', function() {
    updateHeader();
    var current = '';
    navSections.forEach(function(s) {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(function(link) {
      link.style.color = link.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
  });

  updateHeader();
})();


(function() {
  var navToggle = document.getElementById('nav-toggle');
  var navLinks = document.querySelectorAll('header ul a');
  if (!navToggle || !navLinks.length) return;

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.checked = false;
    });
  });
})();
