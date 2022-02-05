import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>Recipe Search API with React.js</h1>
      <p>
        This Edamam Recipe Search API has over 2.3 million recipes across the
        world. <br />
        <br />
        Search up <strong>ANY</strong> kind of food (e.g. pizza, croissant,
        ramen...) to see it in action.
        <br />
        <br />
        <strong>*Note*</strong> The API allows a maximum of 10 searches every
        minute.
      </p>
    </div>
  );
};

export default Header;
