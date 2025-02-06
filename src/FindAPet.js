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
      <div>
        <br></br>
        <br></br>
       <a href='mailto: email@example.com'
        className="btn btn-inquire">Inquire</a>
       </div>
    </div>
    )
}  
export default FindAPet;