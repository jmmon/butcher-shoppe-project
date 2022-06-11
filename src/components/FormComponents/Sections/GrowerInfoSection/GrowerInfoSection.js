import React from "react";
import formStyles from "../../FormComponents.module.css";

import LabelForm from "../../Labels/LabelForm/LabelForm";
import InputForm from "../../InputForm/InputForm";

function GrowerInfoSection({ animalInfo }) {
	return (
		<>
			<div className={formStyles.order_form__field}>
				<LabelForm title="Grower Name" />
				<InputForm
					title="First"
					name="info.grower.name.first"
					placeholder="First name"
					small={true}
					animalInfo={animalInfo}
				/>
				<InputForm
					title="Last"
					name="info.grower.name.last"
					placeholder="Last name"
					small={true}
					animalInfo={animalInfo}
				/>
			</div>

			<div className={formStyles.order_form__field}>
				<LabelForm title="Ear Tag Number (if applicable)" />
				<InputForm
					title="Ear Tag Number (if applicable)"
					name="info.grower.ear_tag_number"
					placeholder="Ear tag number"
					animalInfo={animalInfo}
				/>
			</div>
		</>
	);
}

export default GrowerInfoSection;
