import './header.css'
import NewRecipeForm from '../newRecipeForm/NewRecipeForm';
import { useState } from 'react';


function Header({toggleHomeForm,toggleAddForm}) {
    
    return (
    <header className="header">
        <div className="logo">Recipe Platform</div>
        <nav className="navbar">
            <ul>
                <li><a href="#" onClick={toggleHomeForm}>Home</a></li>
                <li><a href="#" onClick={toggleAddForm}>Add Recipe</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>        
    </header>
    );
}
export default Header