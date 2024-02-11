import React from 'react'
import './home.css'
import RecipeList from '../recipe-list/RecipeList'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Recipe Sharing Platform</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <RecipeList/>
    </div>
  )
}
export default Home