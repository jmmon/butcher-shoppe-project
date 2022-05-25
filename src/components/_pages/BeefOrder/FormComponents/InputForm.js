import React from "react";

const InputForm = ({
	label,
	name,
	placeholder,
	register,
	required,
	small,
	errors,
	textarea,
	setValue,
}) => {
	return (
		<div
			className={
				small
					? "order-form--input-container order-form--input-container-small"
					: "order-form--input-container"
			}
		>
			<label
				htmlFor={name}
				className={
					small ? "order-form--label-small" : "order-form--label"
				}
			>
				{label}
			</label>
			<span className="form--validation-error">
				{" "}
				{errors?.[name] && `(${errors[name].message})`}
			</span>
			{textarea ? (
				<textarea
					onChange={(e) => setValue(name, e.target.value)}
					// {...register(name)}
					name={name}
					id={name}
					className="order-form--textarea"
					placeholder={placeholder || ""}
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
					name={name}
					id={name}
					className="order-form--input"
					type="text"
					placeholder={placeholder || label}
				/>
			)}
		</div>
	);
};

export default InputForm;
