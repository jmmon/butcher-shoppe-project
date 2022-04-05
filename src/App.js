import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Education from './components/pages/Education.js';
import Newsletter from './components/pages/Newsletter.js';
import Footer from './components/Footer.js';
import Schedule from './components/pages/Schedule.js';
import Faq from './components/pages/Faq.js';
import Header from './components/Header.js';
import BeefOrder from './components/BeefOrder.js';
// import Map from './components/Map.js';
// import Map2 from './components/Map2.js';

// const location = {
// 	// 48.916323, -117.781973
// 	address: '412 Center Ave, Northport, WA 99157, USA',
//   lat: 48.916323,
//   lng: -117.781973,
// };



function App() {
  return (
    <div className="website-container">
        <Router>   
						<Header />
            <Navbar />
            <div className="website-content-container">
							<Routes>
									<Route path="/" exact element={<Home />}/>
									<Route path="/services" exact element={<Services />}/>
									<Route path="/education" exact element={<Education />}/>
									<Route path="/schedule" exact element={<Schedule />}/>
									<Route path="/faq" exact element={<Faq />}/>
									<Route path="/newsletter" exact element={<Newsletter />}/>
									<Route path="beef-form" exact element={<BeefOrder />}/>
							</Routes>
						</div>
            

						{/* <Contact /> */}
						<Footer />
        </Router>
        
    </div>
  );
}

export default App;
