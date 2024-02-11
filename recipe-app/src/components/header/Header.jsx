import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import { UserPreferencesContext } from '../../context/UserPreferencesContext';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const ThemeSlider = () => {

    const {theme,toggleTheme} = useContext(UserPreferencesContext)
    return (
        <div className={`slider-container ${theme}`} onClick={() => toggleTheme()} >
        <div className="slider-button"></div>
        </div>
    )
}
function Header() {
    const {isAuthenticated, logout} = useContext(AuthContext)
    const navigate = useNavigate()
  
    const handleLogin = () => {
      navigate('/login')
    }
  
    const handleLogout = () => {
      logout()
      navigate('/login')
    }
  
    return (
    <header className="header">
        <div className="logo">Recipe Platform</div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/newRecipeForm">Add Recipe</Link></li>
                {isAuthenticated &&<li><Link to='/settings'>Settings</Link></li>}
                <li><button onClick={isAuthenticated ? handleLogout : handleLogin} >{isAuthenticated ? "Logout" : "Login"}</button></li>
                <li><ThemeSlider/></li>
            </ul>
        </nav>        
    </header>
    );
}
export default Header