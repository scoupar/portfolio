import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, img }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      className="list-container"
      layout
      onClick={() => setToggle(!toggle)}
    >
      <img layout src={img} className="banner" />
      {toggle ? children : ""}
      <div className="line"></div>
    </motion.div>
  );
};

export default Toggle;
