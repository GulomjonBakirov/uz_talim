const btn = document.getElementById("btn");
const login = document.getElementById("login");
const pass = document.getElementById("password");
const message = document.querySelector(".message");
const success = "rgb(65, 241, 21)";
const bad = " rgb(167, 17, 17)";
btn.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();

  const json = JSON.stringify({
    login: login.value,
    password: pass.value,
  });
  xhr.timeout = 10000;
  xhr.open("POST", location.href, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");

  xhr.send(json);
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
    }, 3000);
    if (h.status == "OK") {
      setTimeout(() => {
        location.href = location.href + "darslik";
      }, 3500);
    }
  };

  //   xhr.onprogress = function (event) {
  //     if (event.lengthComputable) {
  //       console.log(`Received ${event.loaded} of ${event.total} bytes`);
  //     } else {
  //       console.log(`Received ${event.loaded} bytes`); // no Content-Length
  //     }
  //   };

  xhr.onerror = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML =
      "requestda xatolik yuz berdi sizda net tezligi past yoki net bilan muammo bor";
    message.style.opacity = "1";
    message.style.backgroundColor = h != "OK" ? bad : success;
    setTimeout(() => {
      message.style.opacity = "0";
    }, 3000);
  };
});
