import React from 'react'
import {useNavigate} from 'react-router-dom'

function LoginPage() {

    const navigate = useNavigate();

    // navigate(-1);

const handleLogin = ()=>{
    navigate('/signup');
    console.log("Button clicked");
}


const handleLoginPage = () =>{
  localStorage.setItem('token',"1234");
  navigate('/todo');
}

  return (
    <>
    <div>LoginPage</div>

    <button onClick={handleLoginPage}>login</button>

    <button onClick={handleLogin}>Sign up</button>
    </>
  )
}

export default LoginPage