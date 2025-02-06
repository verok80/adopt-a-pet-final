import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import imageEleven from'./Assets/pet-care.png';

const GetInvolved = () =>{
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value,
        
        });
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            Swal.fire({
                icon: "error",
              
                text: "Please fill in all fields!",
               
              });
            
      return;
        }
        
    }
    
    return(
        <div className='form-box'>
            <div>
            <h2 className='get-involved'>Get Involved</h2>
           <p className='form-text'>Adopt a pet or volunteer at our shelter.</p>
           <img  className="get-involved-hands"src={imageEleven} width="200px" alt="icon"/>
           </div>
        <form onSubmit={handleSubmit}>
            <label>
               <p className='form-text label-text'>Name <span className='required'>(required)</span></p>
                <input className='enterOne'
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}/>
            </label>
            <br/>

            <label>
                <p className='form-text label-text'>Email <span className='required'>(required)</span></p>
                <input className='enterOne'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}/>
            </label>
            <br/>
            <label>
               <p className='form-text label-text'>Subject <span className='required'>(required)</span></p>
                <input className='enterTwo'
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}/>
            </label>
            <br/>
            <label>
               <p className='form-text label-text'>Message <span className='required'>(required)</span></p>
                <input className='enterThree'
                type="text"
                name="message"
                value={formData.message}
                onChange={handleInputChange}/>
            </label>
            <br/>
            <button className='btn form-btn' type="submit" onClick={ handleSubmit }>Submit</button>
        </form>
        </div>
    )
    


}
export default GetInvolved;