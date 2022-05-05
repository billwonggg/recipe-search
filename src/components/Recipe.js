import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe, setModal }) => {
  const title = recipe.recipe.label;
  const calories = recipe.recipe.calories;
  const img = recipe.recipe.image;
  const ingredients = recipe.recipe.ingredients;
  const cuisine = recipe.recipe.cuisineType;

  const ingredients_list = ingredients.map((ig) => ig.text);
  const unique_ingredients = [...new Set(ingredients_list)];
  return (
    <div key={title} className={style.recipe}>
      <h1>{title}</h1>
      <h2 key={title + "_cuisine"}>{cuisine} cuisine</h2>
      <ul key={title + "_ig"}>
        {unique_ingredients.map((ig, i) => (
          <li key={title + "_ig" + i}>{ig}</li>
        ))}
      </ul>
      {/* <p key={title + "calories"}>
        Calories:
        <strong> {Math.ceil(calories)}</strong>
      </p> */}
      <img key={title + "img"} src={img} alt="" />
    </div>
  );
};

export default Recipe;
