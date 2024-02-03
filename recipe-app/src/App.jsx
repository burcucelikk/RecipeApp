import { useEffect, useState } from 'react'
import './App.css'
// import Counter from './components/Counter';
import Header from './components/header/Header'
import Home from './components/home/Home'
import RecipeList from './components/recipe-list/RecipeList'
// import MyUseEffect from './components/MyUseEffect'
import axios from 'axios'
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm'

function App() {

  const [recipes, setRecipes] =useState([])
  useEffect(()=>{

    axios
    .get("http://localhost:3000/recipes")
    .then(response=> setRecipes(response.data))
    .catch(error=>console.log("There was an error while fetching the recipes!",error))

  },[])

  const addRecipe= (newRecipe)=>{
    setRecipes([...recipes,newRecipe])
  }

  return (
    <>
      <Header/>
      <Home/>
      {/* <Counter/> */}
      {/* <MyUseEffect/> */}
      <NewRecipeForm addRecipe={addRecipe}/>
      <RecipeList recipes={recipes}/>
    </>
  )
}

export default App
