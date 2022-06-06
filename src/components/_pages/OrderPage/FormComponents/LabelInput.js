import React from "react";
import LabelForm from "./LabelForm";

function LabelInput({
	title,
	htmlFor,
	subtitle,
	costsExtra,
	small,
	required,
	children,
}) {
	return (
		<LabelForm
			title={title}
			htmlFor={htmlFor}
			required={required}
			small={small}
		>
			{costsExtra && (
				<>
					{" "}
					<span className="form-special-extra">
						*
						<br />* Additional Fee - See Price List
					</span>
				</>
			)}

			{subtitle && (
				<>
					<br />
					<span className="order-form--label-subtext">
						{subtitle}
					</span>
				</>
			)}

			{children}
		</LabelForm>
	);
}

export default LabelInput;
