import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Button from './Button';
import "./Navbar.css"

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if(window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	}

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">

					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<div className="navbar-logo-text">Northport Butcher Shoppe</div>
						 {/* <i className="fa-solid fa-tractor" /> */}
					</Link>

					{/* Hamburger icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>

					<ul className={click ? 'nav-menu active' : 'nav-menu'} >
						{/* <li className="nav-item">
							<Link to="/" className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li> */}
						<li className="nav-item">
							<Link to="/services" className='nav-links' onClick={closeMobileMenu}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/education" className='nav-links' onClick={closeMobileMenu}>
								Education
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/schedule" className='nav-links' onClick={closeMobileMenu}>
								Schedule
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/FAQ" className='nav-links' onClick={closeMobileMenu}>
								FAQ
							</Link>
						</li>
						<li className="nav-item">
							<a 
								href="#more-links" 
								className='nav-links' 
								onClick={closeMobileMenu}
							>
								More...
							</a>
						</li>
						<li className="nav-item">
							{/* only shows up on mobile menu */}
							<a href="#footer-container" className='nav-links-mobile' onClick={closeMobileMenu}>
								Newsletter
							</a>
						</li>
					</ul>

					{button && <a href="#footer-container" className="btn-mobile newsletter-btn"><div className="btn btn--outline btn--large">Newsletter
						</div></a>}

				</div>
			</nav>
		</>
	)
}

export default Navbar;