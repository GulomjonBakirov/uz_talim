import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header/header.css";

export default function Header() {
  const [active, setActive] = useState(true);

  const menuRef = useRef();
  const headerRef = useRef();

  return (
    <>
      <header className="header">
        <div className="container">
          <h2 className="headerLogo">Uz Ta'lim</h2>
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
              <NavLink
                to="/yangiliklar"
                activeClassName="active"
                className="navLink"
              >
                Yangiliklar
              </NavLink>
            </li>
          </ul>
          <Link to="/login" className="navbarBtn">
            Kirish
          </Link>
        </div>
      </header>
    </>
  );
}
