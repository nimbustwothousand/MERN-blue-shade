import React, { createContext, useReducer, useEffect } from "react";
import { authReducer } from './reducers';
import * as ACTIONS from './actions';

const initialState = {
	user: null,
	token: localStorage.getItem('blue-shades-token'),
	isAuthenticated: false,
	error: null
};
export const AuthContext = createContext(initialState);

export const AuthProvider = ({ children, ...rest }) => {
	const [state, dispatch] = useReducer(authReducer, initialState)
	const auth = { state, dispatch, ACTIONS }

	useEffect(() => {
		ACTIONS.loadUser(state, dispatch)
	}, []);

	return (
		<AuthContext.Provider value={auth}>
			{children}
		</AuthContext.Provider>
	);
};