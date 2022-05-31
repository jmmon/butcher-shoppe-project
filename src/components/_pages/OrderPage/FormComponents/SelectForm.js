import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import splitAnimalInfo from "./utils/splitAnimalInfo";

function Option({ label, value }) {
	return (
		<option className="order-form--select-option" key={value}>
			{label}
		</option>
	);
}

function SelectForm({ title, name, subtext, extra, options, animalInfo }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	if (animalInfo) {
		name = splitAnimalInfo(name, animalInfo);
	}

	let allOptions = options.map(({ label, value }) => {
		return Option({ label, value });
	});

	return (
		<div className="order-form--field order-form--input-container-small order-form--input-container">
			<LabelInput
				name={name}
				extra={extra}
				subtext={subtext}
				title={title}
			/>{" "}
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
