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
import BeefOrder from "./components/_pages/BeefOrder/BeefOrder.js";
import NotFound from "./components/_pages/NotFound/NotFound";
import ComingSoon from "./components/_pages/ComingSoon/ComingSoon";
import Newsletter from "./components/_pages/Newsletter/Newsletter";
import Unsubscribe from "./components/_pages/Newsletter/Unsubscribe";

function App() {
	const api_regex = /^\/api\/.*/;
	// if using "/api/" in the pathname, don't use React Router
	if (api_regex.test(window.location.pathname)) {
		return <div />; // must return at least an empty div
	} else {
		// use React Router
		return (
			<div className="website-container" id="link-destination-top">
				{/* <Router>
					<ScrollToTop>
						<Header />
						<Navbar />
						<div className="website-content-container">
							<Routes>
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
								<Route path="*" element={<ComingSoon />} />
							</Routes>
							<Footer/>
						</div>
					</ScrollToTop>
				</Router> */}
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

								<Route path="*" element={<NotFound />} />
							</Routes>
							<Footer />
						</div>
					</ScrollToTop>
				</Router>
			</div>
		);
	}
}

export default App;
