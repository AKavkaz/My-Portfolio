import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillButton from "./ui/Skill-Button";
import Project from "./ui/Project";
import Contact from "./Contact";

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
                free to contact me about any freelance work.
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
                  href="https://www.linkedin.com/in/andrew-khomoutov-35a769305"
                >
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                </a>
                <a
                  className="social__link"
                  href="#contact"
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
                <SkillButton
                  title="HTML"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
                  color="orange"
                />
                <SkillButton
                  title="CSS"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
                  color="blue"
                />
                <SkillButton
                  title="JavaScript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  color="yellow"
                />
                <SkillButton
                  title="TypeScript"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                  color="lightblue"
                />
                <SkillButton
                  title="React"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                  color="lightblue"
                />
                <SkillButton
                  title="Firebase"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg"
                  color="orange"
                />
                <SkillButton
                  title="Next.js"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
                  color="black"
                />
                <SkillButton
                  title="Redux"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                  color="purple"
                />
                <SkillButton
                  title="Tailwind"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  color="lightblue"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="row">
          <div
            className="projects"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <div className="projects__container">
              <h2 className="title2">My Projects</h2>
              <div className="projects__list">
                <Project
                  title="Library E-Commerce App"
                  url="https://library-react-app-alpha.vercel.app"
                  github="https://github.com/AKavkaz/library-react-app"
                />
                <Project
                  title="Miro Clone"
                  url="https://miro-clone-azure.vercel.app"
                  github="https://github.com/AKavkaz/miro-clone"
                />
                <Project
                  title="Tesla Clone"
                  url="https://tesla-clone-ae96a.web.app"
                  github="https://github.com/AKavkaz/tesla-clone"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div data-aos="fade-right" data-aos-duration="500" className="contact">
            <h1>Send me an Email 👇</h1>
            <Contact />
        </div>
      </section>
    </>
  );
}

export default Main;
