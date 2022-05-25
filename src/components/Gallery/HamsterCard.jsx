import './HamsterCard.css'






function HamsterCard(props){

    


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


</div>

</div>
</div>
</div>
);



}



export default HamsterCard;