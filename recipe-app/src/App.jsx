import { useEffect, useState } from 'react'
import './App.css'
// import Counter from './components/Counter';
import Header from './components/header/Header'
import Home from './components/home/Home'
import RecipeList from './components/recipe-list/RecipeList'
// import MyUseEffect from './components/MyUseEffect'
import axios from 'axios'
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm'
import EditRecipeForm from './components/editRecipeForm/EditRecipeForm'

function App() {

  const [recipes, setRecipes] =useState([])
  useEffect(()=>{

     axios
    .get("http://localhost:3000/recipes")
    .then(response=> setRecipes(response.data))
    .catch(error=>console.log("There was an error while fetching the recipes!",error))


  },[])

  const [showAddForm,setShowAddForm]=useState(false)
  const toggleAddForm=()=>{
    setShowAddForm(!showAddForm)
    setShowHomeForm(false)
  }
  const [showHomeForm,setShowHomeForm]=useState(false)
  const toggleHomeForm=()=>{
    setShowHomeForm(!showHomeForm)
    setShowAddForm(false)
  }
  const addRecipe= (newRecipe)=>{
    setRecipes([...recipes,newRecipe])
  }

  const [showEditForm, setShowEditForm] = useState(false);
  const [editingRecipeId, setEditingRecipeId] = useState(null);
  
  const openEditForm = (recipeId) => {
    setShowEditForm(true);
    setEditingRecipeId(recipeId);
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setEditingRecipeId(null);
  };

  return (
    <>
      <Header toggleHomeForm={toggleHomeForm} toggleAddForm={toggleAddForm}/>
      {showAddForm ? (
        <NewRecipeForm addRecipe={addRecipe}/>
      ) : showEditForm ? (
        <EditRecipeForm recipeId={editingRecipeId} recipes={recipes} onCloseEditForm={closeEditForm}/>
      ) : (
        <>
          <Home />
          <RecipeList recipes={recipes} onEdit={openEditForm} />
        </>
      )}
    </>
  )
}

export default App
