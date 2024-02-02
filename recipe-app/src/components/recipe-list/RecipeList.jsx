import React from 'react'
import RecipeCard from '../recide-card/RecipeCard'
import './recipeList.css'

const RecipeList = ({recipes}) => {
  return (
    <div className='recipe-list'>
        {recipes.map((recipe) => <RecipeCard key={recipe.id} {...recipe}/>)}
    </div>
  )
}

export default RecipeList