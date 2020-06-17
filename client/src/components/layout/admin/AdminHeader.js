import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/context';

const Header = () => {
	const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
	return (
		<aside className="admin-menu">
			<h1 className="admin-menu__title">Blue Shade</h1>
			<ul className="admin-menu__links">
				<li>Lorem</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
			<ul className="admin-menu__links">
				<li>Lorem</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
			<ul className="admin-menu__links account-links">
				<li>My Account</li>
				<li onClick={() => { auth.ACTIONS.logout(auth.dispatch) }}><span>Logout</span></li>
			</ul>
		</aside>
	)
}

export default Header
