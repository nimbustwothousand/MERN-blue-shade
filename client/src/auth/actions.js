import axios from '../utils/axios';
import { ACTION_TYPES } from './reducers';

//check token and load user
export const loadUser = (state, dispatch) => {
	const token = state.token;
	const config = {
		headers: {
			"Content-type": "application/json",
		}
	};
	if (token) {
		config.headers['x-auth-token'] = token;
	}
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
	/*
	res.data = {
		"_id": "5ee789f3c18a19063cef5baa",
		"email": "jack@admin.com",
		"createdAt": "2020-06-15T14:47:15.743Z",
		"updatedAt": "2020-06-15T14:47:15.743Z",
		"__v": 0
	}
	*/
}