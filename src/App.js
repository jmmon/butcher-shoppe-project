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

function App() {
	return (
		<div className="website-container" id="link-destination-top">
			<Router>
				<ScrollToTop>
					<Routes>
						<Route path="*" exact element={<ComingSoon />} />
					</Routes>
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

							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>

					<Footer />
				</ScrollToTop>
			</Router> */}
		</div>
	);
}

export default App;
