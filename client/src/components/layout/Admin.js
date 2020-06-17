import React from 'react';
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';

const Admin = () => {
	const { path } = useRouteMatch();
	return (
		<Router>
			<Switch>
				<Route exact path={`${path}`} component={Login} />
				<Route exact path={`${path}/dashboard`} component={Dashboard} />
			</Switch>
		</Router>
	)
}

export default Admin
