import React from "react";
import styles from "./Header.module.css";
import { ReactComponent as CalendarIcon } from "assets/icons/211703_calendar_icon.svg";
// import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";
import calendar from "assets/icons/211703_calendar_icon.png";

function Header() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<a className={`${styles.link} ${styles.special}`}href="#contact-link-target">
					<CalendarIcon className={styles.calendar_icon} />
					Schedule
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
