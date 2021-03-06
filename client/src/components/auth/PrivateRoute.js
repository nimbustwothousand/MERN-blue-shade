import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { AdminHeader } from "../layout";
import { Helmet } from "react-helmet";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
	const auth = useContext(AuthContext); // auth = { state, dispatch, ACTIONS }
	const { user } = auth.state;
	return (
		<Route
			{...rest}
			render={routeProps =>
				!!user ? (
					<>
						<Helmet>
							<body className="admin-page" />
						</Helmet>
						<AdminHeader />
						<main id="wrapper">
							<RouteComponent {...routeProps} />
						</main>
					</>
				) : (
						<Redirect to={"/bs-admin"} />
					)
			}
		/>
	);
};


export default PrivateRoute