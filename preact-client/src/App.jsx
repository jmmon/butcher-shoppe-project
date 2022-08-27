import React, { Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
import "./App.css";
import LinkScrollToTop from "./utils/LinkScrollToTop";
import Fallback from "pages/Fallback/Fallback";
import routes from "./routes";

import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";


function App() {

	return (
		<div className="website-container">
			<LinkScrollToTop excludes={["/contact"]}>
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

						</Switch>
					  <Footer />
					</Suspense>
				</div>
			</LinkScrollToTop>
		</div>
	);
}

export default App;
