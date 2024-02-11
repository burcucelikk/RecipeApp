import React, { useContext, useState } from 'react'
import './loginPage.css'
import { AuthContext } from "../../context/AuthContext";
import {useNavigate} from 'react-router-dom'

const LoginPage = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  
  const { login } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      navigate("/")
    } catch (error) {
      alert("Login Failed");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <div className='login-form'>
        <form onSubmit={handleLogin}>
        <input type="text" placeholder='Username' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
    </form>
    </div>
    
  )
}

export default LoginPage