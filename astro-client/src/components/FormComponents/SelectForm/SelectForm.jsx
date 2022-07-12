// import React from "react";
import * as React from 'preact';
import { useFormContext } from "react-hook-form";
import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import Styles from "./SelectForm.module.css";

function Option({ label, value }) {
	return (
		<option
			className={Styles.option}
			key={value}
			value={value}
		>
			{label}
		</option>
	);
}

function SelectForm({
	title,
	name,
	subtitle = null,
	costsExtra = false,
	options,
	animalInfo,
	handleChangeOption = null,
}) {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	let allOptions = options
		? options.map(({ label, value }) => Option({ label, value }))
		: "Err: No options were provided for this select box";

	return (
		<div
			className={`flex-30-wrap input_container small`}
		>
			<LabelInput
				name={name}
				costsExtra={costsExtra}
				subtitle={subtitle}
				title={title}
			/>
			<select
				{...register(name)}
				name={name}
				id={name}
				className={Styles.select}
				onChange={handleChangeOption && ((e) => handleChangeOption(e))}
			>
				{allOptions}
			</select>
		</div>
	);
}

export default SelectForm;
