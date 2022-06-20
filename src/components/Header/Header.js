import React from "react";
import "./Header.css";

import { ReactComponent as ClockIcon } from "assets/icons/clock.svg";

function Header() {
	return (
		<div className="header">
			<div className="header-container">
				<a className="header-link special" href="#contact-link-target">
					<ClockIcon className="clock-icon" />
					<p className="header-hours">9-5 M-F</p>
				</a>
				<a className="header-link header-phone" href="tel:15096907214">
					(509) 690-7214
				</a>
				<a
					className="header-link header-contact"
					href="#contact-link-target"
				>
					Email Us
				</a>
				<a
					className="header-link header-location"
					href="#map-link-target"
				>
					Northport, WA
				</a>
			</div>
		</div>
	);
}

export default Header;
