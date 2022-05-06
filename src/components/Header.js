import React from "react";
import style from "./header.module.css";
import PulseLoader from "react-spinners/PulseLoader";
import SearchBar from "material-ui-search-bar";

const Header = ({ search, getSearch, setSearch }) => {
  return (
    <div className={style.header}>
      <h1>Recipe Search</h1>
      <p>
        This website's data is sourced from the Edamam Recipe Search API, which
        has over 2.3 million recipes across the world. <br />
        <br />
        Search up ANY kind of food (e.g. miso ramen, croissant, brownie) to see
        it in action. <br />
        <br />
        Click on a recipe to learn more. &nbsp;
        <PulseLoader
          color={"#00539c"}
          loading={true}
          size={8}
          speedMultiplier={0.7}
        />
      </p>
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e)}
        placeholder="Enter your favourite dish here"
        onRequestSearch={(e) => getSearch(e)}
        cancelOnEscape={true}
        style={{
          width: "90%",
          maxWidth: "700px",
          margin: "10px",
          borderRadius: "15px",
          padding: "3px",
        }}
      />
    </div>
  );
};

export default Header;
