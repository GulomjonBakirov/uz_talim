document.querySelectorAll(".transition").forEach((el) => {
  el.addEventListener("mousemove", (e) => {
    let a = el.getBoundingClientRect();
    let Y = -a.top + e.clientY;
    let X = -a.left + e.clientX;
    let width = a.width;
    let height = a.height;
    el.style.transform = ` perspective(1010px) rotateX(${
      (width / 2 - X) / 10
    }deg) rotateY(${(height / 2 - Y) / 10}deg)`;
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = ` perspective(1010px) rotateX(0deg) rotateY(0deg)`;
  });
});

document.querySelectorAll('.col').forEach(e=>{
  e.addEventListener('click',()=>{
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "darslik/" +e.dataset.id;
    }, 2000);
  })
})
document.querySelectorAll('.sinflar').forEach(e=>{
  e.addEventListener('click',()=>{
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "darslik?type=" +e.dataset.id;
    }, 2000);
  })
})