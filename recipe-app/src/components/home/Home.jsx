import React from 'react'
import './home.css'
import NewRecipeForm from '../newRecipeForm/NewRecipeForm'

const Home = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Recipe Sharing Platform</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <NewRecipeForm/>
    </div>
  )
}
export default Home