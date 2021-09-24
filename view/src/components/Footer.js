import React from "react";
// import "../styles/footer.css";

export default function Footer() {
  return (
    <>
      <svg>
        <defs>
          <filter id="gooo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="ogo" />
            <feColorMatrix
              in="ogo"
              type="matrix"
              mode="matrix"
              values="
             1 0 0 0 0
             0 1 0 0 0
             0 0 1 0 0 
             0 0 0 700 -20 "
              result="ogo2"
            />
            <feComposite in="SourceGraphic" in2="ogo2" operator="atop" />
          </filter>
        </defs>
      </svg>
      <footer>
        <div class="container">
          <div class="row">
            <div class="col col-xl-4 col-md-6 col-sm-12">
              <div>UZ TA'LIM</div>
              <div>Biz bilan yanada qiziqroq</div>
            </div>
            <div class="col col-xl-4 col-md-6 col-sm-12">
              <div>Biz bilan aloqa</div>
              <div class="aloqa">
                <a href="mailto:example@gmail.com">
                  <i class="fas fa-envelope"></i>
                  example@gmail.com
                </a>
                <a href="tel:+998990886677">
                  <i class="fas fa-phone"></i>
                  +998990886677
                </a>
                <a href="tel:+998990896677">
                  <i class="fas fa-phone"></i>
                  +998990896677
                </a>
              </div>
            </div>
            <div class="col col-xl-4 col-md-6 col-sm-12">
              <div>Ijtimoiy tarmoqlar</div>
              <div class="links">
                <a href="https:/t.me/ermatovs_portfolio">
                  <i class="fab fa-telegram"></i>
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <i class="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <script src="/js/loading.js"></script> */}
    </>
  );
}
