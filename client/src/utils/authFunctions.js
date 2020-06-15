import axios from './axios'

export const login = (email, password) => {
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