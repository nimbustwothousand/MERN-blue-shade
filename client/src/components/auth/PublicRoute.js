import React from "react";
import { Route } from "react-router-dom";
import { Header, Footer } from "../layout";
import '../../css/main.css'

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps =>
				(
					<>
						<Header />
						<main>
							<RouteComponent {...routeProps} />
						</main>
						<Footer />
					</>
				)
			}
		/>
	);
};


export default PublicRoute