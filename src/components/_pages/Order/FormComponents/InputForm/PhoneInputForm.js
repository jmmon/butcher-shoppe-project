import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input/input";

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
	//returns "animals.[type]_[#id].[name]"

	let thisError = errors;
	name.split(".").forEach((key) => (thisError = thisError?.[key]));

	return (
		<p
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
					{` (A valid phone number is required)`}
				</span>
			)}
			<Controller
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
			/>
		</p>
	);
};

export default InputForm;
