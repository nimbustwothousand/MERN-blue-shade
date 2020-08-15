import React from 'react'
import { ShoeColor, ShoeThumbnail } from './shoes'

const Shoe = ({ shoe }) => {
	return (
		<div className="grid-item">
			<div className="grid-item-inner">
				<div className="shoe__image">
					<ShoeThumbnail primary={shoe.color} />
				</div>
				<div className="shoe__info">
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
		</div>
	)
}

export default Shoe
