import React, { lazy, Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
import "./App.css";
import ScrollToTopOnClickLink from "./utils/ScrollToTopOnClickLink";
import Fallback from "pages/Fallback/Fallback";
import routes from "./routes";

import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
// import Footer from "layouts/Footer/Footer";



// import Home from "pages/Home/Home";
// import NotFound from "pages/NotFound/NotFound";


const NotFound = lazy(() =>
	import("pages/NotFound/NotFound")
);

const Footer = lazy(() =>
	import("layouts/Footer/Footer")
);

// const Fallback = lazy(() =>
// 	import("pages/Fallback/Fallback")
// );
// const SubscribeConfirm = lazy(() =>
// 	import("pages/Newsletter/Confirm/SubscribeConfirm")
// );
// const UnsubscribeConfirm = lazy(() =>
// 	import("pages/Newsletter/Confirm/UnsubscribeConfirm")
// );
// const TestingLogoPage = lazy(() => import("pages/TestingLogo/TestingLogoPage"));



// const Services = lazy(() => import("pages/Services/Services"));
// const Faq = lazy(() => import("pages/Faq/Faq"));
// const Order = lazy(() => import("pages/Order/Order"));
// const HowToOrder = lazy(() => import("pages/HowToOrder/HowToOrder"));
// const Newsletter = lazy(() => import("pages/Newsletter/Newsletter"));
// const Unsubscribe = lazy(() => import("pages/Newsletter/Unsubscribe"));
// const SubscribeConfirm = lazy(() =>
// import("pages/Newsletter/Confirm/SubscribeConfirm")
// );
// const MeetTheTeam = lazy(() => import("pages/MeetTheTeam/MeetTheTeam"));
// const Membership = lazy(() => import("pages/Membership/Membership"));
// const TestingLogoPage = lazy(() => import("pages/TestingLogo/TestingLogoPage"));






// import Services from "pages/Services/Services.js";
// import Faq from "pages/Faq/Faq.js";
// import Order from "pages/Order/Order.js";
// import HowToOrder from "pages/HowToOrder/HowToOrder.js";
// import Newsletter from "pages/Newsletter/Newsletter";
// import Unsubscribe from "pages/Newsletter/Unsubscribe";
// import SubscribeConfirm from "pages/Newsletter/Confirm/SubscribeConfirm";
// import MeetTheTeam from "pages/MeetTheTeam/MeetTheTeam";
// import Membership from "pages/Membership/Membership";

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
							{/* <Route path="/testing-logo">
								<TestingLogoPage />
							</Route> */}

							{/* <Route path="/">
								<Home />
							</Route> */}

							{/* <Route path="/newsletter/subscribe/confirm/:id">
								{(params) => (
									<SubscribeConfirm
										id={params.id}
									/>
								)}
							</Route>

							<Route path="/newsletter/unsubscribe/confirm/:id">
								{(params) => (
									<UnsubscribeConfirm
										id={params.id}
									/>
								)}
							</Route> */}

							{/* <Route path="/newsletter/subscribe/confirm/:confirmationId" component={SubscribeConfirm}/>

							<Route path="/newsletter/unsubscribe/confirm/:confirmationId" component={UnsubscribeConfirm}/> */}

							{routes.map((route) => (
								<Route 
									key={route.path}
									exact={route.exact}
									path={route.path}
									component={route.component}
								/>
							))}

							{/* <Route path="/newsletter/subscribe">
								<Newsletter />
							</Route>

							<Route path="/newsletter/unsubscribe">
								<Unsubscribe />
							</Route>



							<Route path="/services">
								<Services />
							</Route>

							<Route path="/faq">
								<Faq />
							</Route>

							<Route path="/how-to-order">
								<HowToOrder />
							</Route>

							<Route path="/order">
								<Order />
							</Route>

							<Route path="/meet-the-team">
								<MeetTheTeam />
							</Route>

							<Route path="/membership">
								<Membership />
							</Route> */}

							<Route>
								<NotFound />
							</Route>
						</Switch>
					  <Footer />
					</Suspense>
				</div>
			</ScrollToTopOnClickLink>
		</div>
	);
}

export default App;
