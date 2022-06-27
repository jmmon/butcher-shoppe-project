import React from "react";
import {Link, useLocation} from "wouter";

import "./LinkScrollUp.css";

function LinkScrollUp({ className, path, children }) {
	const [location, setLocation] = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	className = className || "";

	return (
		<>
			{location === path || path === undefined ? (
				<span
				tabIndex="0"
					className={`${className} white-link margin`}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<Link className={`${className} white-link margin`} href={path}>
					{children}
				</Link>
			)}
		</>
	);
}

export default LinkScrollUp;
