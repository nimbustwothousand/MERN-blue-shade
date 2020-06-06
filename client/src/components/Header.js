import React from 'react';

const Header = () => {
	return (
		<header>
			<div className="app-title">
				<span>Blue Shade</span>
			</div>
			<div id="nav-container">
				<nav>
					<ul className="nav">
						<li className="nav-item">Home</li>
						<li className="nav-item">Shop</li>
						<li className="nav-item">Blog</li>
						<li className="nav-item">Contact</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
