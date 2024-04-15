import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'


function Main() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <section id="landing">
        <div className="row">
          <header className="header">
            <div className="header__container">
              <h1 className="title">Hey</h1>
              <h1 className="title">I'm Andrew.</h1>
              <p className="header__para">
                I'm a Student currently studying frontend software, looking to
                gain experience in the industry.
                <br />
                Here's a bit more{" "}
                <Link className="about__link" to="#about">
                  about me
                </Link>
                .
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
      </section>
      <section id="about">
        <div className="row">
          <div className="about">
            <div data-aos="fade-up" className="about__container">
              <h1 className="title2">About Me</h1>
              <div className="about_text">
                <p className="about__para"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="skills">
        <div className="row">
          <div className="skills">
            <div className="skills__container">
              <h1 className="title2">My Skills</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
