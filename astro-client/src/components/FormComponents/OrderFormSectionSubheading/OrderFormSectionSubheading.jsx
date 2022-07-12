// import React from "react";
import * as React from 'preact';

import Styles from "./OrderFormSectionSubheading.module.css";

function OrderFormSectionSubheading({ children }) {
	return (
		<div className={Styles.container}>
			<ul className={Styles.subheading}>
				<li>{children}</li>
			</ul>
			<hr />
		</div>
	);
}

export default OrderFormSectionSubheading;
