import React from 'react';
import ShoeColor from './ShoeColor';
import ShoeThumbnail from './ShoeThumbnail';

const Shoe = ({ shoe }) => {
	/*
	{
		"sizes": [
				"2",
				"7",
				"8"
		],
		"_id": "5eec0e74f45e8245d157668f",
		"brand": "Ugg",
		"category": "Sandals",
		"name": "Misty Patience",
		"description": "Lorem reprehenderit aliqua minim velit ullamco excepteur consectetur.",
		"price": 56.99,
		"color": "#2e5f68"
	}
*/
	return (
		<div className="shoe-container">
			<div className="shoe-container__image">
				<ShoeThumbnail primary={shoe.color} />
			</div>
			<div className="shoe-container__info">
				<div className="shoe__label">
					<div>
						<div className="shoe__brand">{shoe.brand}</div>
						<div className="shoe__name">{shoe.name}</div>
					</div>
					<ShoeColor color={shoe.color} />
				</div>
				<div className="shoe__description">{shoe.description}</div>
				<div className="shoe__sizes">
					{shoe.sizes.join(', ')}
				</div>
				<div className="shoe__price">
					£{shoe.price}
				</div>
			</div>
		</div>
	)
}

export default Shoe
