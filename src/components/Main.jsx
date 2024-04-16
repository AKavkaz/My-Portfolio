import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init();
  }, []);
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
                <a className="about__link nav__link" href="#about">
                  about me
                </a>
              </p>
            </div>
          </header>
        </div>
      </section>
      <section id="about">
        <div className="row">
          <div className="about">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="about__container"
            >
              <h1 className="title2">About Me</h1>
              <div className="about_text">
                <p className="about__para"></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="row">
          <div className="skills">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="skills__container"
            >
              <h1 className="title2">My Skills</h1>
              <div className="skill__buttons">
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/html5.svg"
                    alt=""
                  />
                  <p className="skill__title orange">HTML</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="50"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/1ac69ce5fbc389725f16f989fa53c62d6e1b4883/social%20icons/css3.svg"
                    alt=""
                  />
                  <p className="skill__title blue">CSS</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/javascript.svg"
                    alt=""
                  />
                  <p className="skill__title yellow">JavaScript</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="150"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/programming%20languages/typescript.svg"
                    alt=""
                  />
                  <p className="skill__title blue">TypeScript</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/frameworks/react.svg"
                    alt=""
                  />
                  <p className="skill__title lightblue">React</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/7c0ac2ceb9f9d24992ec393d11fa7337d2f92466/cloud/firebase.svg"
                    alt=""
                  />
                  <p className="skill__title yellow">Firebase</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt=""
                  />
                  <p className="skill__title black">Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
