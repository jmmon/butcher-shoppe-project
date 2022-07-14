import React from "react";
import {Link} from "wouter";
import Styles from "./Header.module.css";
import { ReactComponent as CalendarIcon } from "assets/icons/211703_calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/211829_telephone_icon.svg";
import { ReactComponent as ChatIcon } from "assets/icons/211711_chatbubble_icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/211766_location_icon.svg";

function Header() {
	return (
		<div className={Styles.main}>
			<div className={`flex-jbetween gap-1 ${Styles.container}`}>
				<Link className={`flex-acenter ${Styles.link}`} href="/order">
					<CalendarIcon className={Styles.icon} />
					<span className={Styles.text}>Schedule</span>
				</Link>
				<a className={`flex-acenter ${Styles.link}`} href="tel:15096406766">
					<PhoneIcon className={Styles.icon} />
					<span className={Styles.text}>(509)640-6766</span>
				</a>
				<a className={`flex-acenter ${Styles.link}`} href="#contact">
					<ChatIcon className={Styles.icon} />
					<span className={Styles.text}>Email Us</span>
				</a>
				<a className={`flex-acenter ${Styles.link}`} href="#map">
					<LocationIcon
						className={`${Styles.icon} ${Styles.location_icon}`}
					/>
					<span className={Styles.text}>Northport, WA</span>
				</a>
			</div>
		</div>
	);
}

export default Header;
