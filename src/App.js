import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Education from './components/pages/Education.js';
import Footer from './components/Footer.js';
import Schedule from './components/pages/Schedule.js';
import Faq from './components/pages/Faq.js';
import Header from './components/Header.js';
import BeefOrder from './components/BeefOrder.js';
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/pages/PageNotFound";



function App() {



  return (
    <div className="website-container" id="link-destination-top">
        <Router>   
					<ScrollToTop >
						<Header />
            <Navbar />
            <div className="website-content-container">
							<Routes>
									<Route path="/" exact element={<Home />}/>
									<Route path="/services" exact element={<Services />}/>
									<Route path="/education" exact element={<Education />}/>
									<Route path="/schedule" exact element={<Schedule />}/>
									<Route path="/faq" exact element={<Faq />}/>
									<Route path="/beef-form" exact element={<BeefOrder />}/>
									
        					<Route path="*" element={<PageNotFound />} />
							</Routes>
						</div>
            
						<Footer />
						</ScrollToTop>
        </Router>
        
    </div>
  );
}

export default App;
