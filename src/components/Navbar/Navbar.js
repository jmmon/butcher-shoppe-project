import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import LogoComponent from "assets/logo/LogoComponent.js";

function Navbar({ simple = false }) {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (!simple) {
			if (window.innerWidth <= 960) {
				setButton(false);
			} else {
				setButton(true);
			}
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
					<Link
						to="/"
						className="navbar-home"
						onClick={closeMobileMenu}
					>
						<LogoComponent fill="white" className="nav-logo" />
						{/* <div className="navbar-logo-text">
							The Butcher Shoppe
						</div> */}
					</Link>

					{/* Hamburger icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link
								to="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/meet-the-team"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Meet The Team
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/how-to-order"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								How To Order
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

						<li className="nav-item">
							<Link
								to="/newsletter"
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Newsletter
							</Link>
						</li>
					</ul>

					{button && (
						<Link
							to="/newsletter"
							className="btn-mobile newsletter-btn"
						>
							<div className="btn btn--outline btn--large">
								Newsletter
							</div>
						</Link>
					)}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
