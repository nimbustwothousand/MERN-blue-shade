import axios from '../utils/axios';
import { ACTION_TYPES } from './reducers';

//check token and load user
export const loadUser = (state, dispatch) => {
	const token = state.token;
	if (token) {
		const config = {
			headers: {
				"Content-type": "application/json",
				'x-auth-token': token
			}
		};
		axios.get('/api/users/user', config)
			.then(res => dispatch({
				type: ACTION_TYPES.REAUTH,
				payload: {
					user: res.data,
					token
				}
			})).catch(err => {
				dispatch({ type: ACTION_TYPES.AUTH_ERROR })
			})
	}
}

export const login = (componentState, dispatch) => {
	const { email, password } = componentState;
	console.log('login attempted');
	axios.post('/api/users/auth', { email, password })
		.then(res => {
			localStorage.setItem('blue-shades-token', res.data.token)
			dispatch({
				type: ACTION_TYPES.LOGIN,
				payload: {
					user: res.data.user,
					token: res.data.token
				}
			})
		}).catch(err => {
			dispatch({ type: ACTION_TYPES.AUTH_ERROR })
		})
}