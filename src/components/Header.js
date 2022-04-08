import React from 'react'
import "./Header.css";

import { ReactComponent as ClockIcon} from '../assets/icons/clock.svg'

function HeaderIcon({icon}) {
	return (
		<div className="header-icon">
			{icon}
		</div>
	)
}

function Header() {
	return (
		<div className="header">
			<a className="header-link" href="#contact-link-target">
				<HeaderIcon icon={<ClockIcon />} /> 
				<p className="header-hours">9-5 M-F</p> 
			</a>
			<a className="header-link header-phone" href="#contact-link-target">
				(509)555-5555
			</a>
			<a className="header-link header-contact" href="#contact-link-target">
				Email Us
			</a>
			<a className="header-link header-location" href="#map-link-target">
				Northport, WA
			</a>

		</div>
	)
}

export default Header