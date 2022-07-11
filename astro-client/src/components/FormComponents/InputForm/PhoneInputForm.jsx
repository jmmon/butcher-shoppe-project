import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput2 from "react-phone-input-2";

import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";

import styles from "./InputForm.module.css";
import formStyles from "../FormComponents.module.css";

const InputForm = ({
	title,
	subtitle,
	name,
	placeholder,
	small,
	animalInfo,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	let thisError = errors;
	name.split(".").forEach((key) => (thisError = thisError?.[key]));

	let validPhoneNumber = false;
	const validatePhoneNumber = (inputNumber, isDirty) => {
		if (!isDirty) {
			validPhoneNumber = false;
			return false;
		}
		if (inputNumber && inputNumber.length < 11) {
			validPhoneNumber = false;
			return false;
		}
		validPhoneNumber = true;
		return true;
	}

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
			/>

			{thisError && (
				<span role="alert" className={styles.validation_error}>
				{` (${thisError.message ? thisError.message : "Please input your phone number"})`}
				</span>
			)}

			<Controller
				name={name}
				control={control}
				rules={{ required: true,
					validate: () => validPhoneNumber || "A valid phone number is required"
				}}
				render={({ formState: {isDirty}, field: { onChange, value } }) => (
					<PhoneInput2
						value={value}
						onChange={onChange}
						country={'us'}
						placeholder={placeholder || title}
						isValid={(number) => validatePhoneNumber(number, isDirty)}
						specialLabel=""
						countryCodeEditable={false}
						disableDropdown={true}
						
						inputProps={{
							id: name,
							name,
							required: true,
							className: styles.input,
						}}
					/>
				)}
			/>
		</div>
	);
};

export default InputForm;
