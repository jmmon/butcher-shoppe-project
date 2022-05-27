import React from "react";
import LabelForm from "./LabelForm";

function LabelInput({ title, htmlFor, subtext, extra, small, required }) {
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
		</LabelForm>
	);
}

export default LabelInput;

/*
<InputLabel name="first_name" subtext="Enter your first name" extra={false} small={true} required={required}>
		First Name
	</InputLabel>


	new:
	<InputLabel title="First Name" 		name="first_name" subtext="Enter your first name" extra={false} small={true} required={required}>
		
	</InputLabel>

*/
