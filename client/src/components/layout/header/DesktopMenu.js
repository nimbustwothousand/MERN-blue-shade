import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../utils/routes'

const DesktopMenu = () => {
	return (
		<nav id="desktop-navigation">
			<div id="desktop-nav-container">
				<ul className="desktop-menu">
					<li className="desktop-menu__item">
						<Link to={ROUTES.root}>Home</Link>
					</li>
					<li className="desktop-menu__item">
						<Link to={ROUTES.shop.root}>Shop</Link>
					</li>
					<li className="desktop-menu__item">
						<Link to={ROUTES.blog.root}>Blog</Link>
					</li>
					<li className="desktop-menu__item">
						<Link to={ROUTES.contact.root}>Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default DesktopMenu
