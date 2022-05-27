import React from "react";
import InputLabel from "./InputLabel";
import { useFormContext } from "react-hook-form";

function Option({ label, value }) {
	return <option key={value}>{label}</option>;
}

function SelectForm({ children, name, subtext, extra, options, animalInfo }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	if (animalInfo) {
		const { id, type } = animalInfo;
		name = id ? `${id}_${name}` : name; // prepend animal number (id)
		name = type ? `${type}_${name}` : name; // prepend animalType
	}

	let allOptions = options.map(({ label, value }) => {
		return Option({ label, value });
	});

	return (
		<div className="order-form--field">
			<InputLabel name={name} extra={extra} subtext={subtext}>
				{children}
			</InputLabel>
			<span className="form--validation-error">
				{" "}
				{errors?.[name] && `(${errors[name].message})`}
			</span>
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
