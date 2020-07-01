import React from "react";
import { Route } from "react-router-dom";
import Header from '../layout/Header'

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps =>
				(
					<>
						<Header />
						<main id="wrapper">
							<RouteComponent {...routeProps} />
						</main>
					</>
				)
			}
		/>
	);
};


export default PublicRoute