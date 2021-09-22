const success = "rgb(65, 241, 21)";
const bad = " rgb(167, 17, 17)";
const btn = document.querySelector(".about--button button");
const muammo = document.querySelector("textarea");
const ism = document.querySelector('input[type="text"]');
const email = document.querySelector('input[type="email"]');
const message = document.querySelector(".message");
const emailreg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (muammo.value.trim().length == 0) {
    message.innerHTML = "Iltimos muammoni kiriting";
    message.style.opacity = "1";
    btn.setAttribute("disabled", "disabled");
    setTimeout(() => {
      btn.removeAttribute("disabled");
      message.style.opacity = "0";
      message.style.backgroundColor = bad;
    }, 3000);
  } else if (ism.value.trim().length == 0) {
    message.innerHTML = "Iltimos ismingizni kiriting";
    message.style.opacity = "1";
    btn.setAttribute("disabled", "disabled");
    message.style.backgroundColor = bad;
    setTimeout(() => {
      btn.removeAttribute("disabled");
      message.style.opacity = "0";
    }, 3000);
  } else if (email.value.trim().length == 0) {
    message.innerHTML = "Iltimos emailingizni kiriting";
    message.style.opacity = "1";
    message.style.backgroundColor = bad;
    btn.setAttribute("disabled", "disabled");
    setTimeout(() => {
      btn.removeAttribute("disabled");
      message.style.opacity = "0";
    }, 3000);
  } else if (!emailreg.test(email.value)) {
    message.innerHTML = "Iltimos to'g'ri email kiriting";
    message.style.opacity = "1";
    message.style.backgroundColor = bad;
    btn.setAttribute("disabled", "disabled");
    setTimeout(() => {
      btn.removeAttribute("disabled");
      message.style.opacity = "0";
    }, 3000);
  } else {
    message.innerHTML = "Muvaffaqiyatli";
    message.style.opacity = "1";
    message.style.backgroundColor = success;
    btn.setAttribute("disabled", "disabled");
    setTimeout(() => {
      btn.removeAttribute("disabled");
      message.style.opacity = "0";
    }, 3000);
  }
  muammo.value = "";
  ism.value = "";
  email.value = "";
});
