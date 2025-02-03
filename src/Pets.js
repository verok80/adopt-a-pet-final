import Content from "./Modal/Content";
import Modal from "./Modal/Modal";
import { useState } from 'react';


function Pets({anyPets}){
   const [isOpen, setIsOpen] = useState(false)
    
   
return(
    <div className="pets">
{anyPets.map((element => {
    const {id, name, description, about, image} = element;
    return(
        <div className="pets-card" key={id}>
            <img  className="pet-image"src={ image} width="400px"  height="600px" alt="pet"/>
        
        <div className="pets-info">
        <h3 className="petName">{name}</h3>
        <p className="pet-text">{description}</p> 
        </div>
        <div >
           
        <button  className='modal-btn' onClick={ () =>setIsOpen(true)}>Read abot me</button>
       
        {isOpen  && <Modal setIsOpen={setIsOpen}>
            <Content setIsOpen={setIsOpen} about={about}/>
            </Modal>}
            </div>
        </div>
    )
}))}

    </div>
)
}
export default Pets;