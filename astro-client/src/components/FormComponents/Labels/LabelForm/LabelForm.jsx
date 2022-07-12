// import React from "react";
import * as React from "preact";

import Styles from "./LabelForm.module.css";

function LabelForm({ title, htmlFor, required, small, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={`${Styles.label} ${small ? Styles.small : ""}`}
		>
			{title}
			{required && <span className={Styles.required}>*</span>}
			{children}
		</label>
	);
}

export default LabelForm;
