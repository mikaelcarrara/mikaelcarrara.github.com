Index = {
  init: function(){

    //mobile menu
    $(".menu-trigger").click(function(e) {
      $("header nav").toggle();
      e.stopPropagation();
    });

  }
}

$(document).ready(function() {
  Index.init();
});
