import React from "react";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";
import TelLink from "components/TelLink/TelLink";
import Styles from "./Header.module.css";

import { ReactComponent as CalendarIcon } from "assets/icons/211703_calendar_icon.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/211829_telephone_icon.svg";
import { ReactComponent as ChatIcon } from "assets/icons/211711_chatbubble_icon.svg";
import { ReactComponent as LocationIcon } from "assets/icons/211766_location_icon.svg";

function Header() {
	return (
		<div className={`flex-acenter ${Styles.main}`}>
			<div className={`flex-jbetween gap-1 ${Styles.container}`}>
				<LinkWithPreload className={`flex-acenter text-white ${Styles.link}`} href="/order">
					<CalendarIcon className={Styles.icon} />
					<span className={Styles.text}>Schedule</span>
				</LinkWithPreload>
				<TelLink className={`flex-acenter text-white ${Styles.link}`}>
					<PhoneIcon className={Styles.icon} />
					<span className={Styles.text}>(509) 640-6766</span>
				</TelLink>
				<a className={`flex-acenter text-white ${Styles.link}`} href="#contact">
					<ChatIcon className={Styles.icon} />
					<span className={Styles.text}>Email Us</span>
				</a>
				<a className={`flex-acenter text-white ${Styles.link}`} href="#map">
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
