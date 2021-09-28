import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { Modal, Button } from "antd";

import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Header/header.css";
import ModalView from "./Modal";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElement, setAnchorElement] = useState(null);
  const openNews = Boolean(anchorEl);
  const openAccount = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setAnchorElement(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElement(null);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  const ModalVisibel = (modalVisible) => {
    setModalVisible(modalVisible);
  };
  const Modal2Visibel = (modal2Visible) => {
    setModal2Visible(modal2Visible);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h2 className="headerLogo">
            <Link to="/" style={{ textDecoration: "none", color: "#febd69" }}>
              Uz Ta'lim
            </Link>
          </h2>
          <ul className="navList">
            <li className="navItem">
              <NavLink
                to="/"
                exact
                activeClassName="active"
                className="navLink "
              >
                Bosh Sahifa
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/maqola"
                activeClassName="active"
                className="navLink"
              >
                Maqola
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink to="/audio" activeClassName="active" className="navLink">
                Audio Kitoblar
              </NavLink>
            </li>
            <li className="navItem">
              <NavLink
                to="/yangiliklar"
                activeClassName="active"
                className="navLink"
              >
                Yangiliklar
              </NavLink>
            </li>
          </ul>
          {true ? (
            <div>
              <Button className="navbarBtn" onClick={() => ModalVisibel(true)}>
                Kirish
              </Button>

              <Button className="navbarBtn" onClick={() => Modal2Visibel(true)}>
                Ro'yxatdan O'tish
              </Button>
              <ModalView
                Modal2Visibel={Modal2Visibel}
                modal2Visible={modal2Visible}
              />
              <ModalView
                ModalVisibel={ModalVisibel}
                modalVisible={modalVisible}
              />
            </div>
          ) : (
            <>
              <PersonIcon
                style={{ cursor: "pointer" }}
                id="accountButton"
                aria-controls="account"
                aria-haspopup="true"
                aria-expanded={openAccount ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="account"
                anchorEl={anchorElement}
                open={Boolean(anchorElement)}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "accountButton",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/darsliklarim"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "#111" }}
                  >
                    Darsliklarim
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/profil"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "#111" }}
                  >
                    Profil
                  </NavLink>
                </MenuItem>
              </Menu>
            </>
          )}
        </div>
      </header>
    </>
  );
}
