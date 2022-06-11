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
			className={`${formStyles.order_form__input_container} ${
				small ? formStyles.order_form__input_container_small : ""
			}`}
		>
			<LabelInput
				name={name}
				small={small}
				title={title}
				subtitle={subtitle}
			/>

			{thisError && (
				<span role="alert" className={styles.form__validation_error}>
				{` (${thisError.message})`}
				</span>
			)}
			{/* <Controller
				name={name}
				control={control}
				rules={{
					validate: (value) => isValidPhoneNumber(value),
				}}
				render={({ field: { onChange, value } }) => (
					<PhoneInput
						value={value}
						onChange={onChange}
						defaultCountry="US"
						name={name}
						id={name}
						className={styles.order_form__input}
						area-invalid={errors?.[name]}
						placeholder={placeholder || title}
					/>
				)}
			/> */}
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
						// className={styles.order_form__input}
						placeholder={placeholder || title}
						isValid={(number) => validatePhoneNumber(number, isDirty)}
						specialLabel=""
						countryCodeEditable={false}
						disableDropdown={true}
						
						inputProps={{
							id: name,
							name,
							required: true,
							["aria-invalid"]: errors?.[name],
							className: styles.order_form__input,
						}}
					/>
				)}
			/>



			{/* <Controller
				name={name}
				control={control}
				render={(props) => (
					<PhoneInput2
						onChange={(e) => {
							trigger();
							props.field.onChange(e);
						}}
						inputProps={{
							id: name,
							name,
							required: true,
							["aria-invalid"]: errors?.[name]
						}}
						country={'us'}
						value={props.field.value}
						isValid={(inputNumber, country) => {
							// const phoneLength = Math.ceil((countries.filter(val => val.dialCode === country.dialCode)[0])?.format.length / 2);
							return validatePhoneNumber(
								inputNumber, 
								country, 
								props.formState.isDirty, 
								// phoneLength 
								);
						}}

						placeholder={placeholder || title}
						className={styles.order_form__input}
						prefix=""
						specialLabel=""
						countryCodeEditable={false}
						// inputRef={register}
					/>
				)}
				rules={{ required: true, validate: () => validPhoneNumber || 'Please enter a valid phone number' }}
			/> */}
		</div>
	);
};

export default InputForm;
