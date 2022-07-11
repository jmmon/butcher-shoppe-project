// import React from "react";
import * as React from 'preact';

import labelStyles from "../Labels.module.css";

function LabelForm({ title, htmlFor, required, small, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={
				small
					? labelStyles.label_small
					: labelStyles.label
			}
		>
			{title}
			{required && <span className={labelStyles.form_required}>*</span>}
			{children}
		</label>
	);
}

export default LabelForm;
