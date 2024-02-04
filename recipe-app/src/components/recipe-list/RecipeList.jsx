import React, { useState } from 'react'
import RecipeCard from '../recipe-card/RecipeCard'
import './recipeList.css'

const RecipeList = ({recipes, onEdit}) => {

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} onEdit={() => onEdit(recipe.id)}/>)}
    </div>
  )
}

export default RecipeList