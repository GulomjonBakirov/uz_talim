const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let w = window.innerWidth;
let h = window.innerHeight;
canvas.width = w;
canvas.height = h;

window.addEventListener("resize", () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;
});
const mouse = {
  x: null,
  y: null,
};
class Particle {
  constructor(x, y, r, c, xv, yv) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.c = c;
    this.xv = xv;
    this.yv = yv;
  }
  draw() {
    // ctx.shadowBlur = 20;
    // ctx.shadowColor = "rgba(98,90,260,0.6)";
    ctx.strokeStyle = this.c;
    ctx.fillStyle = this.c;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  }
  move() {
    if (this.x < this.r  || this.x > w - this.r) {
      this.xv = -this.xv;
    }
    if (this.y < this.r  || this.y > h - this.r ) {
      this.yv = -this.yv;
    }

    this.x += this.xv;
    this.y += this.yv;
  }
}
const Particles = [];
function init() {
  for (let i = 0; i < 20; i++) {
    Particles.push(
      new Particle(
        Math.random() * (w-100)+20,
        Math.random() * (h-100)+20,
        Math.random() * 20 + 29,
        "rgb(116, 14, 14)",
        -Math.random() * 1.6 + 0.8,
        -Math.random() * 1.6 + 0.8
      )
    );
  }
}
init();

function update() {
  ctx.clearRect(0, 0, w, h);
  // ctx.fillStyle = "rgba(0,29,218,0.7)"
  // ctx.fillRect(0, 0, w, h);
  Particles.forEach((p) => {
    p.draw();
    p.move();
    if (Math.sqrt((mouse.x - p.x) ** 2 + (mouse.y - p.y) ** 2) < 250) {
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.lineWidth = "10";

      ctx.moveTo(p.x, p.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });

 window.requestAnimationFrame(update);
}
update();
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
