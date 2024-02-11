import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext()

export const ApiContextProvider=({children}) =>{
    const [recipes, setRecipes] =useState([])
    const [isLoading,setIsLoading] =useState({
        read: false,
        delete: [],
        add: false
    })
    useEffect(()=>{
        const getRecipes= async () =>{
            try{
            setIsLoading(prevIsLoading => ({...prevIsLoading,read:true}))
            await axios
                .get("http://localhost:3000/recipes")
                .then(response=> setRecipes(response.data))
            setIsLoading(prevIsLoading => ({...prevIsLoading,read:false}))
            }catch (error){
            console.log("There was an error while fetching the recipes!",error)
            }
        }
    getRecipes()
    },[])

    const addNewRecipe= async (newRecipe)=>{
    setIsLoading(prevIsLoading => ({...prevIsLoading,add:true}))
    const response= await axios.post("http://localhost:3000/recipes",newRecipe)
    if(response.status===201){
        setRecipes([...recipes,response.data])
        setIsLoading(prevIsLoading=>({...prevIsLoading,add:false}))
    }
    }

    const deleteRecipe= async (id) =>{
    setIsLoading(prevIsLoading => ({...prevIsLoading,delete:[...prevIsLoading.delete, id]}))
    await axios.delete(`http://localhost:3000/recipes/${id}`)
    .then(res=> setRecipes(recipes.filter(res=> res.id!==id)))
    .catch(error=>console.log("There was an error while fetching the recipes!",error))
    setIsLoading(prevIsLoading => ({...prevIsLoading,delete : prevIsLoading.delete.filter((deletingId)=> deletingId!==id)}))
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

    return(
        <ApiContext.Provider value={{recipes,isLoading,addNewRecipe,deleteRecipe,startEditing,editRecipe,editingRecipe}}>
            {children}
        </ApiContext.Provider>
    )
}