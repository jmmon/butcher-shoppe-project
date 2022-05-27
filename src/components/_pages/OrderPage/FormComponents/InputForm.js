import React from "react";
import LabelInput from "./LabelInput";
import { useFormContext } from "react-hook-form";
import FormErrors from "./FormErrors";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const InputForm = ({
	children,
	name,
	placeholder,
	required,
	small,
	textarea,
	animalInfo,
}) => {
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

	const inputAttributes = {
		name: name,
		id: name,
		placeholder: placeholder || children,
	};

	return (
		<div
			className={`order-form--input-container${
				small ? " order-form--input-container-small" : ""
			}`}
		>
			<LabelInput name={name} small={small} title={children} />
			<FormErrors name={name} />
			{textarea ? (
				<textarea
					{...register(name)}
					className="order-form--textarea"
					{...inputAttributes}
				/>
			) : (
				<input
					{...register(
						name,
						required && {
							required: required.required,
							pattern: required.pattern,
						}
					)}
					type="text"
					className="order-form--input"
					{...inputAttributes}
				/>
			)}
		</div>
	);
};

export default InputForm;
