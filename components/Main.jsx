import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsList = ingredients.map((item) => {
    return <li key={item}> {item} </li>;
  });

  function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const newIngredient = formData.get("new-ingredient");
    addToList(newIngredient);
    this.console.log(ingredients + " Added");
    formElement.reset();
  }

  function addToList(newIngredient) {
    setIngredients((addIngredient) => [...addIngredient, newIngredient]);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          className="ingredient-input"
          aria-label="Add Ingredient"
          placeholder="eg. oregano"
          name="new-ingredient"
        />
        <button className="ingredient-submit-btn" type="submit">
          + Add Ingredient
        </button>
      </form>
      <div className="ingredients-list-container">
        <div className="ingredients-list-subcontainer">
          <h2 className="ingredients-list-title">
            {ingredients.length ? "Ingredients Added" : ""}
          </h2>
          <ul className="ingredients-list"> {ingredientsList} </ul>
        </div>
      </div>
    </main>
  );
}
