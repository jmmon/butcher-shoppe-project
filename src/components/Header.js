import { useState } from 'react'
import "./Header.css";

import { isMobile } from 'react-device-detect';

import { ReactComponent as ClockIcon} from '../assets/icons/clock.svg'

function HeaderIcon({icon}) {
	return (
		<div className="header-icon">
			{icon}
		</div>
	)
}



function Header() {
	const [isHovered, setIsHovered] = useState(false);

	const handleHover = () => {
		setIsHovered(true);
	};

	const handleLeave = () => {
		setIsHovered(false);
	}

	return (
		<div className="header">
			{/* <div className="header-container"> */}

			<a 
				className={(isHovered || isMobile) ? "header-link-special hover" : "header-link-special"} 
				href="#contact-link-target"
				onMouseEnter={handleHover}
				onMouseLeave={handleLeave}
			>
				<HeaderIcon
					icon={(isHovered || isMobile) ? 
						<ClockIcon 
							className="clock-icon" 
							fill="white"
						/> 
						: 
						<ClockIcon 
							className="clock-icon" 
							fill="black"
						/>}
				/> 
				<p className="header-hours">9-5 M-F</p> 
			</a>
			<a className="header-link header-phone" href="tel:15096907214">
				(509) 690-7214
			</a>
			<a className="header-link header-contact" href="#contact-link-target">
				Email Us
			</a>
			<a className="header-link header-location" href="#map-link-target">
				Northport, WA
			</a>

			{/* </div> */}
		</div>
	)
}

export default Header