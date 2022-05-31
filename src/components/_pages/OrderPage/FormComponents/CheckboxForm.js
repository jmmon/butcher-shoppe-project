import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const EachCheckbox = ({ animalInfo, name, label }) => {
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
				{...register(name)}
			/>
			<label htmlFor={name} key={name}>
				{label}
			</label>
		</React.Fragment>
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
			<p className={`order-form--checkbox-container`}>{allOptions}</p>
		</div>
	);
};

export default CheckboxForm;
