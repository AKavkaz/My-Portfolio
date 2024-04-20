import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                I'm a Frontend Developer currently building web applications and
                learning Frontend software.
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
              <p className="about__text">
                I'm an 18 year old Frontend developer in Australia, I have a
                passion for frontend technology and creating efficient,
                user-friendly and responsive websites.
                <br />
                Currently, I build web applications for freelance clients, feel
                free to contact me about any freelance work{" "}
                <a className="nav__link" href="#contact">
                  here.
                </a>
              </p>
              <div className="social__links">
                <a
                  className="social__link"
                  target="_blank"
                  href="https://github.com/AKavkaz"
                >
                  <FontAwesomeIcon icon="fa-brands fa-square-github" />
                </a>
                <a
                  className="social__link"
                  target="_blank"
                  href=""
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <a
                  className="social__link"
                  target="_blank"
                  href="mailto:andrewkhomoutov@hotmail.com"
                >
                  <FontAwesomeIcon icon="fa-solid fa-square-envelope" />
                </a>
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
              data-aos-duration="500"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
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
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
                    alt=""
                  />
                  <p className="skill__title orange">Firebase</p>
                </div>
                <div
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                  className="skill__button"
                >
                  <img
                    className="skill__img"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
                    alt=""
                  />
                  <p className="skill__title black">Next.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="row">
          <div className="projects">
            <div className="projects__container">
              <h2 className="title2">
                  My Projects
              </h2>
            <div className="projects__carousel">

            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
