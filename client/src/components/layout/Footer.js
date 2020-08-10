import React from 'react'
import Navigation from './footer/Navigation'
import Social from './footer/Social'
import Logo from './header/Logo'

const Footer = () => {
	if (window.location.pathname.match(/^\/admin/g)) return null;
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="footer-container-inner">
					<div className="column">
						<div className="logo-container">
							<Logo />
						</div>
						<Social />
					</div>
					<div className="column">
						<Navigation />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
