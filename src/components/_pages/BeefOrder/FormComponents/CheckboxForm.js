import React from "react";

const Checkbox = ({ name, value, onClick = null, register }) => {
	return (
		<React.Fragment key={name}>
			<input
				className="order-form--checkbox"
				type="checkbox"
				id={name}
				name={name}
				onClick={onClick}
				{...register(name)}
			/>
			<label htmlFor={name}>{value}</label>
		</React.Fragment>
	);
};

const CheckboxForm = ({
	label,
	fieldName,
	subtext,
	extra,
	register,
	options,
	errors,
}) => {
	const allOptions = options.map(({ name, value, onClick }) => {
		return Checkbox({ name, value, onClick, register });
	});

	return (
		<div className="order-form--field">
			<label htmlFor={fieldName} className="order-form--label">
				{label}
				{extra && (
					<>
						<span className="form-special-extra">
							*
							<br />* Additional Fee - See Price List
						</span>
					</>
				)}
				{subtext && (
					<p className="order-form--label-subtext">{subtext}</p>
				)}
			</label>
			<span className="form--validation-error">
				{" "}
				{errors?.[fieldName] && `(${errors[fieldName].message})`}
			</span>
			<div className="order-form--checkbox-container">
				{allOptions}

				{/* <div
					className={
						small
							? "order-form--input-container order-form--input--small"
							: "order-form--input-container"
					}
				>
					<label
						htmlFor={name}
						className={small ? "order-form--label-small" : "order-form--label"}
					>
						{label}
					</label>
					<input
						name={name}
						id={name}
						className="order-form--input"
						type="checkbox"
						{...register(name, { required })}
					/>
				</div> */}
			</div>
		</div>
	);
};

export default CheckboxForm;

/*

<div className="order-form--field">
	<OrderFormLabelAndSubtext
		name="remove_bone_dust__checkbox"
		text="Remove Bone Dust"
		subtext="Bone dust is a residue left
							from bone and fat when meat is
							run through the saw [like saw
							dust], it has no effect on the
							meat other than looks"
		extra
	/>
	<div className="order-form--checkbox-container">
		<input
			className="order-form--checkbox"
			type="checkbox"
			id="remove_bone_dust__checkbox"
			name="remove_bone_dust__checkbox"
		/>
		<label htmlFor="remove_bone_dust__checkbox">
			YES Remove Bone Dust
		</label>
	</div>
</div>




<div className="order-form--field">
	<label
		htmlFor="beef-extras"
		className="order-form--label"
	>
		EXTRAS
	</label>

	<div className="order-form--checkbox-container">
		<input
			className="order-form--checkbox"
			type="checkbox"
			id="extras_liver__checkbox"
			name="extras_liver__checkbox"
		/>
		<label htmlFor="extras_liver__checkbox">
			LIVER
		</label>

		<input
			className="order-form--checkbox"
			type="checkbox"
			id="extras_heart__checkbox"
			name="extras_heart__checkbox"
		/>
		<label htmlFor="extras_heart__checkbox">
			HEART
		</label>

		<input
			className="order-form--checkbox"
			type="checkbox"
			id="extras_tongue__checkbox"
			name="extras_tongue__checkbox"
		/>
		<label htmlFor="extras_tongue__checkbox">
			TONGUE
		</label>

		<input
			className="order-form--checkbox"
			type="checkbox"
			id="extras_oxtail__checkbox"
			name="extras_oxtail__checkbox"
		/>
		<label htmlFor="extras_oxtail__checkbox">
			OXTAIL
		</label>
	</div>
</div>

*/
