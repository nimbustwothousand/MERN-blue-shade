import React from 'react'
import { Wrapper } from '../../../layout'
import { Hero, Shop } from './sections'
import ContactForm from '../../../ContactForm'

const Landing = () => {
	return (
		<>
			<section id="hero">
				<Hero />
			</section>
			<section id="shop">
				<Wrapper>
					<Shop />
				</Wrapper>
			</section>
			<section id="contact">
				<Wrapper>
					<h2>Contact Us</h2>
					<ContactForm />
				</Wrapper>
			</section>
		</>
	)
}

export default Landing
