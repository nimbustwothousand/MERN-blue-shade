import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import AdminHeader from '../layout/AdminHeader';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
	const { user } = auth.state;
	return (
		<Route
			{...rest}
			render={routeProps =>
				!!user ? (
					<>
						<AdminHeader />
						<main id="admin-wrapper">
							<RouteComponent {...routeProps} />
						</main>
					</>
				) : (
						<Redirect to={"/admin"} />
					)
			}
		/>
	);
};


export default PrivateRoute