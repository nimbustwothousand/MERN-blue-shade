import axios from '../utils/axios';

export const ACTION_TYPES = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
	REGISTER: 'REGISTER',
	REAUTH: 'REAUTH',
	AUTH_ERROR: 'AUTH_ERROR'
}

export function authReducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.LOGIN:
			const { email, password } = action.payload;
			const newUser = (email, password) => {
				axios.post('/api/users/auth', {
					email, password
				}).then(res => {
					localStorage.setItem('blue-shades-token', res.data.token)
					return res.data //{ user: { id: user._id, email: user.email }, token }
				})
					.catch(err => {
						return { error: err.message }
					});
			};
			newUser(email, password);

			if (newUser.error) {
				return {
					...state,
					error: newUser.error
				};
			} else {
				return {
					...state,
					user: newUser.user,
					token: newUser.token,
					isAuthenticated: true
				};
			};
		case ACTION_TYPES.LOGOUT:
			localStorage.removeItem('blue-shades-token');
			return {
				user: null,
				token: null,
				isAuthenticated: false,
				error: null
			};
		case ACTION_TYPES.REGISTER:
			return state;
		case ACTION_TYPES.REAUTH:
			/*
			action.payload = {
				user: {
					"_id": "5ee789f3c18a19063cef5baa",
					"email": "jack@admin.com",
					"createdAt": "2020-06-15T14:47:15.743Z",
					"updatedAt": "2020-06-15T14:47:15.743Z",
					"__v": 0
				},
				token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTc4OWYzYzE4YTE5MDYzY2VmNWJhYSIsImlhdCI6MTU5MjM1Mjc0MSwiZXhwIjoxNTkyNDM5MTQxfQ.xt7b3YJdE1eJfdAL4Qm-lxkGBwCSzRw2DBI18Nqt-H8"
			}
			*/
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true
			}
		case ACTION_TYPES.AUTH_ERROR:
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false
			}
		default:
			return state;
	}
}