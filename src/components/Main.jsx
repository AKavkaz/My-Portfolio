import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Main() {
  return (
    <div className="row">
      <header className="header">
        <div className="header__container">
          <h1 className="title">Hey</h1>
          <h1 className="title">I'm Andrew.</h1>
          <p className="header__para">
            I'm a Student currently studying frontend software, looking to gain
            experience in the industry.
            <br />
            Here's a bit more <a className="about__link" href="#about">about me</a>.
          </p>
          {/* <div className="social__list">
            <a
              href="https://github.com/AKavkaz"
              target="_blank"
              className="social__link"
            >
              <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a href="mailto:andrewkhomoutov@hotmail.com">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
            </a>
          </div> */}
        </div>
      </header>
    </div>
  );
}

export default Main;
