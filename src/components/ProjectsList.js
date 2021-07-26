import React from "react";
import stockmanagerbanner from "../static/images/stockmanagerbanner.png";
import hellospacebanner from "../static/images/Hellospacebanner.png";
import ccnewsbanner from "../static/images/ccnewsbanner.png";
import vasabanner from "../static/images/vasa-banner.png";
import DevIcon from "devicon-react-svg";

const ProjectsList = () => {
  return (
    <div className="list-container">
      <h1>PROJECTS</h1>
      <img className="banner" src={vasabanner} alt="vasa banner" />
      <div className="project-text">
        <p>
          Mobile-first linktree-style website for Glasgow instrumental band VASA
          to display all social media / web links in one view.
        </p>
        <p>
          The main purpose of this project was to practice mobile-first design
          and create a responsive webpage for all devices.
        </p>
        <p>Created using React, HTML5 and CSS3 and deployed with Firebase</p>
        <p></p>
        <br></br>
        <a className="demo-button" href="https://wearevasa.com" target="_blank">
          View Site
        </a>
        <a
          className="demo-button"
          href="https://github.com/scoupar/vasa-mobile-site"
          target="_blank"
        >
          View Code
        </a>
      </div>
      <div className="project-devicon-container">
        <DevIcon
          className="project-devicon"
          icon="javascript"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="html5"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="css3"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="npm"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="visualstudio"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="git"
          height={40}
          fill="whitesmoke"
        />
        <DevIcon
          className="project-devicon"
          icon="github_badge"
          height={40}
          fill="whitesmoke"
        />
      </div>
      <div className="line"></div>
      <img className="banner" src={ccnewsbanner} alt="cc news banner" />
      <div className="line"></div>
      <img className="banner" src={hellospacebanner} alt="hello space banner" />
      <div className="line"></div>
      <img
        className="banner"
        src={stockmanagerbanner}
        alt="stock manager banner"
      />
      <div className="line"></div>
    </div>
  );
};

export default ProjectsList;
