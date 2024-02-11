import React, { useContext } from 'react'
import './recipeCard.css'
import { ApiContext } from '../../context/ApiContext'
import { Link } from 'react-router-dom'


const RecipeCard = ({id,title,description,image}) => {
  
  const{isLoading,deleteRecipe,startEditing}=useContext(ApiContext)
  
  return (
    <div className='recipe-card'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='button-container'>
          <Link to="/editRecipeForm" onClick={()=> startEditing(id)}>Edit</Link>
          <button onClick={() => deleteRecipe(id)}>{isLoading.delete.includes(id) ? "Deleting..." : "Delete"}</button>
        </div>
    </div>
  )
}

export default RecipeCard