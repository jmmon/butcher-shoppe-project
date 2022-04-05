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
			<div className="header-item">
				<HeaderIcon icon={<ClockIcon />} /> 
				<div className="header-hours">9-5 M-F</div> 
			</div>
			<div className="header-item header-phone">
				(509)555-5555
			</div>
			<div className="header-item header-contact">
				Email Us
			</div>
			<div className="header-item header-location">
				Northport, WA
			</div>

		</div>
	)
}

export default Header