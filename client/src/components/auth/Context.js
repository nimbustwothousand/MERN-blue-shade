import React, { useState, useEffect } from "react";
import axios from '../../utils/axios';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children, history }) => {
	const [user, setUser] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		if (localStorage.getItem('blue-shades-token') !== null) {
			const token = localStorage.getItem('blue-shades-token');
			axios({
				method: 'GET',
				url: "/api/users/user",
				headers: { 'x-auth-token': token }
			}).then(res => {
				if (res.status === 200) {
					setIsLoggedIn(true);
					setUser(res.data);
				}
			})
		}
	}, []);

	const handleLogout = (data) => {
		localStorage.removeItem('blue-shades-token');
		history.push('/admin')
	}
	return (
		<AuthContext.Provider
			value={{
				user, isLoggedIn, handleLogout
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};