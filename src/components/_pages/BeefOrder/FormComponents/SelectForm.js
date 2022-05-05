import React from "react";

function Option({ label, value }) {
	return <option key={value}>{label}</option>;
}

function SelectForm({ label, name, options, register }) {
	//options == array of {value, text} objects
	let allOptions = options.map((option) => {
		return Option({ label: option.label, value: option.value });
	});

	return (
		<div className="order-form--field">
			<label htmlFor={name} className="order-form--label">
				{label}
			</label>
			<select
				{...register(name)}
				name={name}
				id={name}
				className="order-form--select"
			>
				{allOptions}
			</select>
		</div>
	);
}

export default SelectForm;
