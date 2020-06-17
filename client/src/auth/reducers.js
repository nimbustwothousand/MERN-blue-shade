export const ACTION_TYPES = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
	REGISTER: 'REGISTER',
	REAUTH: 'REAUTH',
	AUTH_ERROR: 'AUTH_ERROR',
	LOADING: 'LOADING',
	NOT_LOADING: 'NOT_LOADING'
}

export function authReducer(state, action) {
	switch (action.type) {
		case ACTION_TYPES.LOGIN:
			/*
			{
				"user": {
					"_id": "5ee789f3c18a19063cef5baa",
					"email": "jack@admin.com",
					"createdAt": "2020-06-15T14:47:15.743Z",
					"updatedAt": "2020-06-15T14:47:15.743Z",
					"__v": 0
				},
				"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTc4OWYzYzE4YTE5MDYzY2VmNWJhYSIsImlhdCI6MTU5MjM2MDcwOCwiZXhwIjoxNTkyNDQ3MTA4fQ.sNuff3JzBeZlNfobumSpz3bHA5qj_aPmu_Im5DkIdkc"
			}
			*/
			return {
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true,
				error: null,
				isLoading: false
			}
		case ACTION_TYPES.LOGOUT:
			localStorage.removeItem('blue-shades-token');
			return {
				user: null,
				token: null,
				isAuthenticated: false,
				error: null,
				isLoading: false
			};
		case ACTION_TYPES.REGISTER:
			return state;
		case ACTION_TYPES.REAUTH:
			return {
				...state,
				user: action.payload.user,
				token: action.payload.token,
				isAuthenticated: true,
				isLoading: false
			}
		case ACTION_TYPES.AUTH_ERROR:
			return {
				...state,
				token: null,
				user: null,
				isAuthenticated: false,
				error: 'Authentication error.',
				isLoading: false
			}
		case ACTION_TYPES.NOT_LOADING:
			return { ...state, isLoading: false }
		case ACTION_TYPES.LOADING:
			return { ...state, isLoading: true }
		default:
			return state;
	}
}