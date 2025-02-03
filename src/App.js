import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Services from './Services';
import Team from './Team';
import FindAPet from './FindAPet';
import GetInvolved from './GetInvolved';

import imageTwo from './adopt-logo.png';
import Footer from './Footer'
import BurgerMenu from './BurgerMenu';




function App() {
 

 
  return (
    <div className="App">
     <Router>
      <nav >
        <img  className="logo" src={imageTwo} width="80px" alt="logo"/>
      
        <Link to = "/" className="link">Home</Link>
        <Link to = "/services" className="link">Services</Link>
        <Link to = "/team" className="link">Team</Link>
        <Link to = "/Find a pet" className="link">Find a Pet</Link>
        <Link to = "/Get involved" className="link"> Get Involved</Link>   
       <BurgerMenu/>
      </nav>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/services" element ={<Services/>} />
        <Route path = "/team" element = {<Team/>}/>
        <Route path = "/Find a pet" element = {<FindAPet/>}/>
        <Route path ="/Get involved" element = {<GetInvolved/>}/>
      </Routes>
      <Footer />
     </Router>
    
    </div>

  );
  
}

export default App;
