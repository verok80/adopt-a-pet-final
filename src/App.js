import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Services from './Services';
import Team from './Team';
import FindAPet from './FindAPet';
import GetInvolved from './GetInvolved';

import imageTwo from './adopt-logo.png'
import Footer from './Footer'
import BurgerMenu from './BurgerMenu';

import Links from './Links';





function App() {
 

 
  return (
    <div >
  <Router>
      <nav>
        <img  className="logo" src={imageTwo} width="80px" alt="logo"/>
        <Links/> 
     </nav>
      <BurgerMenu/>
     
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/services" element ={<Services/>} />
        <Route path="/team" element = {<Team/>}/>
        <Route path="/find-a-pet" element = {<FindAPet/>}/>
        <Route path="/get-involved" element = {<GetInvolved/>}/>
      </Routes>
      <Footer />
     </Router>
   </div>

  );
  
}

export default App;


