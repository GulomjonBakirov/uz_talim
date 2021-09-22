import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <canvas id="canvas"> </canvas>
      <div class="loading">
        <div class="loading--page"></div>
      </div>
      <header>
        <nav>
          <div class="container">
            <div class="header--navbar">
              <div class="header--logo">UZ TA'LIM</div>
              <div class="header--sidebar">
                <div class="header--links">
                  <div class="darslik">Darsliklar</div>
                  <div class="maqola">Maqolalar</div>
                  <div class="audio">Audio Kitoblar</div>
                  <div class="yangilik">
                    <div>Yangiliklar</div>
                    <div>
                      <div class="yangilik-fan">Fan</div>
                      <div class="yangilik-talim">Ta'lim</div>
                    </div>
                  </div>
                  <div class="haqimizda">Biz haqimizda</div>
                </div>
                <div class="header--user">
                  <div class="user-icon">
                    <i class="fas fa-user"></i>
                  </div>
                  <div class="ex-attribute">
                    <div class="profilim">Profilim</div>

                    <div class="exit">Chiqish</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
