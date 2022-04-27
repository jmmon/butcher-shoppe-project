import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import Header from "../pages/components/Header/Header.js";
import Navbar from "../pages/components/Navbar/Navbar.js";
import Footer from "../pages/components/Footer/Index.js";

import Home from "./components/_pages/Home/Home.js";
import Services from "./components/_pages/Services/Services.js";
import Schedule from "./components/_pages/Schedule/Schedule.js";
import Faq from "./components/_pages/Faq/Faq.js";
import BeefOrder from "./components/_pages/BeefOrder/BeefOrder.js";
import NotFound from "./components/_pages/NotFound/NotFound";

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
								path="/beef-form"
								exact
								element={<BeefOrder />}
							/>

							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>

					<Footer />
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
