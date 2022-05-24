import './HamsterCard.css'
import Api from '../../Api';
import {  useState } from 'react';





function HamsterCard(props){

    const [hamster, sethamster] = useState([]);
   

    function deleteHamster(){
        Api.deleteHamster()
        .then(data => sethamster(data));
    }
    


return (


<div key={props.hamster.id} className='hamsterCard'>
<div className='hamsterCardImg'
style={{backgroundImage: `url(http://localhost:1995/img/${props.hamster.imgName})` }}>


<div className='hamster-info'>
<h2>{props.hamster.name}</h2>


<div className='hamster-info-footer'>
<p>
<span>Age</span> {props.hamster.age} <br />
<span>Games</span> {props.hamster.games} <br />
<span>Wins</span> {props.hamster.wins} <br />
<span>Defeats</span> {props.hamster.defeats} <br />

Loves {props.hamster.loves} <br />
Favorite food {props.hamster.favFood}
</p>
<button onClick={() => deleteHamster(hamster.id)}>Remove</button>
</div>

</div>
</div>
</div>
);



}



export default HamsterCard;