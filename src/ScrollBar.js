import React, { useState, useEffect } from "react";
import "./scrollbar.css";

const ScrollBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="scrollbar">
      <div className="progress-container">
        <div
          className="progress-bar"
          id="myBar"
          style={{ width: `${scroll}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ScrollBar;
