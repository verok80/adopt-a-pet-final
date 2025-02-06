import imageTwo from './adopt-logo.png';
import imageFive from './Assets/facebook.png';
import imageSix from './Assets/instagram.png';
import imageSeven from './Assets/envelope.png';
import imageEight from './Assets/heart.png';
import  Links  from './Links'



function Footer(){
   return<footer className='footer'>
    <div>
    <img  className="footer-logo" src={imageTwo}  width="80px" alt="logo"/>
    </div>
    

   < div className='footer-nav'>
   <Links/>
       </div>

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
 </footer>
}
export default Footer;