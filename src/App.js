import React, {lazy, Suspense} from "react";
import 'preact/debug'
import { Route, Switch } from "wouter";
import "./App.css";
import ScrollToTopOnClickLink from "./utils/ScrollToTopOnClickLink";

import Header from "components/Header/Header.js";
import Navbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";

import Home from "pages/Home/Home.js";
import NotFound from "pages/NotFound/NotFound";

const Services = lazy(()=> import("pages/Services/Services.js"));
const Faq = lazy(()=> import("pages/Faq/Faq.js"));
const Order = lazy(()=> import("pages/Order/Order.js"));
const HowToOrder = lazy(()=> import("pages/HowToOrder/HowToOrder.js"));
const Newsletter = lazy(()=> import("pages/Newsletter/Newsletter"));
const Unsubscribe = lazy(()=> import("pages/Newsletter/Unsubscribe"));
const SubscribeConfirm = lazy(()=> import("pages/Newsletter/Confirm/SubscribeConfirm"));
const MeetTheTeam = lazy(()=> import("pages/MeetTheTeam/MeetTheTeam"));
const Membership = lazy(()=> import("pages/Membership/Membership"));

// const NotFound = lazy(()=> import("pages/NotFound/NotFound"));



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
					<Switch>
						<Route path="/">
							<Home />
						</Route>

						<Route path="/newsletter/subscribe">
							<Suspense fallback={<div>Loading...</div>}>
								<Newsletter />

							</Suspense>
						</Route>

						<Route path="/newsletter/unsubscribe">
							<Suspense fallback={<div>Loading...</div>}>
							<Unsubscribe />

							</Suspense>
						</Route>

						<Route path="/newsletter/subscribe/confirm/:id">
							{(params) => (
								<Suspense fallback={<div>Loading...</div>}>
								<SubscribeConfirm
									isSubscribePage
									id={params.id}
								/>
	
								</Suspense>
								
							)}
						</Route>

						<Route path="/newsletter/unsubscribe/confirm/:id">
							{(params) => (
								<Suspense fallback={<div>Loading...</div>}>
								<SubscribeConfirm
									isSubscribePage={false}
									id={params.id}
								/>
	
								</Suspense>
								
							)}
						</Route>

						<Route path="/services">
						<Suspense fallback={<div>Loading...</div>}>
								
	
							<Services />
								</Suspense>
						</Route>

						<Route path="/faq">
						<Suspense fallback={<div>Loading...</div>}>
								
							<Faq />
	
									</Suspense>
						</Route>

						<Route path="/how-to-order">
						<Suspense fallback={<div>Loading...</div>}>
							<HowToOrder />
								
		
										</Suspense>
						</Route>

						<Route path="/order">
						<Suspense fallback={<div>Loading...</div>}>
							<Order />
								
		
										</Suspense>
						</Route>

						<Route path="/meet-the-team">
						<Suspense fallback={<div>Loading...</div>}>
							<MeetTheTeam />
								
		
										</Suspense>
						</Route>

						<Route path="/membership">
						<Suspense fallback={<div>Loading...</div>}>
							<Membership />
								
		
										</Suspense>
						</Route>

						<Route>
							<NotFound />
						</Route>

					</Switch>
					<Footer />
				</div>
			</ScrollToTopOnClickLink>
		</div>
	);
}

export default App;
