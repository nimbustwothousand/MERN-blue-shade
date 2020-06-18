import React, { createContext, useReducer, useEffect } from "react";
import { shopReducer } from './reducers';
import * as ACTIONS from './actions';

const initialState = {
	user: null,
	token: localStorage.getItem('blue-shades-token'),
	isAuthenticated: false,
	error: null,
	isLoading: true
};
export const ShopContext = createContext(initialState);

export const ShopProvider = ({ children, ...rest }) => {
	const [state, dispatch] = useReducer(shopReducer, initialState)
	const shop = { state, dispatch, ACTIONS }

	return (
		<ShopContext.Provider value={shop}>
			{children}
		</ShopContext.Provider>
	);
};