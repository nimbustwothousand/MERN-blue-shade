import React from 'react'
import { Link } from 'react-router-dom'
import ROUTES from '../../../utils/routes'

const Navigation = () => {
	return (
		<div className="footer-nav-container">
			<ul className="footer-menu">
				<Link to={ROUTES.root}>
					<li>
						<div className="footer-menu__item">
							Home <i className="fas fa-chevron-right"></i>
						</div>
					</li>
				</Link>
				<Link to={ROUTES.shop.root}>
					<li>
						<div className="footer-menu__item">
							Shop <i className="fas fa-chevron-right"></i>
						</div>
					</li>
				</Link>
				<Link to={ROUTES.blog.root}>
					<li>
						<div className="footer-menu__item">
							Blog <i className="fas fa-chevron-right"></i>
						</div>
					</li>
				</Link>
				<Link to={ROUTES.contact.root}>
					<li>
						<div className="footer-menu__item">
							Contact <i className="fas fa-chevron-right"></i>
						</div>
					</li>
				</Link>
			</ul>
		</div>
	)
}

export default Navigation
