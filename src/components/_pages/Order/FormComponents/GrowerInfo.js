import React from "react";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";

function GrowerInfo({ animalInfo }) {
	return (
		<>
			<div className="order-form--field">
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

			<div className="order-form--field">
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

export default GrowerInfo;
