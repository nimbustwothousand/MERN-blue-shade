import React, { useState, useContext } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../../auth/context';

const Login = () => {
	const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
	const { path } = useRouteMatch();

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
		auth.ACTIONS.login(state, auth.dispatch);
	}
	if (auth.state.isAuthenticated) {
		return (
			<Redirect to={`${path}/dashboard`} />
		)
	} else {
		return (
			<main id="wrapper" className="page admin">
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
			</main>
		)
	}
}

export default Login
