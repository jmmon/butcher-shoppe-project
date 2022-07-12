// import React from "react";
import * as React from 'preact';

import Styles from "../Labels.module.css";

function LabelForm({ title, htmlFor, required, small, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={
				small
					? Styles.label_small
					: Styles.label
			}
		>
			{title}
			{required && <span className={Styles.required}>*</span>}
			{children}
		</label>
	);
}

export default LabelForm;
