// import React from "react";
import * as React from 'preact';

import { useFormContext } from "react-hook-form";
import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import Styles from "./RadioForm.module.css";
import formStyles from "../FormComponents.module.css";

const EachRadio = ({ name, animalInfo, value, label, handleChangeOption }) => {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	return (
		<label
			htmlFor={value}
			className={Styles.container}
			key={value}
		>
			<input
				{...register(name)}
				className={Styles.radio}
				type="radio"
				id={value}
				name={name}
				onClick={handleChangeOption && ((e) => handleChangeOption(e))}
				value={value}
			/>
			{label}
		</label>
	);
};

const RadioForm = ({
	title,
	name,
	subtitle,
	costsExtra,
	required,
	options,
	animalInfo,
	handleChangeOption,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ value, label }) =>
		EachRadio({
			value,
			label,
			name,
			animalInfo,
			handleChangeOption,
		})
	);

	return (
		<div className={formStyles.field}>
			<LabelInput
				title={title}
				costsExtra={costsExtra}
				subtitle={subtitle}
				required={required}
			/>
			<div className={Styles.wrapper}>{allOptions}</div>
		</div>
	);
};

export default RadioForm;
