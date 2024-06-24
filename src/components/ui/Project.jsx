import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Project({ title, github, url }) {
  return (
    <div
      data-aos="flip-right"
      data-aos-duration="1000"
      className="project__card"
    >
      <div className="project__info">
        <h3>{title}</h3>
        <div className="project__links">
          <a target="blank" href={url}>
            <FontAwesomeIcon icon="fa-solid fa-link" />
          </a>
          <a target="blank" href={github}>
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
