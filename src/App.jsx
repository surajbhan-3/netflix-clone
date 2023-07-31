import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Login from './pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const user= null;

  return (
    <div className="app">
      <BrowserRouter>
      
      {!user?(<Login />):(
  <Routes>
  <Route path="/" element={ <Home />} />  
  </Routes>

      )}
        
    
  
  
      </BrowserRouter>
     
    </div>
  );
}

export default App;

