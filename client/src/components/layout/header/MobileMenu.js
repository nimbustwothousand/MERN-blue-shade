import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
			<button
				onClick={onClick}
				className="hamburger hamburger--squeeze"
				ref={burger}
				type="button"
				aria-label="Menu"
				aria-controls="navigation"
				aria-expanded={JSON.parse(state.open)}
			>
				<span className="hamburger-box">
					<span className="hamburger-inner"></span>
				</span>
			</button>
			<div id="mobile-nav-container" ref={mobileNav} className="hidden">
				<ul className="mobile-menu">
					<li className="mobile-menu__item">
						<Link to={ROUTES.root}>Home</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.shop.root}>Shop</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.blog.root}>Blog</Link>
					</li>
					<li className="mobile-menu__item">
						<Link to={ROUTES.contact.root}>Contact</Link>
					</li>
				</ul>
				<button
					onClick={onClick}
					className="mobile-menu__close hamburger hamburger--squeeze"
					ref={burger2}
					type="button"
					aria-label="Menu"
					aria-controls="navigation"
					aria-expanded={JSON.parse(state.open)}
				>
					<span className="hamburger-box">
						<span className="hamburger-inner"></span>
					</span>
				</button>
			</div>
		</nav>
	)
}

export default MobileMenu
