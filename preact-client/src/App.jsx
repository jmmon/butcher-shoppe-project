import React, { Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
// import { useInView } from "react-intersection-observer";
import "./App.css";
import LinkScrollToTop from "./utils/LinkScrollToTop";
import Fallback from "pages/Fallback/Fallback";
import routes from "./routes";

import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import Footer from "layouts/Footer/Footer";
import { ComponentInView } from "utils/ComponentInView";
import CONSTANTS from "utils/CONSTANTS";

// const options = {
// 	root: null,
// 	rootMargin: "100px",
// 	threshold: 0, // default
// 	triggerOnce: true,
// 	fallbackInView: true,
// };

function App() {
	// const { ref, inView } = useInView(options);
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
						<ComponentInView marginPx={CONSTANTS.OFFSET.FIRST}>
							<Footer />
						</ComponentInView>
						{/* <div ref={ref}>
					  	{inView && <Footer />}
						</div> */}
					</Suspense>
				</div>
			</LinkScrollToTop>
		</div>
	);
}

export default App;
