import React, { useEffect, useState } from "react";
import "./App.css";
import ScrollBar from "./components/ScrollBar";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import ScrollUp from "./components/ScrollUp";
import GridLoader from "react-spinners/GridLoader";
import InfoModal from "./components/InfoModal";

const App = () => {
  // States
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("creamy pasta");
  const [modalRecipe, setModalRecipe] = useState(null);

  // use env variables for api keys
  const APP_ID = process.env.REACT_APP_API_APP_ID;
  const APP_KEY = process.env.REACT_APP_API_APP_KEY;

  // Effects
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // every time the query (when user submits) changes, we call API
  useEffect(() => {
    // make the API call asynchronously
    const recipeAPI = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          setRecipes(data.hits);
        }
      } catch (error) {
        console.error(error);
      }
    };
    recipeAPI();
  }, [query]);

  // when user presses the submit button, clear search box and call API
  const getSearch = () => {
    // search keyword too short
    setSearch("");
    if (search.length > 1) {
      setQuery(search);
    }
  };
  console.log(modalRecipe);

  // loading page
  if (loading) {
    return (
      <div className="loadingBG">
        <GridLoader color={"#C03C75"} loading={loading} size={20} />
      </div>
    );
  }
  return (
    <div className="App">
      <ScrollBar />
      <ScrollUp showBelow={250} />
      <div className="title">
        <Header search={search} getSearch={getSearch} setSearch={setSearch} />
      </div>
      <div className="allRecipes">
        {recipes.map((r, i) => (
          <Recipe
            key={"recipe" + i}
            recipe={r.recipe}
            setModalRecipe={setModalRecipe}
          />
        ))}
      </div>
      <InfoModal modalRecipe={modalRecipe} setModalRecipe={setModalRecipe} />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
