import React from "react";
import stockmanagerbanner from "../static/images/stockmanagerbanner.png";
import hellospacebanner from "../static/images/Hellospacebanner.png";
import ccnewsbanner from "../static/images/ccnewsbanner.png";
import vasabanner from "../static/images/vasa-banner.png";

const ProjectsList = () => {
  return (
    <div className="list-container">
      <h1>PROJECTS</h1>
      <img className="banner" src={vasabanner} alt="vasa banner" />
      <img className="banner" src={ccnewsbanner} alt="cc news banner" />
      <img className="banner" src={hellospacebanner} alt="hello space banner" />
      <img
        className="banner"
        src={stockmanagerbanner}
        alt="stock manager banner"
      />
    </div>
  );
};

export default ProjectsList;
