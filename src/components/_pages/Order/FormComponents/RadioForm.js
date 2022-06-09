import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import getSplitAnimalInfo from "./utils/getSplitAnimalInfo";

const EachRadio = ({ name, animalInfo, value, label, handleChangeOption }) => {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	return (
		<label
			htmlFor={value}
			className="order-form--radio-container"
			key={value}
		>
			<input
				{...register(name)}
				className="order-form--radio"
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
