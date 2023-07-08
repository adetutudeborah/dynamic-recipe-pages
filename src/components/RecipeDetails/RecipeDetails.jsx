/* eslint-disable react/prop-types */ 
import './RecipeDetails.css' 
import { Link } from 'react-router-dom'
  
function RecipeDetails({ recipes }) {

  if (!recipes) {
    return <p>No recipes available.</p>;
  }
  
  return (

    <div className='recipedetails-list'> 
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>  
            <h3 className='recipedetails-title'>{recipe.title}</h3>
            <h4 className='recipedetails-subtitle'>By {recipe.author}</h4>
            <p className='recipe-cooking-time'>Cook Time - {recipe.cookingTime} Minutes</p>
            <Link to={`/recipes/${recipe.id}`}>Cook Now</Link>
        </div> 
      ))}
    </div>
  )
}

export default RecipeDetails