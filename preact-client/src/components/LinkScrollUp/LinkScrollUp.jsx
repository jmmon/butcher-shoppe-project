import React from "react";
import { useLocation } from "wouter";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";

function LinkScrollUp({ 
	className = '', 
	path, 
	children 
}) {
	const [location, setLocation] = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const isPathMatching = location === path || path === undefined;

	className = `main-link ${className}`;

	return (
		<>
			{isPathMatching ? (
				<span
					tabIndex="0" // not tab-focusable
					className={className}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<LinkWithPreload 
					className={className} 
					href={path}>
					{children}
				</LinkWithPreload>
			)}
		</>
	);
}

export default LinkScrollUp;
