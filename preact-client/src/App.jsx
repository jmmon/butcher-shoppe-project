// import React, { lazy, Suspense } from "react";
import "preact/debug";
import { Route, Switch } from "wouter";
import "./App.css";
import ScrollToTopOnClickLink from "./utils/ScrollToTopOnClickLink";

import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";

// import Fallback from "pages/Fallback/Fallback";

import Home from "pages/Home/Home";
import NotFound from "pages/NotFound/NotFound";


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


import Services from "pages/Services/Services";
import Faq from "pages/Faq/Faq";
import Order from "pages/Order/Order";
import HowToOrder from "pages/HowToOrder/HowToOrder";
import Newsletter from "pages/Newsletter/Newsletter";
import Unsubscribe from "pages/Newsletter/Unsubscribe";
import SubscribeConfirm from "pages/Newsletter/Confirm/SubscribeConfirm";
import MeetTheTeam from "pages/MeetTheTeam/MeetTheTeam";
import Membership from "pages/Membership/Membership";

function App() {
	return (
		<div className="website-container">
			<ScrollToTopOnClickLink>
				<Header />
				<Navbar />
				<div className="website-content-container">

					{/* <Suspense
						fallback={
							<Fallback />
						}
					> */}

						<Switch>
							<Route path="/">
								<Home />
							</Route>

							<Route path="/newsletter/subscribe">
								<Newsletter />
							</Route>

							<Route path="/newsletter/unsubscribe">
								<Unsubscribe />
							</Route>

							<Route path="/newsletter/subscribe/confirm/:id">
								{(params) => (
									<SubscribeConfirm
										isSubscribePage
										id={params.id}
									/>
								)}
							</Route>

							<Route path="/newsletter/unsubscribe/confirm/:id">
								{(params) => (
									<SubscribeConfirm
										isSubscribePage={false}
										id={params.id}
									/>
								)}
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
							</Route>

							<Route>
								<NotFound />
							</Route>
						</Switch>

					{/* </Suspense> */}

					<Footer />
				</div>
			</ScrollToTopOnClickLink>
		</div>
	);
}

export default App;
