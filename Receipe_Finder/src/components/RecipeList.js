import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeList = ({ recipes }) => {
  const navigate = useNavigate();

  const handleViewRecipe = (recipe) => {
    navigate("/recipe-summary", { state: { recipe: recipe.recipe } });
  };

  return (
    <div className="recipe-list">
      {recipes.length === 0 ? (
        <p>No recipes found. Try searching for something else.</p>
      ) : (
        recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h2>{recipe.recipe.label}</h2>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <button onClick={() => handleViewRecipe(recipe)}>View Recipe</button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
