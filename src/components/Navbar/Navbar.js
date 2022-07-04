import React from "react";
import { Link } from "wouter";

import styles from "./Navbar.module.css";

import LogoA1Component from "assets/logo/newest/best/httpspng2svg/LogoA1Component";

function Navbar() {
	return (
		<nav className={`${styles.wrapper} panel-shadow--light`}>
			<div className={styles.navbar}>
				<Link
					href="/"
					className={styles.home}
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
				<div className={`${styles.nav_item} ${styles.has_dropdown}`}>
					<div className={styles.nav_dropdown_button}>
						<i className={`fas fa-times ${styles.times}`} />
						<i className={`fas fa-bars ${styles.bars}`} />
					</div>

					<ul className={styles.menu}>
						<li className={styles.menu_item}>
							<Link href="/services" className={styles.links}>
								Services
							</Link>
						</li>
						<li className={styles.menu_item}>
							<Link
								href="/meet-the-team"
								className={styles.links}
							>
								Meet The Team
							</Link>
						</li>
						<li className={styles.menu_item}>
							<Link href="/how-to-order" className={styles.links}>
								How To Order
							</Link>
						</li>

						<li className={styles.menu_item}>
							<Link href="/FAQ" className={styles.links}>
								FAQ
							</Link>
						</li>
						<li className={styles.menu_item}>
							<Link href="/order" className={styles.links}>
								Order
							</Link>
						</li>
						<li className={styles.menu_item}>
							<a href="#more-links" className={styles.links}>
								More...
							</a>
						</li>
						<li className={`${styles.menu_item} ${styles.mobile}`}>
							<Link
								href="/newsletter/subscribe"
								className={styles.links}
							>
								Newsletter
							</Link>
						</li>
					</ul>
				</div>

				{/* Normal Newsletter Button	 */}
				<Link
					href="/newsletter/subscribe"
					className={styles.newsletter}
				>
					<div
						className={`${styles.newsletter_inner} btn--outline btn--large`}
						tabIndex="0"
					>
						Newsletter
					</div>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;
