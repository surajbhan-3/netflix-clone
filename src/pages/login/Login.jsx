import React from 'react'
import "./login.css";


function Login() {
  return (
    <div className='login-container'>

         <div className="login-background">
            <img className='logo-image' src="/assets/logo512.png" alt="" />
          <button className='login-button'>
            Sign In
          </button>
         </div>
    </div>
  )
}

export default Login