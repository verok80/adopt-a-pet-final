import {Link} from "react-router-dom";
import imageNine from './Assets/cat.png';
function Services(){

  
    return<div className="services">
        <div className="services-box">
   <h2 className="services-header">Our Services</h2>
   </div>
   <div className="service-description">
  <h3>Rescue</h3>
  <p className="text missionText">We are working together with animal collective agencies to end <br></br>the killing of savable pets <br></br> in shelters.
    We move quickly to <br></br> save and serveas many animals <br></br> as possible. We are focused on <br></br> rescuing the animals who are <br></br> most in danger or abandoned.
  </p>
  </div>
  <div  className="service-description">
  <h3 className='servicesTwo'>Protection</h3>
  <p className="text missionText">We engage the wider community<br></br>to welcome many volunteers, fosters,adopters, and supporters<br></br>We treat all animals as if <br></br>they were our own.</p>
  </div>
  <div  className="service-description">
  <h3 className='servicesTwo'>Placement</h3>
  <p className="text missionText">Adoption is the best thing<br></br>people can do. And we are<br></br> making process of adoption<br></br>easier with advice and <br></br> transparency from the first search through to daily life with your <br></br> new friend</p>
  </div>
<img  className="cat-picture"src={imageNine} width="400px" alt="cat"/>
<img  className="cat-picture" src={imageNine} width="400px" alt="cat"/>
<img  className="cat-picture" src={imageNine} width="400px" alt="cat"/>
<img  className="cat-picture" src={imageNine} width="400px" alt="cat"/>
<Link to="/get-involved">
<button   className="btn btn-services">Get Involved</button>
</Link>
    </div>
}


export default Services;