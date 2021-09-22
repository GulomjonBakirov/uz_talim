import React from "react";
import "../styles/login.css";

export default function Login() {
  return (
    <div>
      <canvas id="canvas"></canvas>
      <div class="message"></div>
      <div class="loading">
        <div class="loading--page"></div>
      </div>
      <div class="box">
        <div class="login-box">
          <div class="tizim">Tizimga kirish</div>
          <div class="login">
            <input placeholder="login" type="text" name="login" id="login" />
          </div>
          <div class="password">
            <input
              placeholder="parol"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div class="button">
            <button id="btn">Kirish</button>
          </div>
        </div>
      </div>
    </div>
  );
}
