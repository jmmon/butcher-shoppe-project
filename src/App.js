import React from "react";
import { Route, Switch } from "wouter";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";

import Header from "components/Header/Header.js";
import Navbar from "components/Navbar/Navbar.js";
import Footer from "components/Footer/Footer.js";

import Home from "pages/Home/Home.js";
import Services from "pages/Services/Services.js";
import Faq from "pages/Faq/Faq.js";
import Order from "pages/Order/Order.js";
import HowToOrder from "pages/HowToOrder/HowToOrder.js";
import NotFound from "pages/NotFound/NotFound";
import ComingSoon from "pages/ComingSoon/ComingSoon";
import Newsletter from "pages/Newsletter/Newsletter";
import Unsubscribe from "pages/Newsletter/Unsubscribe";
import SubscribeConfirm from "pages/Newsletter/Confirm/SubscribeConfirm";
import MeetTheTeam from "pages/MeetTheTeam/MeetTheTeam";
import Membership from "pages/Membership/Membership";

function App() {
	return (
		<div className="website-container" id="link-destination-top">
			<ScrollToTop>
				<Header />
				<Navbar />
				<div className="website-content-container">
					<Switch>
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

						<Route path="/">
							<Home />
						</Route>
						<Route path="/services">
							<Services />
						</Route>
						<Route path="/coming-soon">
							<ComingSoon />
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
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
					<Footer />
				</div>
			</ScrollToTop>
		</div>
	);
}

export default App;
