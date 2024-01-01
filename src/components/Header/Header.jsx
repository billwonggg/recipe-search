import React from "react";
import SearchBar from "../SearchBar";
import style from "./header.module.css";

const Header = ({ search, submit, setSearch }) => {
  return (
    <div className={style.header}>
      <h1>Recipe Search</h1>
      <p>
        This website's data is sourced from the Edamam Recipe Search API, which has over 2.3 million
        recipes across the world. <br />
        <br />
        Search up ANY kind of food (e.g. miso ramen, croissant, brownie) to see it in action. <br />
        <br />
        Click on a recipe to learn more. &nbsp;
      </p>
      <SearchBar search={search} submit={submit} setSearch={setSearch} />
    </div>
  );
};

export default Header;
