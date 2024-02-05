import React, { useState } from 'react'
import './editRecipeForm.css'

const EditRecipeForm = ({editingRecipe,editRecipe,toggleHomeForm}) => {
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
    toggleHomeForm()
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='new-recipe-form'>
            <input value={title} onChange={(event)=> setTitle(event.target.value)} type='text' placeholder='Recipe Title'/>
            <textarea value={description} onChange={(event)=>setDescription(event.target.value)} placeholder='Recipe Description'></textarea>
            <input value={image} onChange={(event)=>setImage(event.target.value)} type='text' placeholder='Image URL'/> 
            <div className='buttons'>
                <button type='submit'>Edit Recipe</button>
                <button onClick={toggleHomeForm}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default EditRecipeForm