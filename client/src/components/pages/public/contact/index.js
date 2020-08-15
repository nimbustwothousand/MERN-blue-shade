import React from 'react'
import { Helmet } from "react-helmet"
import { Hero, Support, Find } from './sections'
import Wrapper from '../../../layout/Wrapper'

const Contact = () => {
	return (
		<>
			<Helmet>
				<title>Contact Us</title>
			</Helmet>
			<section id="hero">
				<Hero />
			</section>
			<section className="contact-support">
				<Wrapper>
					<Support />
				</Wrapper>
			</section>
			<section className="find-us">
				<Find />
			</section>
		</>
	)
}

export default Contact
