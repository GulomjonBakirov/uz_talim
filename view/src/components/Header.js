import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Header/header.css";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
                Darsliklar
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
              <Link
                id="yangiliklarButton"
                aria-controls="yangiliklar"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="navLink"
                to="/fanYangiliklar"
              >
                Yangiliklar
              </Link>
              <Menu
                id="yangiliklar"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "yangiliklarButton",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/fanYangiliklar"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "#111" }}
                  >
                    Fan Yangiliklari
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to="/talimYangiliklar"
                    activeClassName="active"
                    style={{ textDecoration: "none", color: "#111" }}
                  >
                    Ta'lim yangiliklari
                  </NavLink>
                </MenuItem>
              </Menu>
            </li>
          </ul>
          {false ? (
            <Link to="/login" className="navbarBtn">
              Kirish
            </Link>
          ) : (
            <>
              <PersonIcon
                id="accountButton"
                aria-controls="account"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="account"
                anchorEl={anchorEl}
                open={open}
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
