import { useState } from 'react';
import { data } from './data';
import Pets from './Pets';
import Buttons from './Buttons';

function FindAPet(){
    const [pets, setPets] = useState(data);
    const chosenPet =(searchTerm) => {
        const newPet = data.filter(element =>
            element.searchTerm === searchTerm)
            setPets(newPet);
    }
    
    return(
    <div>
        <Buttons filteredPet={chosenPet}/>
        <Pets anyPets= {pets}/>
       <a href='mailto: email@example.com'>
        <button  className="btn btn-inquire">Inquire</button>
       </a>
    </div>
    )
}  
export default FindAPet;