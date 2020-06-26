import React, { useContext } from 'react';
//import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

const Header = () => {
	const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
	return (
		<aside className="admin-menu">
			<h1 className="admin-menu__title">Blue Shade</h1>
			<ul className="admin-menu__links">
				<li className="admin-menu__title"><i className="fas fa-shoe-prints"></i>Shoes</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
			<ul className="admin-menu__links">
				<li className="admin-menu__title"><i className="fas fa-blog"></i>Blog</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
			<ul className="admin-menu__links">
				<li className="admin-menu__title"><i className="fas fa-file"></i>Pages</li>
				<li>ipsum</li>
				<li>dolor</li>
				<li>sit</li>
				<li>amet</li>
			</ul>
			<ul className="admin-menu__links account-links">
				<li><i className="fas fa-user-cog"></i>My Account</li>
				<li onClick={() => { auth.ACTIONS.logout(auth.dispatch) }}><i className="fas fa-sign-out-alt"></i>Logout</li>
			</ul>
		</aside >
	)
}

export default Header
