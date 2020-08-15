import React from 'react'

const ContactForm = ({ variant = 'primary' }) => {
	return (
		<div className="contact-form">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="form__input">
					<label htmlFor="name">Name</label>
					<input name="name" type="text" placeholder="John Doe" aria-placeholder="John Doe" />
				</div>
				<div className="form__input">
					<label htmlFor="email">Email address</label>
					<input name="email" type="text" placeholder="john.doe@email.co.uk" />
				</div>
				<div className="form__input">
					<label htmlFor="message">Your message</label>
					<textarea name="message" />
				</div>
				<div>
					<button className={`btn btn-${variant}`}>Send</button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
