import React from "react";
import Styles from "./WhitePageBackground.module.css";

function WhitePageBackground({ separate = false, className = "", children }) {
	return (
		<section
			className={`flex-col-jcenter panel-shadow--dark ${className} ${Styles.container} ${
				separate && Styles.separate
			}`}
		>
			{children}
		</section>
	);
}

export default WhitePageBackground;