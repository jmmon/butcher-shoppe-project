import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "./components/Header/Header.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";

// import Home from "./components/_pages/Home/Home.js";
// import Services from "./components/_pages/Services/Services.js";
// import Schedule from "./components/_pages/Schedule/Schedule.js";
// import Faq from "./components/_pages/Faq/Faq.js";
// import BeefOrder from "./components/_pages/BeefOrder/BeefOrder.js";
// import NotFound from "./components/_pages/NotFound/NotFound";
import ComingSoon from "./components/_pages/ComingSoon/ComingSoon";
import Newsletter from "./components/_pages/Newsletter/Newsletter";
import Unsubscribe from "./components/_pages/Newsletter/Unsubscribe";

import SubscribeConfirm from "./pages/Newsletter/Confirm/SubscribeConfirm";

function App() {
	return (
		<div className="website-container" id="link-destination-top">
			<Router>
				<ScrollToTop>
					<Header />
					<Navbar simple={true} />
					<div className="website-content-container">
						<Routes>
							<Route path="newsletter">
								<Route
									path="unsubscribe/confirm/:id"
									// exact
									element={
										<SubscribeConfirm
										/>
									}
								/>
								<Route
									path="subscribe/confirm/:id"
									// exact
									element={
										<SubscribeConfirm
											isSubscribePage
										/>
									}
								/>
								<Route
									path="unsubscribe"
									exact
									element={<Unsubscribe />}
								/>
								<Route
									path="subscribe"
									exact
									element={<Newsletter />}
								/>
							</Route>

							{/* <Route path="newsletter">

								<Route
									path="subscribe"
									exact
									element={<Newsletter />}
								>
									<Route
										path="confirm/:id"
										
										element={
											<SubscribeConfirm isSubscribePage />
										}
									/>
								</Route>

								<Route
									path="unsubscribe"
									exact
									element={<Unsubscribe />}
								>
									<Route
										path="confirm/:id"
										
										element={<SubscribeConfirm />}
									/>
								</Route>

							</Route> */}

							<Route path="*" element={<ComingSoon />} />
						</Routes>
						<Footer simple={true} />
					</div>
				</ScrollToTop>
			</Router>
			{/* <Router>
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
								path="/beef-form"
								exact
								element={<BeefOrder />}
							/>
							<Route
								path="/construction"
								exact
								element={<ComingSoon />}
							/>
							<Route
								path="/newsletter"
								exact
								element={<Newsletter />}
							/>

							<Route
								path="/newsletter/unsubscribe"
								exact
								element={<Unsubscribe />}
							/>

							<Route
								path="/subscribe/success"
								exact
								element={<SubscribeSuccess />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
						<Footer />
					</div>
				</ScrollToTop>
			</Router> */}
		</div>
	);
}

export default App;
