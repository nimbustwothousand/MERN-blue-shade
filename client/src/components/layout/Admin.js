import React, { useState } from 'react';
import { login } from '../../utils/authFunctions';

const Admin = () => {
	const [state, setState] = useState({
		email: '',
		password: ''
	})

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const data = login(state.email, state.password);
		console.log(data)
	}

	return (
		<div className="admin">
			<div className="admin__container">
				<h1>Login</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-container">
						<label htmlFor="email">Email</label>
						<input name="email" id="email" onChange={handleChange} type="text" />
					</div>
					<div className="input-container">
						<label htmlFor="password">Password</label>
						<input name="password" id="password" onChange={handleChange} type="password" />
					</div>
					<div className="button-container">
						<button>Login</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Admin
