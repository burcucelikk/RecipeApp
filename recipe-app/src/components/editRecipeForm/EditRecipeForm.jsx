import React, { useContext, useState } from 'react'
import './editRecipeForm.css'
import { ApiContext } from '../../context/ApiContext'
import { Link } from 'react-router-dom'

const EditRecipeForm = () => {
  
  const {editingRecipe,editRecipe}=useContext(ApiContext)
  const [title,setTitle]= useState(editingRecipe.title)
  const [description,setDescription]= useState(editingRecipe.description)
  const [image,setImage]=useState(editingRecipe.image)

  const editedRecipe={
    title:title,
    description:description,
    image:image
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    editRecipe(editingRecipe.id,editedRecipe)
    setTitle("")
    setDescription("")
    setImage("")
  }
  console.log(editingRecipe.id)
  return (
    <div>
        <form onSubmit={handleSubmit} className='new-recipe-form'>
            <input value={title} onChange={(event)=> setTitle(event.target.value)} type='text' placeholder='Recipe Title'/>
            <textarea value={description} onChange={(event)=>setDescription(event.target.value)} placeholder='Recipe Description'></textarea>
            <input value={image} onChange={(event)=>setImage(event.target.value)} type='text' placeholder='Image URL'/> 
            <div className='buttons'>
                <button type='submit'>Edit Recipe</button>
                <Link to="/">Cancel</Link>
            </div>
        </form>
    </div>
  )
}

export default EditRecipeForm