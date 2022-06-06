import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import getSplitAnimalInfo from "./utils/getSplitAnimalInfo";

function Option({ label, value }) {
	return (
		<option className="order-form--select-option" key={value} value={value}>
			{label}
		</option>
	);
}

function SelectForm({
	title,
	name,
	subtitle,
	extra,
	options,
	animalInfo,
	handleSelect,
}) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	if (animalInfo) {
		name = getSplitAnimalInfo(name, animalInfo);
	}

	let allOptions = options.map(({ label, value }) => {
		return Option({ label, value });
	});

	return (
		<p className="order-form--field order-form--input-container-small order-form--input-container">
			<LabelInput
				name={name}
				extra={extra}
				subtitle={subtitle}
				title={title}
			/>{" "}
			<select
				{...register(name)}
				name={name}
				id={name}
				className="order-form--select"
				onChange={handleSelect && ((e) => handleSelect(e))}
			>
				{allOptions}
			</select>
		</p>
	);
}

export default SelectForm;
