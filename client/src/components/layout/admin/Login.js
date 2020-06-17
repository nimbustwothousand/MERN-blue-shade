import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route, useRouteMatch } from 'react-router-dom';
import { AuthContext } from '../../../auth/context';
import Dashboard from './Dashboard';

const Login = () => {
	const auth = useContext(AuthContext); // auth = { state, ACTIONS }
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
		const data = auth.ACTIONS.login(state.email, state.password)
		console.log(data);
		//if (data.error)
	}
	if (auth.state.isAuthenticated) {
		return (
			<Redirect to={`${path}/dashboard`} />
		)
	} else {
		return (
			<Router>
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
					<Switch>
						<Route exact path={`${path}/dashboard`}>
							<Dashboard />
						</Route>
					</Switch>
				</div>
			</Router>
		)
	}
}

export default Login
