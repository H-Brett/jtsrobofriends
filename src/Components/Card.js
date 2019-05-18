import React from 'react'; 



const Card = ({ id, name, email }) => {
	return (
		<div className='card tc dib bg-gray ma2 br3 grow shadow-5 bw2'>
			<img src={`https://robohash.org/${id}?150x150`} alt=''/> 
			<div>
				<h4>{name}</h4>
				<p>{email}</p> 
			</div>
		</div>
	);
}

export default Card;
