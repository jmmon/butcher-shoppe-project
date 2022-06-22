import React from "react";
import {Link} from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as CalendarIcon } from "assets/icons/211703_calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/211829_telephone_icon.svg";
import { ReactComponent as ChatIcon } from "assets/icons/211711_chatbubble_icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/211766_location_icon.svg";

function Header() {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<Link
					className={styles.link}
					to="/order"
				>
					<CalendarIcon className={styles.icon} />
					Schedule
				</Link>
				<a className={styles.link} href="tel:15096907214">
					<PhoneIcon className={styles.icon} />
					(509) 690-7214
				</a>
				<a className={styles.link} href="#contact-link-target">
					<ChatIcon className={styles.icon} />
					Email Us
				</a>
				<a className={styles.link} href="#map-link-target">
					<LocationIcon className={`${styles.icon} ${styles.location_icon}`} />
					Northport, WA
				</a>
			</div>
		</div>
	);
}

export default Header;
