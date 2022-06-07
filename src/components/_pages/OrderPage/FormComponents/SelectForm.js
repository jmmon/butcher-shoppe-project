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
	costsExtra,
	options,
	animalInfo,
	handleChangeOption,
}) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));
	// if (animalInfo) {
	// 	name = getSplitAnimalInfo(name, animalInfo);
	// }

	let allOptions = options
		? options.map(({ label, value }) => Option({ label, value }))
		: "Err: No options were provided for this select box";

	return (
		<p className="order-form--field order-form--input-container-small order-form--input-container">
			<LabelInput
				name={name}
				costsExtra={costsExtra}
				subtitle={subtitle}
				title={title}
			/>{" "}
			<select
				{...register(name)}
				name={name}
				id={name}
				className="order-form--select"
				onChange={handleChangeOption && ((e) => handleChangeOption(e))}
			>
				{allOptions}
			</select>
		</p>
	);
}

export default SelectForm;
