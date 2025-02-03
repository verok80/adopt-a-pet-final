import React from 'react';
import { useNavigate } from "react-router-dom";

function Home (){

  const navigate = useNavigate();
  const handleClick =() => {
    navigate('/Find a pet')
}
const navigateTwo = useNavigate()
  const handleInvolved =() => {
    navigateTwo('/Get involved')
  }
    return<div className='home'>
    <div className='box'>
  <h1>Making new best<br></br> friends since 2003</h1>
     <p className="text">Bring home a new family member!</p>
     <button  onClick={handleInvolved} className="btn btn-home">Get Involved</button>
     </div>
    <div className="middle">
      <h2 className="middle-text">Adopting is one of the best<br/><span className="things"> things you can do!!!</span></h2>
      <p   className="text middle-text">When you adopt, you’re not just giving<br/>a deserving dog a home.You’re also <br/>reducing the demand for puppy mills and <br/>other industrial-scale breeding operations <br/>that put profit before animal welfare.</p>
    </div>
  <div className="meeetFriend">
    
  
    <button onClick={handleClick} className="btn findPet">Find a Pet</button>


     </div>  
</div>
}
    export default Home;
