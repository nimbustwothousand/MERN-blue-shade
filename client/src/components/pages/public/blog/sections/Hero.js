import React from 'react'
import ShapeDivider from '../../../../layout/ShapeDivider'

const Hero = () => {
	return (
		<>
			<ShapeDivider />
			<div id="hero-wrapper" className="hero-container">
				<div>
					<h1 className="page-header">Blue Shade Blog</h1>
					<div className="page-blurb-container">
						<p className="page-blurb">Keep up to date with the latest news from Blue Shade Shoes.</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
