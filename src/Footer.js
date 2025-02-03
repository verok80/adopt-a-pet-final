import imageTwo from './adopt-logo.png';
import imageFive from './facebook.png';
import imageSix from './instagram.png';
import imageSeven from './envelope.png';
import imageEight from './heart.png';
import { Link } from "react-router-dom"



function Footer(){
   return<div className='footer'>
    <div>
    <img  className="footer-logo" src={imageTwo}  width="80px" alt="logo"/>
    </div>
    

   < nav className='footer-nav'>
   <Link to = "/" className="link">Home</Link>
        <Link to = "/services" className="link">Services</Link>
        <Link to = "/team" className="link">Team</Link>
        <Link to = "/Find a pet" className="link">Find a Pet</Link>
        <Link to = "/Get involved" className="link"> Get Involved</Link>
      
       </nav>

    <div className='social'>
      <a href='https://www.facebook.com/vera.kolotyuk.1' target = "_blank" rel="noreferrer">
    <img  className="footer-logo" src={imageFive} alt="logo" width="30px"/>
    </a>
    <a href='https://www.instagram.com/ver_zbud_kol_31/' target ="_blank" rel="noreferrer">
    <img  className="footer-logo" src={imageSix} alt="logo" width="30px"/>
    </a>
    <a href='mailto: email@example.com'>
    <img  className="footer-logo" src={imageSeven} alt="logo" width="30px"/>
    </a>
 </div>
 <hr></hr>
 <div>
    <p className='signature'>2025 Created with <img src={imageEight} width="30px" alt=""logo/><a href='https://github.com/verok80' target="_blank" rel="noreferrer"><span>by verok80</span></a>   for educational purpose only</p>
  
 </div>
 </div>
}
export default Footer;