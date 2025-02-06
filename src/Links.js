import React from 'react';
import { Link } from "react-router-dom";



function Links() {
 

 
  return<div>
        <Link to="/" className="link">Home</Link>
        <Link to="/services" className="link">Services</Link>
        <Link to="/team" className="link">Team</Link>
        <Link to="/find-a-pet" className="link">Find a Pet</Link>
        <Link to="/get-involved" className="link"> Get Involved</Link>   
      </div>
  
}

export default Links;
