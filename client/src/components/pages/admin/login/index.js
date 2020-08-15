import React, { useState, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import ROUTES from '../../../../utils/routes'
import { AuthContext } from '../../../../auth/context'

const Login = ({ history }) => {
	const auth = useContext(AuthContext);// auth = { state, dispatch, ACTIONS }

	const [state, setState] = useState({
		email: '',
		password: ''
	})
	const onSelectInput = (e) => {
		e.currentTarget.classList.add('input--filled')
	}
	const onLeaveInput = (e) => {
		if (e.target.value.trim() === '') {
			e.currentTarget.classList.remove('input--filled')
		}
	}
	const handleInput = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setState({
			...state,
			[name]: value
		});
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		auth.ACTIONS.login(state, auth.dispatch);
		history.push(`${ROUTES.admin.dashboard}`);
	}
	if (auth.state.user) {
		return (
			<Redirect to={ROUTES.admin.dashboard} />
		)
	}
	return (
		<div id="login-page">
			<div className="login-form-container">
				<h1>Login</h1>
				<form className="login-form" onSubmit={(e) => { handleSubmit(e) }}>
					<span
						className="input"
						onFocus={(e) => { onSelectInput(e) }}
						onBlur={(e) => { onLeaveInput(e) }}
					>
						<input
							className="input__field"
							onChange={(e) => { handleInput(e) }}
							name="email"
							type="text" />
						<label className="input__label" htmlFor="email">
							<span className="input__label-content">Email</span>
						</label>
					</span>
					<span
						className="input"
						onFocus={(e) => { onSelectInput(e) }}
						onBlur={(e) => { onLeaveInput(e) }}
					>
						<input
							className="input__field"
							onChange={(e) => { handleInput(e) }}
							name="password"
							type="password" />
						<label className="input__label" htmlFor="password">
							<span className="input__label-content">Password</span>
						</label>
					</span>
					<div>
						<button className="btn btn-dark">Login</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login
