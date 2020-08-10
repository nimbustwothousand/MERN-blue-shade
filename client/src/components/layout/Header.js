import React from 'react'
import MobileMenu from './header/MobileMenu'
import DesktopMenu from './header/DesktopMenu'
import Logo from './header/Logo'

const Header = () => {
	return (
		<header>
			<div className="header-container">
				<div className="header-container-inner">
					<Logo />
					<div className="navigation">
						<MobileMenu />
						<DesktopMenu />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
