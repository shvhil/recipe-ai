"use client"
import { useState } from "react";
import GetRecipe from "./GetRecipe"

export default function Main() {
  const [ingredients, setIngredients] = useState([])

  const ingredientsList = ingredients.map((item) => {
    return <li key={item}> {item} </li>;
  })

    function handleSubmit(formData) {
	const newIngredient = formData.get("new-ingredient");
	setIngredients((addIngredient) => [...addIngredient, newIngredient]);
  }

  return (
    <main>
      <form action={handleSubmit} method="get" className="add-ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          placeholder="eg. oregano"
          name="new-ingredient"
        />
        <button className="ingredient-submit-btn btn">
          + Add Ingredient
        </button>
      </form>
      <div className="ingredients-list-container">
        <div className="ingredients-list-subcontainer">
          <h2 className="ingredients-list-title">
            {ingredients.length ? "Ingredients Added": undefined}
          </h2>
          <ul className="ingredients-list"> {ingredientsList} </ul>
      {ingredients.length > 3 ? <GetRecipe /> : undefined }
        </div>
      </div>
    </main>
  );
}
