import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import styles from "./SelectForm.module.css";
import formStyles from "../FormComponents.module.css";

function Option({ label, value }) {
	return (
		<option
			className={styles.order_form__select_option}
			key={value}
			value={value}
		>
			{label}
		</option>
	);
}

export default function SelectForm({
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
			className={`${formStyles.field} ${formStyles.container} ${formStyles.container_small}`}
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
				className={styles.order_form__select}
				onChange={handleChangeOption && ((e) => handleChangeOption(e))}
			>
				{allOptions}
			</select>
		</div>
	);
}