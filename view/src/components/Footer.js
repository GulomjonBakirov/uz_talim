import React from "react";
import "../styles/Footer/footer.css";

export default function Footer() {
  return (
    <>
      <footer className="Footer">
        <div class="container">
          <div className="row">
            <div className="inside">
              <h1 className="logo">UZ TA'LIM</h1>
              <p>Biz bilan yanada qiziqroq</p>
            </div>
            <div className="contact">
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
            <div class="socialMedia">
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
    </>
  );
}
