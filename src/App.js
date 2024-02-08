import React from 'react';
import {
  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pcomponent/navbar'
import Footer from './pcomponent/footer';
import Home from './pages/home';
import Recipes from './pages/recipes';
import Settings from './pages/settings';
import Login from './pages/login';
import SignUp from './pages/signup';
import './App.css';
const App = () =>{
  
  return (
   <Router>
   <Navbar/>
   <div className="container main">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}/>
      <Route path='/settings' element={<Settings/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
   </div>
   <Footer/>
   </Router>
  );
}



export default App;