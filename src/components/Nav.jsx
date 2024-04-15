import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  function openNav() {
    const nav = document.querySelector(".nav__container");

    if (!navOpen) {
      setNavOpen(true);
      nav.style.height = "95vh";
      nav.style.transition = "all 500ms ease";
    } else {
      nav.style.height = "80px";
      setNavOpen(false);
    }
  }

  return (
    <nav>
      <div className="nav__container">
        <div className="nav__content">
          <div className="logo">
            <Link className="about__link" to="/" >Andrew Khomoutov</Link>
          </div>
          <ul className="nav__links">
            <li>
              <a className="nav__link" href="#about">
                About Me
              </a>
            </li>
            <li>
              <a className="nav__link" href="#skills">
                My Skills
              </a>
            </li>
            <li>
              <a className="nav__link" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a
                className="nav__link"
                href="mailto:andrewkhomoutov@hotmail.com"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="contrast">
                <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" />
              </button>
            </li>
          </ul>
          <button className="btn__menu" onClick={() => openNav()}>
            {navOpen ? (
              <FontAwesomeIcon
                className="nav__arrow"
                icon="fa-solid fa-angle-down"
              />
            ) : (
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            )}
          </button>
        </div>
        {navOpen ? (
          <div className="nav__mobile">
            <ul className="nav__mobile--links">
              <li>
                <a className="nav__mobile--link" href="#about">
                  About Me
                </a>
              </li>
              <li>
                <a className="nav__mobile--link" href="#skills">
                  My Skills
                </a>
              </li>
              <li>
                <a className="nav__mobile--link" href="#projects">
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="nav__mobile--link"
                  href="mailto:andrewkhomoutov@hotmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}

export default Nav;
