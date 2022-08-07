import React from "react";
import Styles from "./OrderFormSectionSubheading.module.css";

function OrderFormSectionSubheading({ children }) {
	return (
		<div className={Styles.container}>
			<ul className={`text-center ${Styles.subheading}`}>
				<li>{children}</li>
			</ul>
			<hr />
		</div>
	);
}

export default OrderFormSectionSubheading;
