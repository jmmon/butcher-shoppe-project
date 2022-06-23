import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./LinkScrollUp.css";

function LinkScrollUp({ className, path, children }) {
	const { pathname } = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	className = className || "";

	return (
		<>
			{pathname === path || path === undefined ? (
				<span
				tabIndex="0"
					className={`${className} white-link margin`}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<Link className={`${className} white-link margin`} to={path}>
					{children}
				</Link>
			)}
		</>
	);
}

export default LinkScrollUp;
