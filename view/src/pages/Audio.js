import React from "react";
import "../styles/audio.css";

export default function Audio() {
  return (
    <section class="audiolar">
      <div class="container">
        <div class="audio--box">
          <div class="row">
            <div class="col col-xl-4 col-md-6 col-sm-12">
              <div class="audio--card">
                <div>
                  <div class="audio--disk">
                    <div></div>
                  </div>
                  <div class="audio--controls">
                    <div class="play-pause">
                      <i class="fas fa-play"></i>
                    </div>
                  </div>
                  <audio loop src=""></audio>
                </div>
                <div>
                  <marquee dir="ltr" class="title"></marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
