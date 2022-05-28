import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import FormErrors from "./FormErrors";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const EachCheckbox = ({ animalInfo, name, label }) => {
	const { register } = useFormContext();

	if (animalInfo) {
		name = splitAnimalInfo(name, animalInfo);
	}
	return (
		<label htmlFor={name} key={name}>
			<input
				className="order-form--checkbox"
				type="checkbox"
				id={name}
				name={name}
				{...register(name)}
			/>
			{label}
		</label>
	);
};

const CheckboxForm = ({ title, name, subtext, extra, options, animalInfo }) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ name, label }) => {
		return EachCheckbox({
			animalInfo,
			name,
			label,
		});
	});

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				name={name}
				extra={extra}
				subtext={subtext}
			/>

			<FormErrors name={name} />

			<div className={`order-form--checkbox-container`}>{allOptions}</div>
		</div>
	);
};

export default CheckboxForm;
