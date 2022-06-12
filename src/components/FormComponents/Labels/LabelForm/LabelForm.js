import React from "react";
import styles from "./LabelForm.module.css";
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
			{required && <span className={styles.form_required}>*</span>}
			{children}
		</label>
	);
}

export default LabelForm;
