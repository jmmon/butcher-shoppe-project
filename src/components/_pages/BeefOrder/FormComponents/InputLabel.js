import React from "react";

function InputLabel({ name, subtext, extra, small, required, children }) {
	return (
		<>
			<label
				htmlFor={name}
				className={`order-form--label${small ? "-small" : ""}`}
			>
				{children}
				{required && <span className="form-required">*</span>}
				{extra && (
					<>
						<span className="form-special-extra">
							*
							<br />* Additional Fee - See Price List
						</span>
					</>
				)}
				{subtext && (
					<p className="order-form--label-subtext">{subtext}</p>
				)}
			</label>
		</>
	);
}

export default InputLabel;
