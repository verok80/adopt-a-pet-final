import React, { useState} from 'react';
import { Link } from "react-router-dom";
import imageSix from './menu.png';

function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return(
        
        <nav >
            <button onClick={toggleMenu} className="burger-btn">
                <img src={imageSix} width="50px" alt="icon"/>
            </button>
            <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
     <Link to = "/" className="link nav-links show">Home</Link>
        <Link to = "/services  " className="link  nav-links show">Services</Link>
        <Link to = "/team " className="link  nav-links show">Team</Link>
        <Link to = "/Find a pet  " className="link  nav-links show">Find a Pet</Link>
        <Link to = "/Get involved  " className="link  nav-links show"> Get Involved</Link>   
        </ul>
      </nav>
    )
}
export default BurgerMenu;