import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import getSplitAnimalInfo from "./utils/getSplitAnimalInfo";

const EachCheckbox = ({ animalInfo, name, label, handleChooseOption }) => {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	// if (animalInfo) {
	// 	name = getSplitAnimalInfo(name, animalInfo);
	// }

	return (
		<React.Fragment key={name}>
			<input
				className="order-form--checkbox"
				type="checkbox"
				id={name}
				name={name}
				value={name}
				onClick={handleChooseOption && ((e) => handleChooseOption(e))}
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
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ name, label }) =>
		EachCheckbox({
			animalInfo,
			name,
			label,
			handleChooseOption,
		})
	);

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				name={name}
				costsExtra={costsExtra}
				subtitle={subtitle}
			/>
			<p className="order-form--checkbox-container">{allOptions}</p>
		</div>
	);
};

export default CheckboxForm;
