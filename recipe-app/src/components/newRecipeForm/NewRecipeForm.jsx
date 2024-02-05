import React, { useState } from 'react'
import './newRecipeForm.css'

const NewRecipeForm = ({addNewRecipe,toggleHomeForm}) => {

  const [title,setTitle]= useState("")
  const [description,setDescription]= useState("")
  const [image,setImage]=useState("")

  const handleSubmit=(event)=>{
    //Kaydetme işleminden sonra sayfanın yeniden yklenmesini engelliyoruz.
    event.preventDefault()
    //Normalde datayı burada server'a submit ediyoruz.
    //console.log("Submiting new recipe",{title,description,image})
    addNewRecipe({title,description,image})
    //Formun içeriğini temizliyoruz.
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
              <button type='submit'>Add Recipe</button>
              <button onClick={toggleHomeForm}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

export default NewRecipeForm