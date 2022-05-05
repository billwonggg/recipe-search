import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ recipe, setModalRecipe }) => {
  const title = recipe.recipe.label;
  const img = recipe.recipe.image;
  const ingredients = recipe.recipe.ingredients;
  const cuisine = String(recipe.recipe.cuisineType);
  const capatalisedCuisine = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);
  const ingredients_list = ingredients.map((ig) => ig.text);
  const unique_ingredients = [...new Set(ingredients_list)];

  const handleClick = () => {
    setModalRecipe(recipe);
  };

  return (
    <div key={title} className={style.recipe} onClick={handleClick}>
      <h1>{title}</h1>
      <h2 key={title + "_cuisine"}>{capatalisedCuisine} Cuisine</h2>
      <ul key={title + "_ig"}>
        {unique_ingredients.map((ig, i) => (
          <li key={title + "_ig" + i}>{ig}</li>
        ))}
      </ul>
      <img key={title + "img"} src={img} alt="" />
    </div>
  );
};

export default Recipe;
