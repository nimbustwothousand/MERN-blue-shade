import React from 'react';
import { Hero, Shop, Contact } from './sections';
import { Helmet } from "react-helmet";

const Landing = () => {
	return (
		<>
			<Helmet>
				<title>Home</title>
			</Helmet>
			<div className="landing">
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
		</>
	)
}

export default Landing
