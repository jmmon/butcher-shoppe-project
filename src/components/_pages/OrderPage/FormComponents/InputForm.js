import React from "react";
import LabelInput from "./LabelInput";
import { useFormContext } from "react-hook-form";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const InputForm = ({
	title,
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

	const inputAttributes = {
		name: name,
		id: name,
		placeholder: placeholder || title,
	};

	let thisError = errors;
	name.split(".").forEach((key) => (thisError = thisError?.[key]));

	return (
		<p
			className={`order-form--input-container${
				small ? " order-form--input-container-small" : ""
			}`}
		>
			<LabelInput name={name} small={small} title={title} />

			{thisError && (
				<span role="alert" className="form--validation-error">
					{` (${thisError.message})`}
				</span>
			)}

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
					area-invalid={errors?.[name]}
				/>
			)}
		</p>
	);
};

export default InputForm;
