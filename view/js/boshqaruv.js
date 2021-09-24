const users = document.querySelector(".users-tag");
const usersView = users.children[1].children[0];
const usersAdd = users.children[1].children[1];
const AdminTab = document.querySelector(".admin-view");
const message = document.querySelector(".message");
const success = "rgb(65, 241, 21)";
const bad = " rgb(167, 17, 17)";
usersView.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.timeout = 10000;
  xhr.open("GET", location.href + "/users", true);
  xhr.send();
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      AdminTab.style.filter = "blur(0px)";
    }, 3000);
    const bo = document.createElement("table");
    bo.className = "user-table";
    const b = document.createElement("tr");
    b.innerHTML = "<td>ID</td><td>TYPE</td><td>LOGIN</td>";
    console.log(h.data);
    bo.appendChild(b);
    AdminTab.appendChild(bo);
    h.data.forEach((element) => {
      const box = document.createElement("tr");
      const id = document.createElement("td");
      const type = document.createElement("td");
      const login = document.createElement("td");
      id.innerText = element._id;
      type.innerText = element.type;
      login.innerText = element.login;
      box.appendChild(id);
      box.appendChild(type);
      box.appendChild(login);
      bo.appendChild(box);
      AdminTab.appendChild(bo);
    });
    console.log(AdminTab);
  };

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
usersAdd.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const box = document.createElement("div");
  box.className = "user-box";
  const login = document.createElement("input");
  login.setAttribute("type", "text");
  login.setAttribute("placeholder", "login");
  const password = document.createElement("input");
  password.setAttribute("type", "password");
  password.setAttribute("placeholder", "parol");
  const btn = document.createElement("button");
  btn.innerText = "qoshish";
  box.appendChild(login);
  box.appendChild(password);
  box.appendChild(btn);
  AdminTab.appendChild(box);
  AdminTab.style.filter = "blur(0px)";
  btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();

    const json = JSON.stringify({
      login: login.value,
      password: password.value,
    });
    xhr.timeout = 10000;
    xhr.open("POST", location.href + "/users", true);
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
          location.href = location.href;
        }, 3000);
      }
    };

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
});

const articles = document.querySelector(".articles-tag");
const articlesView = articles.children[1].children[0];
const articlesAdd = articles.children[1].children[1];

articlesView.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.timeout = 10000;
  xhr.open("GET", location.href + "/articles", true);
  xhr.send();
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      AdminTab.style.filter = "blur(0px)";
    }, 3000);
    const bo = document.createElement("table");
    bo.className = "user-table";
    const b = document.createElement("tr");
    b.innerHTML = "<td>ID</td><td>TITLE</td><td>CONTENT</td><td>IMAGE</td>";
    console.log(h.data);
    bo.appendChild(b);
    AdminTab.appendChild(bo);
    h.data.forEach((element) => {
      const box = document.createElement("tr");
      const id = document.createElement("td");
      const title = document.createElement("td");
      const content = document.createElement("td");
      const image = document.createElement("td");

      id.innerText = element._id;
      content.innerText = element.content.slice(0, 20);
      image.innerText = element.image.slice(0, 20);
      title.innerText = element.title;
      box.appendChild(id);
      box.appendChild(title);
      box.appendChild(content);
      box.appendChild(image);
      bo.appendChild(box);
      AdminTab.appendChild(bo);
    });
    console.log(AdminTab);
  };

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
articlesAdd.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const box = document.createElement("div");
  box.className = "user-box";
  const login = document.createElement("input");
  login.setAttribute("type", "text");
  login.setAttribute("placeholder", "mavzu");
  const password = document.createElement("input");
  password.setAttribute("type", "maqola");
  password.setAttribute("placeholder", "maqola");
  const file = document.createElement("input");
  file.setAttribute("type", "file");
  const btn = document.createElement("button");
  btn.innerText = "qoshish";
  box.appendChild(login);
  box.appendChild(password);
  box.appendChild(file);
  box.appendChild(btn);
  AdminTab.appendChild(box);
  AdminTab.style.filter = "blur(0px)";
  btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append("title", login.value);
    data.append("content", password.value);
    data.append("image", file.files[0]);
    xhr.timeout = 10000;
    xhr.open("POST", location.href + "/articles", true);
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(data);
    xhr.onload = function () {
      console.log("object");
    };
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
          location.href = location.href;
        }, 3000);
      }
    };
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
});
const audios = document.querySelector(".audio-tag");
const audiosView = audios.children[1].children[0];
const audiosAdd = audios.children[1].children[1];

