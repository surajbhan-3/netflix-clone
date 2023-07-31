import React, { useEffect, useState } from 'react'
import "./navbar.css"
import {FaUserAstronaut} from "react-icons/fa"

function Navbar() {
    
  const [show, handleShow] = useState(false)
  const animateNavbar= ()=>{
     if(window.scrollY>200){
        handleShow(true)
     }else{
        handleShow(false)
     }
  }
  
  useEffect(()=>{
  window.addEventListener("scroll",animateNavbar)
  return ()=>window.removeEventListener("scroll",animateNavbar)
      
  },[])

  return (
    <div className={`nav-section ${show && "nav-black"}`}>

             <div className="nav-wrapper">
             <div className="nav-logo">
                <img src="/assets/logo512.svg" alt="" />
             </div>
               
                <span className='nav-user-icon'><FaUserAstronaut color='red' size={40} /></span>

             </div>
              
    </div>

    
  )
}

export default Navbar