import React from "react";
import InputLabel from "./InputLabel";
import { useFormContext } from "react-hook-form";

const Checkbox = ({ individual, animalInfo, name, label, handleSplitHalf }) => {
	const { register } = useFormContext();

	if (animalInfo) {
		const { id, type } = animalInfo;
		name = id ? `${id}_${name}` : name; // prepend animal number (id)
		name = type ? `${type}_${name}` : name; // prepend animalType
	}

	let contents = (
		<>
			<input
				className="order-form--checkbox"
				type="checkbox"
				id={name}
				name={name}
				onClick={handleSplitHalf ? (e) => handleSplitHalf(e) : null}
				{...register(name)}
			/>
			<label htmlFor={name}>{label}</label>
		</>
	);

	if (individual)
		return (
			<div className="order-form--checkbox-container" key={name}>
				{contents}
			</div>
		);

	return <React.Fragment key={name}>{contents}</React.Fragment>;
};

const CheckboxForm = ({
	children,
	name,
	subtext,
	extra,
	required,
	individual,
	options,
	animalInfo,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ name, label, handleSplitHalf }) => {
		return Checkbox({
			individual,
			animalInfo,
			name,
			label,
			handleSplitHalf,
		});
	});

	return (
		<div className="order-form--field">
			<InputLabel
				name={name}
				extra={extra}
				subtext={subtext}
				required={required}
			>
				{children}
			</InputLabel>
			<span className="form--validation-error">
				{" "}
				{errors?.[name] && `(${errors[name].message})`}
			</span>
			<div
				className={`order-form--checkbox${
					individual ? "-wrapper" : "-container"
				}`}
			>
				{allOptions}
			</div>
		</div>
	);
};

export default CheckboxForm;
