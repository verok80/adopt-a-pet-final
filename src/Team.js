import { useState } from 'react';
import { teamData } from './teamData';
import imageThree from './Assets/right.png';
import imageFour from './Assets/left.png';

function Team(){
    const [member, setTeamMember] = useState(0);
    const {name, title, image} = teamData[member];

    const previousMember = () => {
        setTeamMember((member => {
           member --;
            if(member < 0){
                return teamData.length - 1;
            }
            return member;
        }))
    }
    const nextMember = () => {
        setTeamMember((member => {
            member ++;
            if (member > teamData.length -1){
                member = 0;
            }
            return member;
        }))
    }

    return<div className='team'>
        <div className='team-box'>
<h2 >Our Team</h2>
</div>
    <div className='team-box'>
        <img src={image} width="400px" alt="person"/>
</div>
<div className='team-box'>
<h3 className='teamMember'>{name}</h3>
</div>
<div className='team-box'>
<h4 className='teamTitle'>{title}</h4>
</div>
<div className='team-box team-btn'>
<button onClick ={previousMember}  className='person-btn'>
<img src={imageFour} width="70px" alt="icon"/>
</button>
<button onClick ={nextMember} className='person-btn'>
<img src={imageThree} width="70px" alt="icon"/>
</button>
</div>
   </div>
}
export default Team;