audiosView.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.timeout = 10000;
  xhr.open("GET", location.href + "/audios", true);
  xhr.send();
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      AdminTab.style.filter = "blur(0px)";
    }, 3000);
    const bo = document.createElement("table");
    bo.className = "user-table";
    const b = document.createElement("tr");
    b.innerHTML = "<td>ID</td><td>TITLE</td><td>Audio</td>";
    console.log(h.data);
    bo.appendChild(b);
    AdminTab.appendChild(bo);
    h.data.forEach((element) => {
      const box = document.createElement("tr");
      const id = document.createElement("td");
      const title = document.createElement("td");
      const audio = document.createElement("td");

      id.innerText = element._id;
      audio.innerText = element.audio.slice(0, 20);
      title.innerText = element.title;
      box.appendChild(id);
      box.appendChild(title);
      box.appendChild(audio);
      bo.appendChild(box);
      AdminTab.appendChild(bo);
    });
    console.log(AdminTab);
  };

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
audiosAdd.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const box = document.createElement("div");
  box.className = "user-box";
  const login = document.createElement("input");
  login.setAttribute("type", "text");
  login.setAttribute("placeholder", "mavzu");
  const file = document.createElement("input");
  file.setAttribute("type", "file");
  const btn = document.createElement("button");
  btn.innerText = "qoshish";
  box.appendChild(login);
  box.appendChild(file);
  box.appendChild(btn);
  AdminTab.appendChild(box);
  AdminTab.style.filter = "blur(0px)";
  btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append("title", login.value);
    data.append("audio", file.files[0]);
    xhr.timeout = 10000;
    xhr.open("POST", location.href + "/audios", true);
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(data);
    xhr.onload = function () {
      console.log(xhr.response);
      const h = JSON.parse(xhr.response);
      message.innerHTML = h.message;
      message.style.backgroundColor = h.status != "OK" ? bad : success;
      message.style.opacity = "1";
      setTimeout(() => {
        message.style.opacity = "0";
      }, 3000);
      if (h.status == "OK") {
        setTimeout(() => {
          location.href = location.href;
        }, 3000);
      }
    };
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
});
const lessons = document.querySelector(".lessons-tag");
const lessonsView = lessons.children[1].children[0];
const lessonsAdd = lessons.children[1].children[1];
lessonsView.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.timeout = 10000;
  xhr.open("GET", location.href + "/lessons", true);
  xhr.send();
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      AdminTab.style.filter = "blur(0px)";
    }, 3000);
    const bo = document.createElement("table");
    bo.className = "user-table";
    const b = document.createElement("tr");
    b.innerHTML =
      "<td>ID</td><td>TYPE</td><td>TITLE</td><td>CONTENT</td><td>IMAGE</td><td>VIDEO</td>";
    console.log(h.data);
    bo.appendChild(b);
    AdminTab.appendChild(bo);
    h.data.forEach((element) => {
      const box = document.createElement("tr");
      const id = document.createElement("td");
      const title = document.createElement("td");
      const type = document.createElement("td");
      const content = document.createElement("td");
      const image = document.createElement("td");
      const video = document.createElement("td");
      id.innerText = element._id;
      content.innerText = element.content.slice(0, 20);
      image.innerText = element.image.slice(0, 20);
      title.innerText = element.title;
      type.innerText = element.type;
      video.innerText = element.video;
      box.appendChild(id);
      box.appendChild(type);
      box.appendChild(title);
      box.appendChild(content);
      box.appendChild(image);
      box.appendChild(video);
      bo.appendChild(box);
      AdminTab.appendChild(bo);
    });
    console.log(AdminTab);
  };

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
lessonsAdd.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const box = document.createElement("div");
  box.className = "user-box";
  const login = document.createElement("input");
  login.setAttribute("type", "text");
  login.setAttribute("placeholder", "mavzu");
  const news = document.createElement("input");
  news.setAttribute("type", "text");
  news.setAttribute("placeholder", "yangilik");
  const type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("placeholder", "turi [science,education]");
  const image = document.createElement("input");
  image.setAttribute("type", "file");
  const video = document.createElement("input");
  video.setAttribute("type", "file");
  const btn = document.createElement("button");
  btn.innerText = "qoshish";
  box.appendChild(login);
  box.appendChild(news);
  box.appendChild(type);
  box.appendChild(video);
  box.appendChild(image);
  box.appendChild(btn);
  AdminTab.appendChild(box);
  AdminTab.style.filter = "blur(0px)";
  btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append("title", login.value);
    data.append("type", type.value);
    data.append("content", news.value);
    data.append("image", image.files[0]);
    data.append("video", video.files[0]);
    xhr.timeout = 10000;
    xhr.open("POST", location.href + "/lessons", true);
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(data);
    xhr.onload = function () {};
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
          location.href = location.href;
        }, 3000);
      }
    };
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
});

