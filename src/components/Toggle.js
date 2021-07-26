import React, { useState } from "react";

const Toggle = ({ children, img }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <img src={img} className="banner" onClick={() => setToggle(!toggle)} />
      {toggle ? children : ""}
      <div className="line"></div>
    </div>
  );
};

export default Toggle;
