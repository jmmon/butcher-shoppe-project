import React from "react";
import styles from "./Header.module.css";

import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";

function Header() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<a className={`${styles.link} ${styles.special}`}href="#contact-link-target">
					<ClockIcon className={styles.clock_icon} />
					<p>9-5 M-F</p>
				</a>
				<a className={styles.link} href="tel:15096907214">
					(509) 690-7214
				</a>
				<a
					className={styles.link}
					href="#contact-link-target"
				>
					Email Us
				</a>
				<a
					className={styles.link}
					href="#map-link-target"
				>
					Northport, WA
				</a>
			</div>
		</div>
	);
}

export default Header;
