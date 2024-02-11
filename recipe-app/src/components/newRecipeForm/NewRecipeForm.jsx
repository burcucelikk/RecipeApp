import React, { useContext, useState } from 'react'
import './newRecipeForm.css'
import { ApiContext } from '../../context/ApiContext'
import { Link, useNavigate } from 'react-router-dom'

const NewRecipeForm = () => {

  const [title,setTitle]= useState("")
  const [description,setDescription]= useState("")
  const [image,setImage]=useState("")

  const [inputErr,setInputErr] =useState({
    imageErr: false,
    titleErr: false,
    descriptionErr: false
  })
  const navigate = useNavigate()
  const {addNewRecipe,isLoading}=useContext(ApiContext)

  const handleSubmit=(event)=>{
    //Kaydetme işleminden sonra sayfanın yeniden yklenmesini engelliyoruz.
    event.preventDefault()
    //Normalde datayı burada server'a submit ediyoruz.
    //console.log("Submiting new recipe",{title,description,image})
    if(title.trim() && description.trim() && image.trim()){
      addNewRecipe({title,description,image})
      setTitle("")
      setDescription("")
      setImage("")
      navigate("/")
    }else{
      setInputErr({
        titleErr: !title.trim(),
        descriptionErr: !description.trim(),
        imageErr: !image.trim()
      })
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='new-recipe-form'>
            <input value={title} onChange={(event)=> setTitle(event.target.value)} type='text' placeholder='Recipe Title'/>
            {inputErr.titleErr && <p>Recipe title can not be empty!</p>}
            <textarea value={description} onChange={(event)=>setDescription(event.target.value)} placeholder='Recipe Description'></textarea>
            {inputErr.descriptionErr && <p>Recipe description can not be empty!</p>}
            <input value={image} onChange={(event)=>setImage(event.target.value)} type='text' placeholder='Image URL'/> 
            {inputErr.imageErr && <p>Recipe image can not be empty!</p>}
            <div className='buttons'>
              <button type='submit'>{isLoading.add ? "Adding..." : "Add Recipe"}</button>
              <Link to="/">Cancel</Link>
            </div>
        </form>
    </div>
  )
}

export default NewRecipeForm