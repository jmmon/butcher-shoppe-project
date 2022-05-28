import React from "react";

function LabelForm({ title, htmlFor, required, small, children }) {
	return (
		<label
			htmlFor={htmlFor}
			className={`order-form--label${small ? "-small" : ""}`}
		>
			{title}
			{required && <span className="form-required">*</span>}
			{children}
		</label>
	);
}

export default LabelForm;
