import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import getSplitAnimalInfo from "./utils/getSplitAnimalInfo";

const EachRadio = ({
	name,
	animalInfo,
	inputId,
	label,
	handleChangeOption,
}) => {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));
	// if (animalInfo) {
	// 	name = getSplitAnimalInfo(name, animalInfo);
	// }

	return (
		<label
			htmlFor={inputId}
			className="order-form--radio-container"
			key={inputId}
		>
			<input
				{...register(name)}
				className="order-form--radio"
				type="radio"
				id={inputId}
				name={name}
				onClick={handleChangeOption && ((e) => handleChangeOption(e))}
				value={inputId}
			/>
			{label}
		</label>
	);
};

/*
radios: names should be the same amongst the group
ids should be different, and match the label htmlFor
register the name on all inputs (registering the same name)
*/

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

	const allOptions = options.map(({ inputId, label }) =>
		EachRadio({
			inputId,
			label,
			name,
			animalInfo,
			handleChangeOption,
		})
	);

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				costsExtra={costsExtra}
				subtitle={subtitle}
				required={required}
			/>
			<div className={`order-form--radio-wrapper`}>{allOptions}</div>
		</div>
	);
};

export default RadioForm;
