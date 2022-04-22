import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Button from "./Button";
import "./Navbar.css";

// import Logo from "../assets/logo/logo_tiny.svg";
import { ReactComponent as NewLogo } from "../assets/logo/logo_tiny.svg";

// function NavLogo({icon}) {
// 	return (
// 		<div className="nav-logo" background-image={{icon}}
// 		>

// 		</div>
// 	)
// }

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", () => {
		showButton();
		if (window.innerWidth > 960) {
			closeMobileMenu();
		}
	});

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					{/* <img src={Logo} alt="logo" className="nav-logo" /> */}

					<Link
						to="/"
						className="navbar-home"
						onClick={closeMobileMenu}
					>
						{/* <div
							className="nav-logo"
							style={{ backgroundImage: `url(${Logo})` }}
						></div> */}
						<NewLogo fill="white" className="nav-logo" />
						<div className="navbar-logo-text">
							Northport Butcher Shoppe
						</div>
						{/* <i className="fa-solid fa-tractor" /> */}
					</Link>

					{/* Hamburger icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						{/* <li className="nav-item">
							<Link to="/" className='nav-links' onClick={closeMobileMenu}>
								Home
							</Link>
						</li> */}
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link to="/education" className='nav-links' onClick={closeMobileMenu}>
								Education
							</Link>
						</li> */}
						<li className="nav-item">
							<Link
								to="/schedule"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Schedule
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/FAQ"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								FAQ
							</Link>
						</li>
						<li className="nav-item">
							<a
								href="#more-links"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								More...
							</a>
						</li>
						{/* only shows up on mobile menu */}
						{/* <li className="nav-item">
							<a href="#footer-container" className='nav-links-mobile' onClick={closeMobileMenu}>
								Newsletter
							</a>
						</li> */}
					</ul>

					{/* {button && <a href="#footer-container" className="btn-mobile newsletter-btn"><div className="btn btn--outline btn--large">Newsletter
						</div></a>} */}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
