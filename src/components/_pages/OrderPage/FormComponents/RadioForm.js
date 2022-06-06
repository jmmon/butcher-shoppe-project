import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import getSplitAnimalInfo from "./utils/getSplitAnimalInfo";

const EachRadio = ({ name, animalInfo, inputId, label, handleSplitHalf }) => {
	const { register } = useFormContext();

	if (animalInfo) {
		name = getSplitAnimalInfo(name, animalInfo);
	}

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
				onClick={handleSplitHalf && ((e) => handleSplitHalf(e))}
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
	subtext,
	extra,
	required,
	options,
	animalInfo,
	handleSplitHalf,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ inputId, label }) => {
		return EachRadio({
			inputId,
			label,
			name,
			animalInfo,
			handleSplitHalf,
		});
	});

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				extra={extra}
				subtext={subtext}
				required={required}
			/>
			<div className={`order-form--radio-wrapper`}>{allOptions}</div>
		</div>
	);
};

export default RadioForm;
