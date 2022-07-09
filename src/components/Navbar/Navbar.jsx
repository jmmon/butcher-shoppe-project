import React from "react";
import { Link } from "wouter";

import styles from "./Navbar.module.css";

import LogoA1Component from "assets/logo/newest/best/httpspng2svg/LogoA1Component";

function Navbar() {
	return (
		<nav className={`${styles.wrapper} panel-shadow--light`}>
			<div className={styles.navbar}>
				<Link href="/" className={styles.home}>
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
				<div className={styles.menu_container}>
					<div className={styles.dropdown_button}>
		
						<i className={`fas fa-bars ${styles.bars}`} />
					</div>

					<div className={styles.menu}>
						<Link
							href="/services"
							className={`${styles.menu_item} ${styles.links}`}
						>
							Services
						</Link>
						<Link
							href="/meet-the-team"
							className={`${styles.menu_item} ${styles.links}`}
						>
							Meet The Team
						</Link>
						<Link
							href="/how-to-order"
							className={`${styles.menu_item} ${styles.links}`}
						>
							How To Order
						</Link>
						<Link
							href="/FAQ"
							className={`${styles.menu_item} ${styles.links}`}
						>
							FAQ
						</Link>
						<Link
							href="/order"
							className={`${styles.menu_item} ${styles.links}`}
						>
							Order
						</Link>
						<a
							href="#more-links"
							className={`${styles.menu_item} ${styles.links}`}
						>
							More...
						</a>
						<Link
							href="/newsletter/subscribe"
							className={`${styles.links} ${styles.newsletter_mobile}`}
						>
							Newsletter
						</Link>
					</div>
				</div>

				{/* Normal Newsletter Button	 */}
				<Link href="/newsletter/subscribe">
					<div
						className={`${styles.newsletter_button} btn--outline btn--large`}
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
