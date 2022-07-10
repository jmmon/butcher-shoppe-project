// //import React from "react";
import styles from "./WhitePageBackground.module.css";

function WhitePageBackground({ separate = false, className = "", children }) {
	return (
		<section
			className={`flex-col-jcenter panel-shadow--dark ${className} ${styles.container} ${
				separate && styles.separate
			}`}
		>
			{children}
		</section>
	);
}

export default WhitePageBackground;
