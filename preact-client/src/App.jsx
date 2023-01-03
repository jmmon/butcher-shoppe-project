import React, { Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
import "./App.css";
import LinkScrollToTop from "./utils/LinkScrollToTop";
import Fallback from "pages/Fallback/Fallback";
import routes from "./routes";
import IdleDetector from "react-idle-detector";

import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";

const noActivityHandler = (nextRoute, setNextRoute, visitedRoutes) => {
	let index = nextRoute;
	while (visitedRoutes.includes(routes[index].path)) {
		// console.log('index', index, 'was already visited, skipping...');
		index++;
	}
	routes[index].component.preload();
	// console.log('loading component', index, 'with path', routes[index].path);
	setNextRoute(index + 1);
}

function App() {
	const [nextRoute, setNextRoute] = React.useState(1);
	const [visitedRoutes, setVisitedRoutes] = React.useState(['/']);
	// React.useEffect(() => {console.log({visitedRoutes})}, [visitedRoutes])

	return (
		<IdleDetector
			events={['mousemove', 'keydown']}
			onNoActivity={() => {
				if (nextRoute > 10) return; 
				noActivityHandler(nextRoute, setNextRoute, visitedRoutes);
			}}
			idleTime={2000}
		>
		<div 
		className="website-container" 
		>
			<LinkScrollToTop excludes={["/contact"]}>
				<Header />
				<Navbar 
				/>
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
								>
									<route.component path={route.path} setVisitedRoutes={setVisitedRoutes} />
								</Route>
								// <Route 
								// 	key={index}
								// 	exact={route.exact}
								// 	path={route.path}
								// 	component={route.component}
								// />
							))}

						</Switch>
						<Footer />
					</Suspense>
				</div>
			</LinkScrollToTop>
		</div>
		</IdleDetector>
	);
}

export default App;
