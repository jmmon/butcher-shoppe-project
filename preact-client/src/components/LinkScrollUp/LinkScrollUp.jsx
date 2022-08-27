import React from "react";
import { useLocation } from "wouter";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";
import LinksStyles from "assets/styles/Links.module.css";

export default function LinkScrollUp({ 
	className = '', 
	path, 
	underline,
	children 
}) {
	const [location, ] = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	const isPathMatching = location === path || path === undefined;

	const classes = `${LinksStyles.main_link} ${underline && LinksStyles.underline} ${className}`;

	return (
		<>
			{isPathMatching ? (
				<span
					tabIndex="0" // not tab-focusable
					className={classes}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
			) : (
				<LinkWithPreload 
					className={classes} 
					href={path}
				>
					{children}
				</LinkWithPreload>
			)}
		</>
	);
}