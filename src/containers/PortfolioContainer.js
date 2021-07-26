import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../components/NavBar";
import Logo from "../components/Logo";
import Landing from "../components/Landing";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import ProjectsList from "../components/ProjectsList";

const PortfolioContainer = () => {
  return (
    <>
      <header>
        <div className="navbar">
          <NavBar />
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <Landing />
            <About />
            <ProjectsList />
            <Projects />
            <Contact />
          </Route>
        </Switch>
      </main>
    </>
  );
};

export default PortfolioContainer;
