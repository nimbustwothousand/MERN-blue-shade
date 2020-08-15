import React from "react"
import { Route } from "react-router-dom"
import { Helmet } from "react-helmet";
import { Header, Footer } from "../layout"

const PublicRoute = ({ component: RouteComponent, ...rest }) => {
	return (
		<Route
			{...rest}
			render={routeProps =>
				(
					<>
						<Helmet>
							<body className="main-page" />
						</Helmet>
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