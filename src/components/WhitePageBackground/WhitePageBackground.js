import React from "react";
import "./WhitePageBackground.css";

function WhitePageBackground(props) {
	return (
		<section className="white-page-background panel--shadow">
			{props.children}
		</section>
	);
}

export default WhitePageBackground;
