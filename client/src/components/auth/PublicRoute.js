import React from "react";
import { Route } from "react-router-dom";
import Header from "../layout/Header";
import { Helmet } from "react-helmet";

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps =>
				(
					<>
						<Helmet>
							<body className="page" />
						</Helmet>
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