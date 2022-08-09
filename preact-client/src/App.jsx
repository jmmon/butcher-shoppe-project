import React, { lazy, Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
import "./App.css";
import ScrollToTopOnClickLink from "./utils/ScrollToTopOnClickLink";
import Fallback from "pages/Fallback/Fallback";
import routes from "./routes";

import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";

const Footer = lazy(() =>
	import("layouts/Footer/Footer")
);


function App() {
	return (
		<div className="website-container">
			<ScrollToTopOnClickLink>
				<Header />
				<Navbar />
				<div className="website-content-container">
					<Suspense
						fallback={
							<Fallback />
						}
					>
						<Switch>
							{routes.map((route, index) => (
								<Route 
									key={index}
									exact={route.exact}
									path={route.path}
									component={route.component}
								/>
							))}

							{/* <Route>
								<NotFound />
							</Route> */}
						</Switch>
					  <Footer />
					</Suspense>
				</div>
			</ScrollToTopOnClickLink>
		</div>
	);
}

export default App;
