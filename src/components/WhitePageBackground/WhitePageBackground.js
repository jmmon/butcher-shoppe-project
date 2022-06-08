import React from "react";
import "./WhitePageBackground.css";

function WhitePageBackground({ separate = false, children }) {
	return (
		<section
			className={`panel-shadow--dark ${
				separate
					? "white-page-background separate"
					: "white-page-background "
			}`}
		>
			{children}
		</section>
	);
}

export default WhitePageBackground;
