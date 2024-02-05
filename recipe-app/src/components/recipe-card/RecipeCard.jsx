import React from 'react'
import axios from 'axios'
import './recipeCard.css'


const RecipeCard = ({id,title,description,image,toggleEditForm,deleteRecipe,startEditing}) => {
  
  
  return (
    <div className='recipe-card'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='button-container'>
          <button onClick={()=>{
            toggleEditForm()
            startEditing(id)
          }}>Edit</button>
          <button onClick={() => deleteRecipe(id)}>Delete</button>
        </div>
    </div>
  )
}

export default RecipeCard