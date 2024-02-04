import React from 'react'
import axios from 'axios'
import './recipeCard.css'


const RecipeCard = ({id,title,description,image,toggleEditForm}) => {
  
  const deleteRecipe=  async ()=>{
     await axios
    .delete(`http://localhost:3000/recipes/${id}`)
    .then(response=> response.data)
    .catch(error=>console.log("There was an error while fetching the recipes!",error))
  }
  const editRecipe=  async ()=>{
    await axios
   .put(`http://localhost:3000/recipes/${id}`)
   .then(response=> response.data)
   .catch(error=>console.log("There was an error while fetching the recipes!",error))
 }
  
  return (
    <div className='recipe-card'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='button-container'>
          <button onClick={toggleEditForm}>Düzenle</button>
          <button onClick={deleteRecipe}>Sil</button>
        </div>
    </div>
  )
}

export default RecipeCard