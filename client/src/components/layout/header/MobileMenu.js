import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import ROUTES from '../../../utils/routes'

const MobileMenu = () => {
	const burger = useRef(null)
	const burger2 = useRef(null)
	const mobileNav = useRef(null)
	const [state, setState] = useState({ open: false })
	const onClick = () => {
		burger.current.classList.toggle("is-active")
		burger2.current.classList.toggle("is-active")
		mobileNav.current.classList.toggle("hidden")
		setState({ open: !state.open })
	}
	return (
		<nav id="mobile-navigation">
			<Hamburger onClick={onClick} ref={burger} open={JSON.parse(state.open)} className="hamburger hamburger--squeeze" />
			<div id="mobile-nav-container" ref={mobileNav} className="hidden">
				<ul className="mobile-menu">
					<li className="mobile-menu__item">
						<Link to={ROUTES.root} onClick={onClick}>Home</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.shop.root} onClick={onClick}>Shop</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.blog.root} onClick={onClick}>Blog</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.contact.root} onClick={onClick}>Contact</Link>
					</li>
				</ul>
				<Hamburger onClick={onClick} ref={burger2} open={JSON.parse(state.open)} className="mobile-menu__close hamburger hamburger--squeeze" />
			</div>
		</nav >
	)
}

export default MobileMenu
