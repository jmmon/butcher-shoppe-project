// import React from "react";
import * as React from 'preact';

import { useFormContext } from "react-hook-form";
import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import Styles from "./CheckboxForm.module.css";
import formStyles from "../FormComponents.module.css";

const EachCheckbox = ({
	label,
	name,
	parentName,
	animalInfo,
	handleChooseOption,
	previousCheckedOptionsArray,
}) => {
	const { register } = useFormContext();

	name = `${parentName}.${name}`;

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	return (
		<React.Fragment key={name}>
			<input
				className={Styles.checkbox}
				type="checkbox"
				id={name}
				name={name}
				onClick={handleChooseOption && ((e) => handleChooseOption(e))}
				checked={
					previousCheckedOptionsArray &&
					previousCheckedOptionsArray.includes(name)
				}
				{...register(name)}
			/>
			<label htmlFor={name} key={name}>
				{label}
			</label>
		</React.Fragment>
	);
};

const CheckboxForm = ({
	title,
	name,
	subtitle,
	costsExtra,
	options,
	animalInfo,
	handleChooseOption,
	previousCheckedOptionsArray,
}) => {
	const {
		formState: { errors },
	} = useFormContext();
	const parentName = name;

	const allOptions = options
		? options.map(({ label, name }) =>
				EachCheckbox({
					label,
					name,
					parentName,
					animalInfo,
					handleChooseOption,
					previousCheckedOptionsArray,
				})
		  )
		: "Err: No options were provided!";

	return (
		<div className={formStyles.field}>
			<LabelInput
				title={title}
				name={name}
				costsExtra={costsExtra}
				subtitle={subtitle}
			/>
			<p className={Styles.container}>
				{allOptions}
			</p>
		</div>
	);
};

export default CheckboxForm;
