// import React from "react";
import * as React from 'preact';

import styles from "./OrderFormSectionSubheading.module.css";

function OrderFormSectionSubheading({ children }) {
	return (
		<div className={styles.order_form__section__subheading_container}>
			<ul className={styles.order_form__section__subheading}>
				<li>{children}</li>
			</ul>
			<hr />
		</div>
	);
}

export default OrderFormSectionSubheading;
