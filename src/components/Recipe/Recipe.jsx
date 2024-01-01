import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe, setModalRecipe }) => {
  const title = recipe.label;
  const img = recipe.image;

  const handleClick = () => {
    setModalRecipe(recipe);
  };

  return (
    <div key={title} className={style.recipe} onClick={handleClick}>
      <h1>{title}</h1>
      <img key={title + "img"} src={img} alt="" />
    </div>
  );
};

export default Recipe;
