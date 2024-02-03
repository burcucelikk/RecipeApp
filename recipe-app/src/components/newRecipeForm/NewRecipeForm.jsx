import React, { useState } from 'react'
import './newRecipeForm.css'

const NewRecipeForm = ({addRecipe}) => {

  const [title,setTitle]= useState("")
  const [description,setDescription]= useState("")
  const [image,setImage]=useState("")

  const newRecipe={
    title:title,
    description:description,
    image:image
  }

  const handleSubmit=(event)=>{
    //Kaydetme işleminden sonra sayfanın yeniden yklenmesini engelliyoruz.
    event.preventDefault()
    //Normalde datayı burada server'a submit ediyoruz.
    //console.log("Submiting new recipe",{title,description,image})

    addRecipe(newRecipe)
    //Formun içeriğini temizliyoruz.
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
            <button type='submit'>Add Recipe</button>
        </form>
    </div>
  )
}

export default NewRecipeForm