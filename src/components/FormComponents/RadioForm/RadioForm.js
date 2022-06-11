import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "../Labels/LabelInput/LabelInput";
import getSplitAnimalInfo from "../utils/getSplitAnimalInfo";
import styles from "./RadioForm.module.css";
import formStyles from "../FormComponents.module.css";

const EachRadio = ({ name, animalInfo, value, label, handleChangeOption }) => {
	const { register } = useFormContext();

	animalInfo && (name = getSplitAnimalInfo(name, animalInfo));

	return (
		<label
			htmlFor={value}
			className={styles.order_form__radio_container}
			key={value}
		>
			<input
				{...register(name)}
				className={styles.order_form__radio}
				type="radio"
				id={value}
				name={name}
				onClick={handleChangeOption && ((e) => handleChangeOption(e))}
				value={value}
			/>
			{label}
		</label>
	);
};

const RadioForm = ({
	title,
	name,
	subtitle,
	costsExtra,
	required,
	options,
	animalInfo,
	handleChangeOption,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ value, label }) =>
		EachRadio({
			value,
			label,
			name,
			animalInfo,
			handleChangeOption,
		})
	);

	return (
		<div className={formStyles.order_form__field}>
			<LabelInput
				title={title}
				costsExtra={costsExtra}
				subtitle={subtitle}
				required={required}
			/>
			<div className={styles.order_form__radio_wrapper}>{allOptions}</div>
		</div>
	);
};

export default RadioForm;
