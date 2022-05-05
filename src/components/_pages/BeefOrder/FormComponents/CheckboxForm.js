import React from "react";

const CheckboxForm = ({
	label,
	name,
	type,
	placeholder,
	register,
	required,
	small,
}) => (
	<div
		className={
			small
				? "order-form--input-container order-form--input--small"
				: "order-form--input-container"
		}
	>
		<label
			htmlFor={name}
			className={small ? "order-form--label-small" : "order-form--label"}
		>
			{label}
		</label>
		<input
			name={name}
			id={name}
			className="order-form--input"
			type="checkbox"
			placeholder={placeholder}
			{...register(name, { required })}
		/>
	</div>
);

export default CheckboxForm;
