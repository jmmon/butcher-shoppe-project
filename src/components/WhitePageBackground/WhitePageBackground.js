import React from "react";
import "./WhitePageBackground.css";

function WhitePageBackground({ separate = false, className="", children }) {
	return (
		<section
			className={`panel-shadow--dark ${
				separate
					? "white-page-background separate"
					: "white-page-background "
			} ${className}`}
		>
			{children}
		</section>
	);
}

export default WhitePageBackground;
