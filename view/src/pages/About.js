import React from "react";
// import "../styles/about.css";

export default function About() {
  return (
    <>
      <div class="message"></div>
      <section class="about">
        <div class="container">
          <div class="about--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consequatur ratione velit dolorum? Earum repellendus architecto
            eveniet. Voluptate illo quod praesentium vitae asperiores, doloribus
            laborum eos ipsa, ipsam officia tempora!
          </div>
          <div class="about--forma">
            <div class="about--desc">
              <textarea
                name="muammo"
                id="muammo"
                placeholder="muammo"
              ></textarea>
            </div>
            <div class="about--input">
              <div>
                <input type="text" placeholder="Ismingiz" id="ism" name="ism" />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="emailingiz"
                />
              </div>
            </div>
          </div>
          <div class="about--button">
            <button type="button">Yuborish</button>
          </div>
        </div>
      </section>
    </>
  );
}