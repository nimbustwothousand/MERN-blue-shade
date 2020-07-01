import React from 'react';
import { Hero, Shop, Contact } from './sections';

const Landing = () => {
	return (
		<div className="page landing">
			<section id="hero">
				<Hero />
			</section>
			<section id="shop">
				<Shop />
			</section>
			<section id="contact-us">
				<Contact />
			</section>
		</div>
	)
}

export default Landing
