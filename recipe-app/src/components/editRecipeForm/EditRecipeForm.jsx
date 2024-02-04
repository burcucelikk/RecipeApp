import React, { useState } from 'react'
import './editRecipeForm.css'

const EditRecipeForm = ({startingEdit}) => {
  const [title,setTitle]= useState("")
  const [description,setDescription]= useState("")
  const [image,setImage]=useState("")

  const editedRecipe={
    title:title,
    description:description,
    image:image
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    startingEdit(editedRecipe)
    setTitle("")
    setDescription("")
    setImage("")
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='new-recipe-form'>
            <input value={title} onChange={(event)=> setTitle(event.target.value)} type='text' placeholder='Recipe Title'/>
            <textarea value={description} onChange={(event)=>setDescription(event.target.value)} placeholder='Recipe Description'></textarea>
            <input value={image} onChange={(event)=>setImage(event.target.value)} type='text' placeholder='Image URL'/> 
            <button type='submit'>Edit Recipe</button>
        </form>
    </div>
  )
}

export default EditRecipeForm