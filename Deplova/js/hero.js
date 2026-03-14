const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

let W, H, OX, OY;

function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    OX = W / 2;
    OY = H / 2 + 80;
}
resize();
window.addEventListener('resize', resize);

function revealRadius(frame) {
    const maxRadius = Math.hypot(W, H);
    const progress = Math.min(1, frame / 70);
    return 220 + maxRadius * progress;
}

function radialRevealAlpha(x, y, frame) {
    const r = revealRadius(frame);
    const d = Math.hypot(x - OX, y - (OY - 80));
    const soft = 130;
    const v = (r - d) / soft;
    if (v <= 0) return 0;
    if (v >= 1) return 1;
    return v;
}

const ELEMENTS = [
    (c, a) => {
        c.font = '11px monospace';
        c.fillStyle = `rgba(53,176,205,${a * .85})`; c.fillText('$ npm run build', 0, 0);
        c.fillStyle = `rgba(77,192,219,${a * .55})`; c.fillText('✓ compiled 1.24s', 0, 15);
        c.fillStyle = `rgba(128,212,232,${a * .35})`; c.fillText('› ready on :3000', 0, 30);
    },
    (c, a) => {
        c.font = '10px monospace';
        [['rgba(245,117,162,', '● feat: auth module'],
        ['rgba(53,176,205,', '● fix: rate limit'],
        ['rgba(203,213,225,', '● chore: ci/cd'],
        ['rgba(128,212,232,', '● docs: readme']].forEach(([col, t], i) => {
            c.fillStyle = `${col}${a * .7})`; c.fillText(t, 0, i * 14);
        });
    },
    (c, a) => {
        c.font = '500 10px monospace';
        c.fillStyle = `rgba(245,117,162,${a * .9})`; c.fillText('POST', 0, 0);
        c.fillStyle = `rgba(53,176,205,${a * .8})`; c.fillText('/api/v1/deploy', 44, 0);
        c.fillStyle = `rgba(128,212,232,${a * .5})`; c.font = '9px monospace';
        c.fillText('200 OK  ·  48ms', 0, 15);
        c.fillText('{ "status": "live" }', 0, 28);
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .45})`; c.lineWidth = .8;
        c.strokeRect(0, 0, 88, 56);
        c.strokeRect(2, 2, 88, 8);
        c.strokeStyle = `rgba(53,176,205,${a * .22})`; c.lineWidth = .6;
        c.strokeRect(2, 13, 22, 41);
        c.strokeRect(26, 13, 62, 22);
        c.strokeRect(26, 37, 62, 16);
        c.strokeStyle = `rgba(245,117,162,${a * .55})`; c.lineWidth = .7;
        c.strokeRect(52, 42, 32, 8);
    },
    (c, a) => {
        const nodes = [[-28, -22, 'DB', 'rgba(53,176,205,'], [28, -22, 'API', 'rgba(77,192,219,'],
        [-28, 22, 'UI', 'rgba(128,212,232,'], [28, 22, 'CDN', 'rgba(245,117,162,']];
        c.lineWidth = .7;
        nodes.forEach(([x, y, , col]) => {
            c.strokeStyle = `${col}${a * .2})`; c.beginPath();
            c.moveTo(0, 0); c.lineTo(x, y); c.stroke();
        });
        c.beginPath(); c.arc(0, 0, 6, 0, Math.PI * 2);
        c.strokeStyle = `rgba(53,176,205,${a * .7})`; c.lineWidth = 1; c.stroke();
        c.font = '6px monospace'; c.fillStyle = `rgba(53,176,205,${a * .8})`; c.textAlign = 'center';
        c.fillText('SRV', 0, 2); c.textAlign = 'left';
        nodes.forEach(([x, y, label, col]) => {
            c.beginPath(); c.arc(x, y, 7, 0, Math.PI * 2);
            c.strokeStyle = `${col}${a * .65})`; c.lineWidth = .9; c.stroke();
            c.font = '6px monospace'; c.fillStyle = `${col}${a * .8})`; c.textAlign = 'center';
            c.fillText(label, x, y + 2); c.textAlign = 'left';
        });
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .18})`; c.lineWidth = .5;
        for (let i = 0; i <= 5; i++) {
            c.beginPath(); c.moveTo(i * 15, 0); c.lineTo(i * 15, 75); c.stroke();
            c.beginPath(); c.moveTo(0, i * 15); c.lineTo(75, i * 15); c.stroke();
        }
        c.strokeStyle = `rgba(53,176,205,${a * .5})`; c.lineWidth = .9;
        c.strokeRect(15, 15, 30, 22); c.strokeRect(15, 45, 45, 16);
        c.font = '7px monospace'; c.fillStyle = `rgba(53,176,205,${a * .5})`;
        c.fillText('MVP scope', 17, 56);
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .55})`; c.lineWidth = 1;
        c.beginPath();
        c.moveTo(0, 0); c.lineTo(72, 0); c.lineTo(54, 24); c.lineTo(54, 48);
        c.lineTo(18, 48); c.lineTo(18, 24); c.closePath(); c.stroke();
        c.font = '500 8px monospace';
        c.fillStyle = `rgba(53,176,205,${a * .85})`; c.fillText('MVP', 30, 40);
        c.font = '8px monospace';
        c.fillStyle = `rgba(203,213,225,${a * .35})`;
        c.fillText('features in', 4, 10); c.fillText('→ core out', 18, 62);
    },
    (c, a) => {
        c.font = '10px monospace';
        [['rgba(245,117,162,', 'const sprint = {'],
        ['rgba(128,212,232,', '  duration: "days",'],
        ['rgba(203,213,225,', '  output: "mvp",'],
        ['rgba(77,192,219,', '  ship: true'],
        ['rgba(245,117,162,', '}']].forEach(([col, t], i) => {
            c.fillStyle = `${col}${a * .75})`; c.fillText(t, 0, i * 14);
        });
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .6})`; c.lineWidth = 1;
        c.beginPath();
        c.moveTo(10, 26); c.quadraticCurveTo(10, 14, 22, 14);
        c.quadraticCurveTo(24, 6, 36, 6); c.quadraticCurveTo(50, 6, 50, 16);
        c.quadraticCurveTo(60, 16, 60, 26); c.quadraticCurveTo(60, 36, 50, 36);
        c.lineTo(20, 36); c.quadraticCurveTo(10, 36, 10, 26); c.stroke();
        c.strokeStyle = `rgba(53,176,205,${a * .5})`; c.lineWidth = 1.2;
        c.beginPath(); c.moveTo(35, 52); c.lineTo(35, 38);
        c.moveTo(30, 44); c.lineTo(35, 38); c.lineTo(40, 44); c.stroke();
        c.font = '500 8px monospace'; c.fillStyle = `rgba(53,176,205,${a * .85})`;
        c.textAlign = 'center'; c.fillText('deplova.app ✓', 35, 62); c.textAlign = 'left';
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .6})`; c.lineWidth = 1.2;
        c.beginPath(); c.moveTo(10, 0); c.lineTo(10, 62); c.stroke();
        [['rgba(128,212,232,', 18, 30], ['rgba(245,117,162,', 38, 50]].forEach(([col, y1, y2]) => {
            c.strokeStyle = `${col}${a * .5})`; c.lineWidth = .9;
            c.beginPath(); c.moveTo(10, y1); c.quadraticCurveTo(10, y2 - 4, 32, y2); c.stroke();
        });
        [[10, 6], [10, 20], [10, 38], [10, 56], [32, 30], [32, 50]].forEach(([x, y], i) => {
            c.beginPath(); c.arc(x, y, 3.2, 0, Math.PI * 2);
            c.fillStyle = i < 4 ? `rgba(53,176,205,${a * .9})` : `rgba(245,117,162,${a * .8})`; c.fill();
        });
        c.font = '7px monospace'; c.fillStyle = `rgba(53,176,205,${a * .5})`;
        c.fillText('HEAD', 14, 10);
    },
    (c, a) => {
        c.strokeStyle = `rgba(53,176,205,${a * .35})`; c.lineWidth = .7;
        c.strokeRect(0, 0, 100, 18); c.strokeRect(0, 22, 100, 18); c.strokeRect(0, 44, 100, 18);
        [[0, '✓ auth flow', 'rgba(53,176,205,', '9/10'],
        [22, '✓ api routes', 'rgba(77,192,219,', '8/10'],
        [44, '○ dashboard', 'rgba(203,213,225,', '6/10']].forEach(([y, t, col, s]) => {
            c.font = '9px monospace'; c.fillStyle = `${col}${a * .7})`; c.fillText(t, 4, y + 12);
            c.font = '8px monospace'; c.fillStyle = `${col}${a * .5})`; c.fillText(s, 80, y + 12);
        });
    },
    (c, a) => {
        c.font = '9px monospace';
        c.fillStyle = `rgba(245,117,162,${a * .55})`; c.fillText('▸ define MVP scope', 0, 0);
        c.fillStyle = `rgba(53,176,205,${a * .45})`; c.fillText('AI: 3 core features', 0, 14);
        c.fillStyle = `rgba(128,212,232,${a * .35})`; c.fillText('  auth, dashboard,', 0, 26);
        c.fillStyle = `rgba(128,212,232,${a * .35})`; c.fillText('  export — ship it.', 0, 38);
    },
    (c, a) => {
        c.font = '9px monospace';
        [['rgba(245,117,162,', 'NODE_ENV=production'],
        ['rgba(53,176,205,', 'PORT=443'],
        ['rgba(128,212,232,', 'DB_URL=postgres://…'],
        ['rgba(203,213,225,', 'JWT_SECRET=••••••••']].forEach(([col, t], i) => {
            c.fillStyle = `${col}${a * .7})`; c.fillText(t, 0, i * 14);
        });
    },
    (c, a) => {
        const cols = [['TODO', 'rgba(203,213,225,'], ['DOING', 'rgba(53,176,205,'], ['DONE', 'rgba(77,192,219,']];
        cols.forEach(([label, col], ci) => {
            const x = ci * 36;
            c.strokeStyle = `${col}${a * .35})`; c.lineWidth = .7;
            c.strokeRect(x, 0, 32, 72);
            c.font = '7px monospace'; c.fillStyle = `${col}${a * .7})`;
            c.fillText(label, x + 2, 10);
            for (let r = 0; r < (ci === 2 ? 3 : ci === 1 ? 2 : 1); r++) {
                c.fillStyle = `${col}${a * .15})`; c.fillRect(x + 2, 14 + r * 18, 28, 14);
                c.strokeStyle = `${col}${a * .3})`; c.lineWidth = .5;
                c.strokeRect(x + 2, 14 + r * 18, 28, 14);
            }
        });
    },
    (c, a) => {
        const items = ['produto no ar', 'você no controle', 'IA no bolso', 'independência'];
        c.font = '9px monospace';
        items.forEach((t, i) => {
            const y = i * 17;
            c.fillStyle = `rgba(53,176,205,${a * .8})`; c.fillText('✓', 0, y + 10);
            c.fillStyle = `rgba(203,213,225,${a * .55})`; c.fillText(t, 14, y + 10);
        });
    },
    (c, a) => {
        const steps = [['build', 'rgba(53,176,205,'], ['test', 'rgba(77,192,219,'], ['deploy', 'rgba(245,117,162,']];
        steps.forEach(([label, col], i) => {
            const x = i * 38;
            c.fillStyle = `${col}${a * .15})`; c.fillRect(x, 0, 32, 20);
            c.strokeStyle = `${col}${a * .5})`; c.lineWidth = .8; c.strokeRect(x, 0, 32, 20);
            c.font = '8px monospace'; c.fillStyle = `${col}${a * .85})`; c.textAlign = 'center';
            c.fillText('✓', x + 16, 10); c.font = '7px monospace'; c.fillText(label, x + 16, 20);
            c.textAlign = 'left';
            if (i < 2) {
                c.strokeStyle = `${col}${a * .35})`; c.lineWidth = .8;
                c.beginPath(); c.moveTo(x + 32, 10); c.lineTo(x + 38, 10); c.stroke();
            }
        });
    },
    (c, a) => {
        const words = ['→ ship', 'MVP', 'deploy', '✓ live', 'scope', 'sprint', 'v0.1', 'IA'];
        const w = words[Math.floor(Math.random() * words.length)];
        c.font = `500 ${11 + Math.random() * 6}px monospace`;
        c.fillStyle = `rgba(53,176,205,${a * .6})`;
        c.fillText(w, 0, 0);
    },
];

class Particle {
    constructor(delay) {
        this.delay = delay || 0;
        this.born = false;
        this.reset();
        if (!delay) this.life = Math.floor(Math.random() * this.maxLife);
    }

    reset() {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.28 + Math.pow(Math.random(), 0.5) * 1.1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.x = OX + (Math.random() - .5) * 16;
        this.y = OY + (Math.random() - .5) * 10;
        this.life = 0;
        this.maxLife = 260 + Math.random() * 340;
        this.scale = 0.42 + Math.random() * 0.72;
        this.rot = (Math.random() - .5) * 0.4;
        this.draw = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
        this.fadeIn = 0.06;
        this.fadeOut = 0.72;
    }

    alpha() {
        const t = this.life / this.maxLife;
        if (t < this.fadeIn) return t / this.fadeIn;
        if (t > this.fadeOut) return 1 - (t - this.fadeOut) / (1 - this.fadeOut);
        return 1;
    }

    inSafe() {
        const dx = this.x - OX, dy = this.y - (OY - 80);
        return (dx * dx) / (310 * 310) + (dy * dy) / (180 * 180) < 1;
    }

    update(frame) {
        if (frame < this.delay) return;
        this.life++;
        this.x += this.vx;
        this.y += this.vy;
        if (this.life > this.maxLife) this.reset();
    }

    render(frame) {
        if (this.inSafe()) return;
        const a = this.alpha() * radialRevealAlpha(this.x, this.y, frame);
        if (a <= 0.01) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.scale(this.scale, this.scale);
        ctx.rotate(this.rot);
        this.draw(ctx, a);
        ctx.restore();
    }
}

function drawGrid(frame) {
    const sp = 42;
    const g = Math.min(1, frame / 120);
    ctx.strokeStyle = `rgba(53,176,205,${0.028 * g})`;
    ctx.lineWidth = .5;
    for (let x = 0; x < W; x += sp) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let y = 0; y < H; y += sp) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    for (let x = 0; x < W; x += sp) {
        for (let y = 0; y < H; y += sp) {
            const dx = x - OX, dy = y - (OY - 80);
            if ((dx * dx) / (320 * 320) + (dy * dy) / (190 * 190) < 1) continue;
            const a = 0.06 * radialRevealAlpha(x, y, frame);
            if (a <= 0) continue;
            ctx.fillStyle = `rgba(53,176,205,${a})`;
            ctx.beginPath(); ctx.arc(x, y, .9, 0, Math.PI * 2); ctx.fill();
        }
    }
}

const COUNT = 110;
const particles = Array.from({ length: COUNT }, () => new Particle());

let frame = 0;

function tick() {
    ctx.clearRect(0, 0, W, H);
    drawGrid(frame);
    particles.forEach(p => { p.update(frame); p.render(frame); });
    frame++;
    requestAnimationFrame(tick);
}

tick();