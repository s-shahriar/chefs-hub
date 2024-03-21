import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cooking from "./Cooking.jsx";
import RecipeList from "./RecipeList";
import "./Recipes.css";


const Recipes = () => {

  const notify = () => toast("Recipe has already been selected");

  const [selectedRecipe,setSelectedRecipe] = useState([])

  const wantToCookHandler =(recipe)=> {
    const isRecipeSelected = selectedRecipe.some(selected => selected.recipe_id === recipe.recipe_id);
    if (isRecipeSelected) {
      notify();
      return;
    }
    const newRecipeList = [...selectedRecipe,recipe]
    setSelectedRecipe(newRecipeList)
  };  

  const prepareLoader =(prepared) => {
    const updatedLoader = selectedRecipe.filter(recipe => recipe.recipe_id !== prepared.recipe_id)
    setSelectedRecipe(updatedLoader)
  }

  return (
    <div className="container mx-auto text-center">
        <ToastContainer />
      <div className="recipe-top">
        <h1>Our Recipes</h1>
        <p>
          Our Recipes: Discover a world of culinary delights crafted with
          passion and precision
        </p>
        <p>
          From classic favorites to innovative creations, there's something for
          every palate
        </p>
      </div>
      <div className="recipe-bottom grid gap-4 mt-8">
        <div className="recipe-list lg:col-span-1">
          <RecipeList wantToCookHandler={wantToCookHandler}/>
        </div>
        <div className="cooking lg:col-span-1">
          <Cooking cookData={selectedRecipe} prepareLoader={prepareLoader}/>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
