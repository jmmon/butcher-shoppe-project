import React from "react";

function SelectForm({ label, name, options, register }) {
	//options == array of {value, text} objects
	options.map((option) => {
		return <option value={option.value}>{option.text}</option>;
	});
	return (
		<>
			<label>{label}</label>
			<select
				{...register(label)}
				name={name}
				className="order-form--label"
			>
				{options.map((option) => (
					<option value={option.value}>{option.text}</option>
				))}
			</select>
		</>
	);
}

export default SelectForm;
