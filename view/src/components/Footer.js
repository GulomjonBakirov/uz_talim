import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
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
              <h2>Biz bilan aloqa:</h2>
              <div class="aloqa">
                <a href="mailto:example@gmail.com">
                  <EmailIcon className="icon" />
                  example@gmail.com
                </a>
                <a href="tel:+998990886677">
                  <PhoneIcon className="icon" />
                  +998990886677
                </a>
                <a href="tel:+998990896677">
                  <PhoneIcon className="icon" />
                  +998990896677
                </a>
              </div>
            </div>
            <div class="socialMedia">
              <div>Ijtimoiy tarmoqlar</div>
              <div class="links">
                <a href="https:/t.me/ermatovs_portfolio">
                  <TelegramIcon />
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <FacebookIcon />
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <InstagramIcon />
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <YouTubeIcon />
                </a>
                <a href="https:/t.me/ermatovs_portfolio">
                  <TwitterIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
