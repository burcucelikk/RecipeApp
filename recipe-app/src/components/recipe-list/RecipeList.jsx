import React, { useContext } from 'react'
import RecipeCard from '../recipe-card/RecipeCard'
import './recipeList.css'
import { ApiContext } from '../../context/ApiContext'

const RecipeList = () => {
  const {recipes, isLoading} =useContext(ApiContext)
  return (
    <div className='recipe-list'>
      {isLoading.read && <p>Loading...</p>}
      {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe}/>)}
    </div>
  )
}

export default RecipeList