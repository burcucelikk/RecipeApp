import React from 'react'
import './recipeCard.css'

const RecipeCard = ({id,title,description,image}) => {
  return (
    <div className='recipe-card'>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default RecipeCard