const news = document.querySelector(".news-tag");
const newsView = news.children[1].children[0];
const newsAdd = news.children[1].children[1];
newsView.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const xhr = new XMLHttpRequest();

  xhr.timeout = 10000;
  xhr.open("GET", location.href + "/news", true);
  xhr.send();
  xhr.onload = function () {
    const h = JSON.parse(xhr.response);
    message.innerHTML = h.message;
    message.style.backgroundColor = h.status != "OK" ? bad : success;
    message.style.opacity = "1";
    setTimeout(() => {
      message.style.opacity = "0";
      AdminTab.style.filter = "blur(0px)";
    }, 3000);
    const bo = document.createElement("table");
    bo.className = "user-table";
    const b = document.createElement("tr");
    b.innerHTML =
      "<td>ID</td><td>TYPE</td><td>TITLE</td><td>CONTENT</td><td>IMAGE</td>";
    console.log(h.data);
    bo.appendChild(b);
    AdminTab.appendChild(bo);
    h.data.forEach((element) => {
      const box = document.createElement("tr");
      const id = document.createElement("td");
      const title = document.createElement("td");
      const type = document.createElement("td");
      const content = document.createElement("td");
      const image = document.createElement("td");

      id.innerText = element._id;
      content.innerText = element.content.slice(0, 20);
      image.innerText = element.image.slice(0, 20);
      title.innerText = element.title;
      type.innerText = element.type;
      box.appendChild(id);
      box.appendChild(type);
      box.appendChild(title);
      box.appendChild(content);
      box.appendChild(image);
      bo.appendChild(box);
      AdminTab.appendChild(bo);
    });
    console.log(AdminTab);
  };

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
newsAdd.addEventListener("click", () => {
  AdminTab.style.filter = "blur(20px)";
  AdminTab.innerHTML = "";
  const box = document.createElement("div");
  box.className = "user-box";
  const login = document.createElement("input");
  login.setAttribute("type", "text");
  login.setAttribute("placeholder", "mavzu");
  const news = document.createElement("input");
  news.setAttribute("type", "text");
  news.setAttribute("placeholder", "yangilik");
  const type = document.createElement("input");
  type.setAttribute("type", "text");
  type.setAttribute("placeholder", "turi [science,education]");
  const file = document.createElement("input");
  file.setAttribute("type", "file");
  const btn = document.createElement("button");
  btn.innerText = "qoshish";
  box.appendChild(login);
  box.appendChild(news);
  box.appendChild(type);
  box.appendChild(file);
  box.appendChild(btn);
  AdminTab.appendChild(box);
  AdminTab.style.filter = "blur(0px)";
  btn.addEventListener("click", () => {
    let xhr = new XMLHttpRequest();
    const data = new FormData();
    data.append("title", login.value);
    data.append("type", type.value);
    data.append("content", news.value);
    data.append("image", file.files[0]);
    xhr.timeout = 10000;
    xhr.open("POST", location.href + "/news", true);
    // xhr.setRequestHeader("Content-type", "multipart/form-data");
    xhr.send(data);
    xhr.onload = function () {};
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
          location.href = location.href;
        }, 3000);
      }
    };
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
});
