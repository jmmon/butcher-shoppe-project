import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
// import SubscribeConfirm from "pages/Newsletter/Confirm/SubscribeConfirm";
import MeetTheTeam from "pages/MeetTheTeam/MeetTheTeam";
import Prices from "pages/Prices/Prices";

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
								path="/coming-soon"
								exact
								element={<ComingSoon />}
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

							{/* <Route
								path="/newsletter/subscribe/confirm"
								exact
								element={<SubscribeConfirm subscribe={true} />}
							/>

							<Route
								path="/newsletter/unsubscribe/confirm"
								exact
								element={<SubscribeConfirm subscribe={false} />}
							/> */}

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
