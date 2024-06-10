import React from 'react';
import './App.css'
import Navbar from './component/Navbar'
import {Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  

  return (
    <div>
   
   <div>
   <Navbar/>
   </div>
       

 <div>
 <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Project" element={<Project/>}/>
    </Routes>
 </div>


    </div>
  )
}

export default App
