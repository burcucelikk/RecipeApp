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
  const addNewRecipe= async (newRecipe)=>{
    const response= await axios.post("http://localhost:3000/recipes",newRecipe)
    if(response.status===201){
      setRecipes([...recipes,response.data])
    }
  }
  const deleteRecipe= async (id) =>{
    await axios.delete(`http://localhost:3000/recipes/${id}`)
    .then(res=> setRecipes(recipes.filter(res=> res.id!==id)))
    .catch(error=>console.log("There was an error while fetching the recipes!",error))
  }
  const [editingRecipe,setEditingRecipe]=useState(null)
  const startEditing= (id)=>{
    return setEditingRecipe(recipes.find(recipe => recipe.id===id))
  }
  const editRecipe= async (id,newEditRecipe) =>{
    await axios.put(`http://localhost:3000/recipes/${id}`,newEditRecipe)
    .then(res=> {
      setRecipes(recipes.map((res)=>res.id==id ? newEditRecipe: res))
    })
    .catch(error=>console.log("There was an error while fetching the recipes!",error))
  }
  const [showAddForm,setShowAddForm]=useState(false)
  const toggleAddForm=()=>{
    setShowAddForm(!showAddForm)
    setShowHomeForm(false)
    setShowEditForm(false)
  }
  const [showHomeForm,setShowHomeForm]=useState(false)
  const toggleHomeForm=()=>{
    setShowHomeForm(!showHomeForm)
    setShowAddForm(false)
    setShowEditForm(false)
  }
  const [showEditForm, setShowEditForm] = useState(false)
  const toggleEditForm=()=>{
    setShowEditForm(!showEditForm)
    setShowHomeForm(false)
    setShowAddForm(false)
  }

  return (
    <>
      <Header toggleHomeForm={toggleHomeForm} toggleAddForm={toggleAddForm}/>
      {showAddForm ? (
        <NewRecipeForm addNewRecipe={addNewRecipe} toggleHomeForm={toggleHomeForm}/>
      ) : showEditForm ? (
        <EditRecipeForm editingRecipe={editingRecipe} editRecipe={editRecipe} toggleHomeForm={toggleHomeForm}/>
      ) : (
        <>
          <Home />
          <RecipeList recipes={recipes} toggleEditForm={toggleEditForm} deleteRecipe={deleteRecipe} startEditing={startEditing}/>
        </>
      )}
    </>
  )
}

export default App
