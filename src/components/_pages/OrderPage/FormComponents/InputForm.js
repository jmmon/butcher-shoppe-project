import React from "react";
import LabelInput from "./LabelInput";
import { useFormContext } from "react-hook-form";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const InputForm = ({
	title,
	subtext,
	name,
	placeholder,
	required,
	small,
	textarea,
	animalInfo,
	number,
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

	const numberAttributes = number
		? {
				// value: number.value,
				min: number?.min || 0,
		  }
		: null;

	let thisError = errors;
	name.split(".").forEach((key) => (thisError = thisError?.[key]));

	return (
		<p
			className={`order-form--input-container${
				small ? " order-form--input-container-small" : ""
			}`}
		>
			<LabelInput
				name={name}
				small={small}
				title={title}
				subtext={subtext}
			/>

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
					type={number ? "number" : "text"}
					className="order-form--input"
					{...inputAttributes}
					area-invalid={errors?.[name]}
					{...numberAttributes}
				/>
			)}
		</p>
	);
};

export default InputForm;
