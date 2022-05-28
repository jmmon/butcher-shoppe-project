import React from "react";
import LabelForm from "./LabelForm";

function LabelInput({
	title,
	htmlFor,
	subtext,
	extra,
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
			{extra && (
				<>
					<span className="form-special-extra">
						*
						<br />* Additional Fee - See Price List
					</span>
				</>
			)}

			{subtext && <p className="order-form--label-subtext">{subtext}</p>}

			{children}
		</LabelForm>
	);
}

export default LabelInput;
