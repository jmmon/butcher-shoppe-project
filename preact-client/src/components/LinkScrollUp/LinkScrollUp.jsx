import React from "react";
import { Link, useLocation } from "wouter";

function LinkScrollUp({ className = '', path, children }) {
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
					className={`main-link ${className}`}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<Link className={`main-link ${className}`} href={path}>
					{children}
				</Link>
			)}
		</>
	);
}

export default LinkScrollUp;
