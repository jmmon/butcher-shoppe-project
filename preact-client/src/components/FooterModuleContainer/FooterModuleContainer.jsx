import React from "react";
import Styles from "./FooterModuleContainer.module.css";

export default function FooterModuleContainer({
	title,
	children
}) {
	return (
		<div className={Styles.container}>
			<h2 className={`text-center ${Styles.heading}`}>
				{title}
			</h2>
			{children}
		</div>
	);
}
