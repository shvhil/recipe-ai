export default function IngredientsList(props) {
  
    const ingredientsList = props.items.map((item) => {
	return <li key={item}> {item} </li>;
    })

    return(
	<section>
	    <div className="ingredients-list-container">
		<div className="ingredients-list-subcontainer">
		    <h2 className="ingredients-list-title">
			{props.items.length > 0 ? "Ingredients Added": undefined}
		    </h2>
		    <ul className="ingredients-list"> {ingredientsList} </ul>
		</div>
	    </div>
 	</section>
    )
}
