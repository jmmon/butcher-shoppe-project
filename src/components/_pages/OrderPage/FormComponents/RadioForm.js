import React from "react";
import { useFormContext } from "react-hook-form";
import LabelInput from "./LabelInput";
import FormErrors from "./FormErrors";
import splitAnimalInfo from "./utils/splitAnimalInfo";

const EachRadio = ({ name, animalInfo, inputId, label, handleSplitHalf }) => {
	const { register } = useFormContext();

	if (animalInfo) {
		name = splitAnimalInfo(name, animalInfo);
	}

	return (
		<div className="order-form--checkbox-container" key={inputId}>
			<input
				{...register(name)}
				className="order-form--checkbox"
				type="radio"
				id={inputId}
				name={name}
				onClick={handleSplitHalf ? (e) => handleSplitHalf(e) : null}
				value={inputId}
			/>
			<label htmlFor={inputId}>{label}</label>
		</div>
	);

	// return <React.Fragment key={name}>{contents}</React.Fragment>;
};

/*
radios: names should be the same amongst the group
ids should be different, and match the label htmlFor
register the name on all inputs (registering the same name)
*/

const RadioForm = ({
	title,
	name,
	subtext,
	extra,
	required,
	options,
	animalInfo,
	handleSplitHalf,
}) => {
	const {
		formState: { errors },
	} = useFormContext();

	const allOptions = options.map(({ inputId, label }) => {
		return EachRadio({
			inputId,
			label,
			name,
			animalInfo,
			handleSplitHalf,
		});
	});

	return (
		<div className="order-form--field">
			<LabelInput
				title={title}
				extra={extra}
				subtext={subtext}
				required={required}
			/>

			<FormErrors name={name} />

			<div className={`order-form--checkbox-wrapper`}>{allOptions}</div>
		</div>
	);
};

export default RadioForm;

/* 
<div className="order-form--field">


	<label
		htmlFor="beef-amount"
		className="order-form--label"
	>
		Choose One
		<span className="form-required">
			*
		</span>
	</label>



	<div className="order-form--checkbox-wrapper">


		<div className="order-form--checkbox-container">
			<input
				className="order-form--checkbox"
				type="checkbox"
				id="beef_whole__radio"
				name="beef-amount"
			/>
			<label htmlFor="beef_whole__radio">
				WHOLE BEEF
			</label>
		</div>



		<div className="order-form--checkbox-container">
			<input
				className="order-form--checkbox"
				type="checkbox"
				id="beef_half__radio"
				name="beef-amount"
			/>
			<label htmlFor="beef_half__radio">
				HALF BEEF
			</label>
		</div>



		<div className="order-form--checkbox-container">
			<input
				className="order-form--checkbox"
				type="checkbox"
				id="hind_quarter__radio"
				name="beef-amount"
			/>
			<label htmlFor="hind_quarter__radio">
				HIND QUARTER
			</label>
		</div>



		<div className="order-form--checkbox-container">
			<input
				className="order-form--checkbox"
				type="checkbox"
				id="front_quarter__radio"
				name="beef-amount"
			/>
			<label htmlFor="front_quarter__radio">
				FRONT QUARTER
			</label>
		</div>



		<div className="order-form--checkbox-container">
			<input
				className="order-form--checkbox"
				type="checkbox"
				id="split_half__radio"
				name="beef-amount"
				value={split}
				// checked={split}
				onChange={handleSplit}
			/>
			<label htmlFor="split_half__radio">
				SPLIT HALF *Additional
				fee-See price list
			</label>
		</div>


	</div> END wrapper

</div>
*/
