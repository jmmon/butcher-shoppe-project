// //import React from "react";

export default function BackToTopButton({className, children}) {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	}
	return (
		<span
				tabIndex="0"
					className={`dark-link ${className}`}
					onClick={() => scrollToTop()}
				>
					{children}
				</span>
	)
}