import React, { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import "./Navbar.css";

import LogoComponent from "assets/logo/LogoComponent.js";
import LogoA1Component from "assets/logo/newest/best/httpspng2svg/LogoA1Component";

function Navbar({ simple = false }) {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const navMenu = useRef();

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {
		setClick(false);
	};

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

	window.addEventListener("click", function (evt) {
		if (
			evt.target.matches(".nav-menu.active") ||
			evt.target.matches(".nav-item") ||
			evt.target.matches(".nav-links") ||
			evt.target.matches(".menu-icon") ||
			evt.target.matches(".fas.fa-times")
		) {
			return;
		}

		closeMobileMenu();
	});

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link
						href="/"
						className="navbar-home"
						onClick={closeMobileMenu}
					>
						{/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}{" "}
						{/* <LogoComponent fill="white" className="nav-logo" /> */}
						<LogoA1Component 
						className="nav-logo-2" 
						fills={{
						// 	black: "#fff", 
						// 	brown: "#fff", 
							white: "#ccc", 
						// 	grey: "#aaa", 
						// 	red: "#000"
						}}
						/>
						{/* <div className="nav-logo">The Butcher Shoppe</div> */}
					</Link>

					{/* Hamburger icon*/}
					<div className="menu-icon" onClick={handleClick}>
						<i className={click ? "fas fa-times" : "fas fa-bars"} />
					</div>

					<ul
						className={click ? "nav-menu active" : "nav-menu"}
						ref={navMenu}
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
								className="nav-links-mobile"
								onClick={closeMobileMenu}
							>
								Newsletter
							</Link>
						</li>
					</ul>

					{/* Normal Newsletter Button	 */}
					{button && (
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
