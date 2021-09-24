document.querySelectorAll(".audio--card").forEach((e) => {
  const i = e.children[0].children[1].children[0].children[0];
  const disk = e.children[0].children[0].children[0];
  const titr = e.children[1].children[0];
  titr.stop();

  const audio = e.children[0].children[2];
  i.addEventListener("click", (e) => {
    if (i.classList.contains("fa-pause")) {
      audio.pause();
      titr.stop();
      disk.style.animation = "none";
      i.className = "fas fa-play";
    } else {
      audio.play();
      titr.start();
      disk.style.animation = "rotate 2s linear infinite";
      i.className = "fas fa-pause";
    }
  });
});
