(function header_links() {
  document.querySelector(".audio").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/audio";
    }, 2000);
  });
  document.querySelector(".darslik").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/darslik";
    }, 2000);
  });
  document.querySelector(".haqimizda").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/about";
    }, 2000);
  });
  document.querySelector(".maqola").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/maqolalar";
    }, 2000);
  });
  document.querySelector(".yangilik-fan").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/yangiliklar?type=science";
    }, 2000);
  });
  document.querySelector(".yangilik-talim").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/yangiliklar?type=education";
    }, 2000);
  });
  document.querySelector(".control")
    ? document.querySelector(".control").addEventListener("click", () => {
        document.querySelector("body").style.filter = "blur(20px)";
        setTimeout(() => {
          window.location.href = "/control";
        }, 2000);
      })
    : console.log("");
  document.querySelector(".tasks")
    ? document.querySelector(".tasks").addEventListener("click", () => {
        document.querySelector("body").style.filter = "blur(20px)";
        setTimeout(() => {
          window.location.href = "/tasks";
        }, 2000);
      })
    : console.log("");

  document.querySelector(".exit").addEventListener("click", () => {
    console.log(22);
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      location.href = "/";
    }, 2000);
  });
  document.querySelector(".profilim").addEventListener("click", () => {
    document.querySelector("body").style.filter = "blur(20px)";
    setTimeout(() => {
      window.location.href = "/profil";
    }, 2000);
  });
  document.querySelector(".table")
    ? document.querySelector(".table").addEventListener("click", () => {
        document.querySelector("body").style.filter = "blur(20px)";
        setTimeout(() => {
          window.location.href = "/table";
        }, 2000);
      })
    : console.log("");
})();
