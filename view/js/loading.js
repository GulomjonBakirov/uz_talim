window.onload = () => {
  document.querySelector(".loading").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 1000);
};
