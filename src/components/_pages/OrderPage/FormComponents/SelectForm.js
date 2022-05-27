import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import FormErrors from "./FormErrors";
import splitAnimalInfo from "./utils/splitAnimalInfo";

function Option({ label, value }) {
	return <option key={value}>{label}</option>;
}

function SelectForm({ children, name, subtext, extra, options, animalInfo }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	if (animalInfo) {
		name = splitAnimalInfo(name, animalInfo);
	}

	// if (animalInfo) {
	// 	const { id, animal } = animalInfo;
	// 	name = id ? `${id}_${name}` : name; // prepend animal number (id)
	// 	name = animal ? `${animal}_${name}` : name; // prepend animalType
	// }

	let allOptions = options.map(({ label, value }) => {
		return Option({ label, value });
	});

	return (
		<div className="order-form--field">
			<LabelInput
				name={name}
				extra={extra}
				subtext={subtext}
				title={children}
			/>
			<FormErrors name={name} />
			<select
				{...register(name)}
				name={name}
				id={name}
				className="order-form--select"
			>
				{allOptions}
			</select>
		</div>
	);
}

export default SelectForm;
