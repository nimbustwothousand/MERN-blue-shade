import React from 'react'
import ShapeDivider from '../../../../layout/ShapeDivider'
import ContactForm from '../../../../ContactForm'

const Hero = () => {
	return (
		<>
			<ShapeDivider />
			<div id="hero-wrapper" className="hero-container">
				<div>
					<div>
						<h1 className="page-header">Contact Us</h1>
						<div className="page-blurb-container">
							<p className="page-blurb">We'd love to hear from you.</p>
						</div>
					</div>
					<div className="hero-container">
						<div className="hero-column">
							<div className="hero-blurb">
								<h2>Get in Touch</h2>
								<div className="tagline">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iste sapiente labore, similique reiciendis sed sequi corporis mollitia aperiam libero fugit laborum, adipisci veniam, sunt esse. Ullam velit quidem magnam!
							<ul className="tagline__list">
										<li><i className="fas fa-envelope"></i> hello@blueshade.co.uk</li>
										<li><i className="fas fa-phone"></i> +44 (0) 1234 567 890</li>
										<li><i className="fab fa-twitter"></i> @blueshadeshoes</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="hero-column">
							<ContactForm variant="dark-mid" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
