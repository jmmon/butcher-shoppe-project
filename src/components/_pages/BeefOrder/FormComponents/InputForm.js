import React from "react";
import InputLabel from "./InputLabel";
import { useFormContext } from "react-hook-form";

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
		const { id, type } = animalInfo;
		name = id ? `${id}_${name}` : name; // prepend animal number (id)
		name = type ? `${type}_${name}` : name; // prepend animalType
	}

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
			<InputLabel name={name} small={small}>
				{children}
			</InputLabel>
			<span className="form--validation-error">
				{" "}
				{errors?.[name] && `(${errors[name].message})`}
			</span>
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
