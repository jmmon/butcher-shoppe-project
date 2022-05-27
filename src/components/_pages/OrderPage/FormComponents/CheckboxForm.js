import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import FormErrors from "./FormErrors";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const EachCheckbox = ({ animalInfo, name, label, handleSplitHalf }) => {
	const { register } = useFormContext();

	if (animalInfo) {
		name = splitAnimalInfo(name, animalInfo);
	}
	return (
		<React.Fragment key={name}>
			<input
				className="order-form--checkbox"
				type="checkbox"
				id={name}
				name={name}
				onClick={handleSplitHalf ? (e) => handleSplitHalf(e) : null}
				{...register(name)}
			/>
			<label htmlFor={name}>{label}</label>
		</React.Fragment>
	);
};

const CheckboxForm = ({
	title,
	name,
	subtext,
	extra,
	required,
	options,
	animalInfo,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ name, label, handleSplitHalf }) => {
		return EachCheckbox({
			animalInfo,
			name,
			label,
			handleSplitHalf,
		});
	});

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				name={name}
				extra={extra}
				subtext={subtext}
				required={required}
			/>
			<FormErrors name={name} />
			<div className={`order-form--checkbox-container`}>{allOptions}</div>
		</div>
	);
};

export default CheckboxForm;
