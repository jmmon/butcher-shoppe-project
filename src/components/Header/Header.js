import React from "react";
import {Link} from "wouter";
import styles from "./Header.module.css";
import { ReactComponent as CalendarIcon } from "assets/icons/211703_calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/211829_telephone_icon.svg";
import { ReactComponent as ChatIcon } from "assets/icons/211711_chatbubble_icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/211766_location_icon.svg";

function Header() {
	return (
		<div className={styles.main}>
			<div className={`flex-jbetween gap-1 ${styles.container}`}>
				<Link className={`flex-acenter ${styles.link}`} href="/order">
					<CalendarIcon className={styles.icon} />
					<span className={styles.text}>Schedule</span>
				</Link>
				<a className={`flex-acenter ${styles.link}`} href="tel:15096406766">
					<PhoneIcon className={styles.icon} />
					<span className={styles.text}>(509)640-6766</span>
				</a>
				<a className={`flex-acenter ${styles.link}`} href="#contact">
					<ChatIcon className={styles.icon} />
					<span className={styles.text}>Email Us</span>
				</a>
				<a className={`flex-acenter ${styles.link}`} href="#map">
					<LocationIcon
						className={`${styles.icon} ${styles.location_icon}`}
					/>
					<span className={styles.text}>Northport, WA</span>
				</a>
			</div>
		</div>
	);
}

export default Header;
