import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../media/logo83x192.png';

const Header = () => {
	const [state, setState] = useState({
		menuVisible: false
	})
	const toggleMenu = () => {
		setState({ ...state, menuVisible: !state.menuVisible })
	}
	const hideMenu = () => {
		setState({ ...state, menuVisible: false })
	}
	return (
		<header className="header">
			<div className="header__logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="header__navigation">
				<div role="button" onClick={toggleMenu} className={state.menuVisible ? "hamburger hidden" : "hamburger"}>
					<i className="fas fa-bars"></i>
				</div>
				<nav className={state.menuVisible ? "" : "hidden"} >
					<div role="button" onClick={toggleMenu} id="close-menu">&times;</div>
					<ul className="nav">
						<li className="nav-item">
							<Link onClick={hideMenu} to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link onClick={hideMenu} to="/shop">Shop</Link>
						</li>
						<li className="nav-item">
							<Link onClick={hideMenu} to="/blog">Blog</Link>
						</li>
						<li className="nav-item">
							<Link onClick={hideMenu} to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
