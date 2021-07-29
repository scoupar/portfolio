import React from "react";
import DevIcon from "devicon-react-svg";
import { NavHashLink } from "react-router-hash-link";

const About = () => {
  return (
    <>
      <section id="about">
        <br></br>
        <h1 className="title">
          <span>Hello,</span>
        </h1>
        <div className="about-body">
          <p>
            I'm <span>Scott Coupar</span> - a full-stack developer based in
            Glasgow, Scotland. After making the decision to change careers, I
            have recently graduated from an intensive Professional Software
            Development course at <span>CodeClan</span>.
          </p>
          <p>
            The course has not only taught me the most relevant and valuable
            skills required to be a software developer, it has also awoken a
            desire in myself to continuously improve and learn. I have
            experience with <span>Python, Java and JavaScript</span> and having
            learned the foundations of these 3 languages in a 16-week period I
            am now confident in my abilities to pick up new languages and skills
            whenever required.
          </p>
          <p>
            I'm now looking for opportunites to continue developing both
            software and myself.
          </p>
          <p>You can see some of my work in the projects section below.</p>
          <br></br>
          <NavHashLink
            smooth
            to="/#projectslist"
            scroll={(el) =>
              el.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="button2"
            activeClassName="activeRoute"
          >
            View my projects
          </NavHashLink>
          {/* <div className ="devicon-container">
        <DevIcon icon ="python" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="java" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="javascript" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="html5" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="css3" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="npm" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="visualstudio" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="postgresql" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="mongodb" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="git" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="github_badge" height = {50} fill="whitesmoke"/>
        <DevIcon icon ="intellij" height = {50} fill="whitesmoke"/>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default About;
