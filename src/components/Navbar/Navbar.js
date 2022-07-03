import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import "./Navbar.css";
// import "./Navbar_old.css";

import LogoA1Component from "assets/logo/newest/best/httpspng2svg/LogoA1Component";

function Navbar({ simple = false }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLargeScreen, setIsLargeScreen] = useState(false);

	const ToggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMobileMenu = () => {
		setIsMenuOpen(false);
	};

	const handleShowRegularNewsletterButton = () => {
		if (!simple) {
			if (window.innerWidth > 960) {
				setIsLargeScreen(true);
			} else {
				setIsLargeScreen(false);
			}
		}
	};

	useEffect(() => {
		handleShowRegularNewsletterButton();
	}, []);

	window.addEventListener("resize", () => {
		handleShowRegularNewsletterButton();
		if (window.innerWidth > 960) {
			closeMobileMenu();
		}
	});

	window.addEventListener("click", function (evt) {
		if (!isMenuOpen) return;
		if (
			evt.target.matches(".nav-menu.active") ||
			evt.target.matches(".nav-item") ||
			evt.target.matches(".nav-links") ||
			evt.target.matches(".menu-toggle-button") ||
			evt.target.matches(".fas.fa-times")
		) {
			return;
		}

		closeMobileMenu();
	});

	return (
		<>
			<nav className="navbar panel-shadow--light">
				<div className="navbar-container">
					<Link
						href="/"
						className="navbar-home"
						onClick={closeMobileMenu}
					>
						{/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}{" "}
						<LogoA1Component 
						className="nav-logo" 
						fills={{
							white: "#ccc", 
							text: "#fff",
						}}
						/>
					</Link>

					{/* Hamburger icon*/}
					<div className="menu-toggle-button" onClick={ToggleMenu}>
						<i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul
						className={`${isMenuOpen ? "nav-menu active" : "nav-menu"}`}
					>
						<li className="nav-item">
							<Link
								href="/services"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/meet-the-team"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Meet The Team
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/how-to-order"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								How To Order
							</Link>
						</li>

						<li className="nav-item">
							<Link
								href="/FAQ"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								FAQ
							</Link>
						</li>
						<li className="nav-item">
							<Link
								href="/order"
								className="nav-links"
								onClick={closeMobileMenu}
							>
								Order
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
								href="/newsletter/subscribe"
								className="nav-links mobile"
								onClick={closeMobileMenu}
							>
							Newsletter
							</Link>
						</li>
					</ul>

					{/* Normal Newsletter Button	 */}
					{isLargeScreen && (
						<Link
							href="/newsletter/subscribe"
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
