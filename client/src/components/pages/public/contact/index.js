import React from 'react';

const Contact = () => {
	return (
		<main id="wrapper" className="page contact">
			<h1>Contact Us</h1>
			<div className="contact__get-in-touch row">
				<div className="col-6 contact__blurb">
					<h2>Get in Touch</h2>
					<div>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo iste sapiente labore, similique reiciendis sed sequi corporis mollitia aperiam libero fugit laborum, adipisci veniam, sunt esse. Ullam velit quidem magnam!</p>
					</div>
					<div className="contact__info">
						<ul>
							<li><i className="fas fa-envelope"></i>hello@blueshade.co.uk</li>
							<li><i className="fas fa-phone"></i>+44 (0) 1234 567 890</li>
							<li><i className="fab fa-twitter"></i>@blueshadeshoes</li>
						</ul>
					</div>
				</div>
				<div className="col-6">
					<div className="contact__form">
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
								<button className="btn btn-primary">Send</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<div className="contact__support">
				<h2>Contact Support</h2>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente cupiditate sequi, deleniti quaerat, placeat similique repudiandae sunt fuga nihil sit, neque tempore veniam consequatur facere rem sint ex magnam impedit.</p>
				<div>
					<div className="btn btn-dark-mid">Customer Support</div>
					<div className="btn btn-dark-mid">Technical Support</div>
				</div>
			</div>
			<div className="contact__map">
				<h2>Where To Find Us</h2>
				<iframe title="where to find us" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.692637982792!2d-0.12639338401714287!3d51.50050761902776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c44683e119%3A0xdbe194730155a167!2sHouses%20of%20Parliament!5e0!3m2!1sen!2suk!4v1591656549916!5m2!1sen!2suk" frameBorder="0" allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
			</div>
		</main>
	)
}

export default Contact
