import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./LinkScrollUp.css";

function LinkScrollUp({ path, cName, children }) {
	const { pathname } = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	cName = cName || "";

	return (
		<>
			{pathname === path ? (
				<span
					className={`${cName} footer-link-scroll`}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<Link className={`${cName} footer-link-scroll`} to={path}>
					{children}
				</Link>
			)}
		</>
	);
}

export default LinkScrollUp;
