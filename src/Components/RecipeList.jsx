import React, { useEffect, useState } from "react";
import { CiTimer } from "react-icons/ci";
import { GiPowerLightning } from "react-icons/gi";
import "./RecipeList.css";

const RecipeList = ({wantToCookHandler}) => {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch("data.json")
        .then((res) => res.json())
        .then((data) => setRecipeData(data));
    };
    fetchData();
  }, []);

  return (
    <div className="food gap-4 mx-auto grid grid-cols-1 lg:grid-cols-2">
      {recipeData.map((recipe,index) => (
        <div className="border-2 p-3" key={index}>
          <img
            src={recipe.recipe_image}
            alt=""
          />
          <h1 className="mt-2 mb-2">{recipe.recipe_name}</h1>
          <p className="mt-2 mb-2">
          {recipe.short_description}
          </p>
          <hr />
          <h1 className="mt-2 mb-2">Ingredients: {recipe.ingredients.length}</h1>
          {
            recipe.ingredients.map((ingred,index)=> (
              <li key={index}>{ingred}</li>
            ))
          }
          <hr />
          <div className="timer flex gap-4 mt-4 mb-4">
            <div className="req-time flex justify-center items-center gap-2">
              <CiTimer />
              <p>{recipe.preparing_time}</p>
            </div>
            <div className="req-time flex justify-center items-center gap-2">
              <GiPowerLightning />
              <p>{recipe.calories}</p>
            </div>
          </div>
          <button className="flex justify-center items-center btn btn-accent text-white" onClick={()=> wantToCookHandler(recipe)}>
            Want to Cook
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
