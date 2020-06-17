import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
	if (window.location.pathname.match(/^\/admin/g)) return null;
	return (
		<footer className="footer">
			<div className="footer__navigation">
				<ul>
					<li>
						<Link to="/">
							<i className="fas fa-chevron-right"></i>
							Home
						</Link>
					</li>
					<li>
						<Link to="/shop">
							<i className="fas fa-chevron-right"></i>
							Shop
						</Link>
					</li>
					<li>
						<Link to="/blog">
							<i className="fas fa-chevron-right"></i>
							Blog
						</Link>
					</li>
					<li>
						<Link to="/contact">
							<i className="fas fa-chevron-right"></i>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="footer__social">
				<ul>
					<li>
						<a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
					</li>
					<li>
						<a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
					</li>
					<li>
						<a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
