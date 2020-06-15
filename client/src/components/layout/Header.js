import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../media/logo83x192.png';
const Header = () => {
	if (window.location.pathname === '/admin') return null;
	return (
		<header className="header">
			<div className="header__logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="header__navigation">
				<nav>
					<ul className="nav">
						<li className="nav-item">
							<Link to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link to="/shop">Shop</Link>
						</li>
						<li className="nav-item">
							<Link to="/blog">Blog</Link>
						</li>
						<li className="nav-item">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
