const next = document.querySelector(".next");
const back = document.querySelector(".back");
let tab = 0;
const maqola = document.querySelector(".maqolalar-container");
next.addEventListener("click", () => {
  tab++;
  if (tab > 6) {
    if (page == Math.ceil(length / 6)) {
      page = 1;
    } else {
      page++;
    }
    window.location.href = `/maqolalar?page=${+page}`;
  }
  maqola.style.transform = `rotateY(${60 * tab}deg)`;
});
back.addEventListener("click", () => {
  if (tab < -6) {
    if (page == 1) {
      page = Math.ceil(length / 6);
    } else {
      page--;
    }
    window.location.href = `/maqolalar?page=${+page}`;
  }
  tab--;
  maqola.style.transform = `rotateY(${60 * tab}deg)`;
});

document.querySelectorAll(".maqola-card").forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = "/maqolalar/" + e.dataset.id;
  });
});
