import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxEnter } from "react-icons/rx";

// Own Dependencies
import logo from "../../assets/images/logo.png";

function Header(props) {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header id="main-header">
      <div className="container-landscape-max">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img alt="Home" title="Home" src={logo} />
              </Link>
            </li>
            <li
              className="menu-toggler"
              onClick={() => setShowMobileMenu(true)}
            >
              <RxHamburgerMenu color="#fff" size={25} />
            </li>
            <li
              className={`mobile-menu${
                showMobileMenu ? " show-mobile-menu" : ""
              }`}
            >
              <ul>
                <li>
                  <RxEnter
                    color="#fff"
                    onClick={() => setShowMobileMenu(false)}
                    size={27}
                  />
                </li>
                <li>
                  <a href="">Map</a>
                </li>
                <li>
                  <a href="">About the app</a>
                </li>
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Log in</a>
                </li>
              </ul>
            </li>
            <li className="menu">
              <ul>
                <li>
                  <a href="">Map</a>
                </li>
                <li>
                  <a href="">About the app</a>
                </li>
              </ul>
            </li>
            <li className="user-actions">
              <ul>
                <li>
                  <a href="">Register</a>
                </li>
                <li>
                  <a href="">Log in</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
