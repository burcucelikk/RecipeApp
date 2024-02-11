import { useContext } from 'react'
import './App.css'
// import Counter from './components/Counter';
import Header from './components/header/Header'
import Home from './components/home/Home'
import RecipeList from './components/recipe-list/RecipeList'
// import MyUseEffect from './components/MyUseEffect'
import NewRecipeForm from './components/newRecipeForm/NewRecipeForm'
import EditRecipeForm from './components/editRecipeForm/EditRecipeForm'
import Settings from './components/settings/Settings'
import { ApiContextProvider } from './context/ApiContext'
import { UserPreferencesContext } from './context/UserPreferencesContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './components/login-page/LoginPage'

function App() {
  const {theme} =useContext(UserPreferencesContext)
  
  return (
    <Router>
      <div className={`app ${theme}`}>
        <Header />
        <ApiContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/newRecipeForm' element={<NewRecipeForm/>} />
            <Route path="/recipe-list" element={<RecipeList />} />
            <Route path='/editRecipeForm' element={<EditRecipeForm/>} />
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </ApiContextProvider>
      </div>
    </Router>
  )
}

export default App
