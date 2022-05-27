import React from "react";

function FormLabel({ required, children }) {
	return (
		<label className="order-form--label">
			{children}
			{required && <span className="form-required">*</span>}
		</label>
	);
}

export default FormLabel;
