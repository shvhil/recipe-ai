 export default function GetRecipe(props) {
    return(
	<div className="call-to-action-container">
	    <div className="call-to-action-subcontainer">
		<p> Done adding ingredients? </p>
		<button className="generate-btn btn" name="generate" onClick={props.showSuggests}> Generate Recipe </button> 
	    </div>
	</div>
    )
 }
