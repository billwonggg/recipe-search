import React, { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoModal from "./components/InfoModal";
import Recipe from "./components/Recipe";
import ScrollBar from "./components/ScrollBar";
import ScrollUp from "./components/ScrollUp";

const App = () => {
  // States
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [modalRecipe, setModalRecipe] = useState(null);

  // use env variables for api keys
  const APP_ID = process.env.REACT_APP_API_APP_ID;
  const APP_KEY = process.env.REACT_APP_API_APP_KEY;

  const recipeAPI = async (query) => {
    try {
      // const response = await fetch(
      //   `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      // );
      // if (response.ok) {
      //   const data = await response.json();
      //   setRecipes(data.hits);
      // }
      console.log(query);
    } catch (error) {
      console.error(error);
    }
  };

  // initial search on load
  useEffect(() => {
    const searchAPI = async (data) => {
      await recipeAPI(data);
      setLoading(false);
    };
    searchAPI("creamy pasta");
  }, []);

  console.log(search);

  // when user presses the submit button, clear search box and call API
  const submit = () => {
    if (search.length > 2) {
      recipeAPI(search);
      setSearch("");
    }
  };

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
        <Header search={search} submit={submit} setSearch={setSearch} />
      </div>
      <div className="allRecipes">
        {recipes.map((r, i) => (
          <Recipe key={"recipe" + i} recipe={r.recipe} setModalRecipe={setModalRecipe} />
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
