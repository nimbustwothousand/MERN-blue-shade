import React from 'react'
import ROUTES from '../../../../../utils/routes'
import ShapeDivider from '../../../../layout/ShapeDivider'

const Hero = () => {
	return (
		<>
			<ShapeDivider />
			<div id="hero-wrapper" className="hero-container">
				<div className="hero-column">
					<div className="hero-blurb">
						<h2>Welcome to Blue Shade</h2>
						<div className="tagline">
							<ul className="tagline__list">
								<li><i className="fas fa-check"></i> Expert craftsmanship</li>
								<li><i className="fas fa-check"></i> Affordable prices</li>
								<li><i className="fas fa-check"></i> Shipped directly to your home</li>
							</ul>
						</div>
						<div className="cta">
							<a href={ROUTES.shop.root}>
								<button className="btn btn-white">Shop Now</button>
							</a>
						</div>
					</div>
				</div>
				<div className="hero-column">
					<div className="hero-image">Imagery</div>
				</div>
			</div>
		</>
	)
}

export default Hero
