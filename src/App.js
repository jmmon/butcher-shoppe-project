import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

import Home from "./components/_pages/Home/Home.js";
import Services from "./components/_pages/Services/Services.js";
import Schedule from "./components/_pages/Schedule/Schedule.js";
import Faq from "./components/_pages/Faq/Faq.js";
import Order from "./components/_pages/Order/Order.js";
import HowToOrder from "./components/_pages/HowToOrder/HowToOrder.js";
import NotFound from "./components/_pages/NotFound/NotFound";
// import ComingSoon from "./components/_pages/ComingSoon/ComingSoon";
import Newsletter from "./components/_pages/Newsletter/Newsletter";
import Unsubscribe from "./components/_pages/Newsletter/Unsubscribe";
import SubscribeConfirm from "./components/_pages/Newsletter/Confirm/SubscribeConfirm";
import MeetTheTeam from "./components/_pages/MeetTheTeam/MeetTheTeam";
import Prices from "./components/_pages/Prices/Prices";
import React from "react";

function App() {
	return (
		<div className="website-container" id="link-destination-top">
			<Router>
				<ScrollToTop>
					<Header />
					<Navbar />
					<div className="website-content-container">
						<Routes>
							<Route path="/" exact element={<Home />} />

							<Route
								path="/services"
								exact
								element={<Services />}
							/>

							<Route
								path="/schedule"
								exact
								element={<Schedule />}
							/>

							<Route path="/faq" exact element={<Faq />} />

							<Route
								path="/how-to-order"
								exact
								element={<HowToOrder />}
							/>
							<Route path="/order" exact element={<Order />} />
							<Route
								path="/newsletter"
								exact
								element={<Newsletter />}
							/>

							<Route
								path="/meet-the-team"
								exact
								element={<MeetTheTeam />}
							/>

							<Route path="/prices" exact element={<Prices />} />

							<Route
								path="/newsletter/unsubscribe"
								exact
								element={<Unsubscribe />}
							/>

							<Route
								path="/newsletter/subscribe/confirm"
								exact
								element={<SubscribeConfirm subscribe={true} />}
							/>

							<Route
								path="/newsletter/unsubscribe/confirm"
								exact
								element={<SubscribeConfirm subscribe={false} />}
							/>

							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</div>
				</ScrollToTop>
			</Router>
		</div>
	);
	// }
}

export default App;
