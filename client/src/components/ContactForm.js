import React from 'react'

const ContactForm = ({ variant = 'primary' }) => {
	const onSelectInput = (e) => {
		e.currentTarget.classList.add('input--filled')
	}
	const onLeaveInput = (e) => {
		if (e.target.value.trim() === '') {
			e.currentTarget.classList.remove('input--filled')
		}
	}
	return (
		<div className="contact-form">
			<form onSubmit={(e) => e.preventDefault()}>

				<div
					className="input"
					onFocus={(e) => { onSelectInput(e) }}
					onBlur={(e) => { onLeaveInput(e) }}
				>
					<input className="input__field" id="name" name="name" type="text" />
					<label className="input__label" htmlFor="name">
						<span className="input__label-content">Name</span>
					</label>
				</div>

				<div
					className="input"
					onFocus={(e) => { onSelectInput(e) }}
					onBlur={(e) => { onLeaveInput(e) }}
				>
					<input className="input__field" id="email" name="email" type="text" />
					<label className="input__label" htmlFor="email">
						<span className="input__label-content">Email</span>
					</label>
				</div>

				<div
					className="input"
					onFocus={(e) => { onSelectInput(e) }}
					onBlur={(e) => { onLeaveInput(e) }}
				>
					<textarea className="input__field" name="message" type="text" />
					<label className="input__label" htmlFor="message">
						<span className="input__label-content">Your message</span>
					</label>
				</div>
				<div>
					<button className={`btn btn-${variant}`}>Send</button>
				</div>
			</form>
		</div>
	)
}

export default ContactForm
