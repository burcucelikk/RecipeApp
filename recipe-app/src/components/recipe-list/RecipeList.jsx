import React, { useState } from 'react'
import RecipeCard from '../recipe-card/RecipeCard'
import './recipeList.css'

const RecipeList = ({recipes, onEdit,deleteRecipe ,toggleEditForm, startEditing}) => {

  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe} onEdit={() => onEdit(recipe.id)} deleteRecipe={deleteRecipe} toggleEditForm={toggleEditForm} startEditing={startEditing}/>)}
    </div>
  )
}

export default RecipeList