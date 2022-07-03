import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import "./Navbar.css";
// import "./Navbar_old.css";

import styles from "./Navbar.module.css";

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
		// if (
		// 	evt.target.matches(".nav-menu.active") ||
		// 	evt.target.matches(".nav-item") ||
		// 	evt.target.matches(".nav-links") ||
		// 	evt.target.matches(".menu-toggle-button") ||
		// 	evt.target.matches(".fas.fa-times")
		// ) {
		// 	return;
		// }
		if (
			evt.target.matches(`${styles.menu} ${styles.active}`) ||
			evt.target.matches(styles.item) ||
			evt.target.matches(styles.links) ||
			evt.target.matches(styles.menu_toggle) ||
			evt.target.matches(".fas.fa-times")
		) {
			return;
		}

		closeMobileMenu();
	});

	return (
		<>
			<nav className={`${styles.main} panel-shadow--light`}>
				<div className={styles.container}>
					<Link
						href="/"
						className={styles.home}
						onClick={closeMobileMenu}
					>
						{/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}{" "}
						<LogoA1Component 
						className={styles.logo}
						fills={{
							white: "#ccc", 
							text: "#fff",
						}}
						styles={styles}
						/>
					</Link>

					{/* Hamburger icon*/}
					<div className={styles.menu_toggle} onClick={ToggleMenu}>
						<i className={isMenuOpen ? `fas fa-times ${styles.times}` : `fas fa-bars ${styles.bars}`} />
					</div>

					<ul
						className={`${isMenuOpen ? `${styles.menu} ${styles.active}` : `${styles.menu}`}`}
					>
						<li className={styles.item}>
							<Link
								href="/services"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								Services
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								href="/meet-the-team"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								Meet The Team
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								href="/how-to-order"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								How To Order
							</Link>
						</li>

						<li className={styles.item}>
							<Link
								href="/FAQ"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								FAQ
							</Link>
						</li>
						<li className={styles.item}>
							<Link
								href="/order"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								Order
							</Link>
						</li>
						<li className={styles.item}>
							<a
								href="#more-links"
								className={styles.links}
								onClick={closeMobileMenu}
							>
								More...
							</a>
						</li>
						<li className={styles.item}>
							<Link
								href="/newsletter/subscribe"
								className={`${styles.links} ${styles.mobile}`}
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
							className={`btn-mobile ${styles.newsletter_btn}`}
						>
							<div className={`${styles.newsletter_btn_inner} btn--outline btn--large`}>
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
