import { useState } from "react";
import GetRecipe from "./GetRecipe"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"

export default function Main() {
  const [ingredients, setIngredients] = useState([])

    function handleSubmit(formData) {
	const newIngredient = formData.get("new-ingredient");
	setIngredients((addIngredient) => [...addIngredient, newIngredient]);
  }
    const [showSuggestions, setShowSuggestions] = useState(false)
    function toggleClaude() {
	setShowSuggestions( prevShow => !prevShow )
    }

  return (
    <main>
      <form action={handleSubmit} method="get" className="add-ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          placeholder="eg. oregano"
          name="new-ingredient"
	  autoFocus
	  required
        />
        <button className="ingredient-submit-btn btn">
          + Add Ingredient
        </button>
      </form>
      <IngredientsList items={ingredients} />
      {ingredients.length > 3 ? <GetRecipe showSuggests={toggleClaude}/> : undefined }
      {showSuggestions ? <ClaudeRecipe /> : undefined}
   </main>
  );
}
