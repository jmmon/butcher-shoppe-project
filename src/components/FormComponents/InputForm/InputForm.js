import React from "react";
import LabelInput from "../Labels/LabelInput/LabelInput";
import { useFormContext } from "react-hook-form";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import styles from "./InputForm.module.css";
import formStyles from "../FormComponents.module.css";

const InputForm = ({
	title,
	subtitle,
	name,
	placeholder,
	costsExtra,
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

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));
	//returns "animals.[type]_[#id].[name]"

	const inputAttributes = {
		name: name,
		id: name,
		placeholder: placeholder || title,
	};

	const numberAttributes = number
		? {
				min: number?.min || 0,
				defaultValue: number?.default || number?.min || 0
		  }
		: null;

	let thisError = errors;
	name.split(".").forEach((key) => (thisError = thisError?.[key]));

	return (
		<div
			className={`${formStyles.container} ${
				small ? formStyles.container_small : ""
			}`}
		>
			<LabelInput
				name={name}
				small={small}
				title={title}
				subtitle={subtitle}
				costsExtra={costsExtra}
			/>

			{thisError && (
				<span role="alert" className={styles.validation_error}>
					{` (${thisError.message})`}
				</span>
			)}

			{textarea ? (
				<textarea
					{...register(name)}
					className={styles.textarea}
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
					className={styles.input}
					area-invalid={errors?.[name]}
					{...inputAttributes}
					{...numberAttributes}
				/>
			)}
		</div>
	);
};

export default InputForm;
