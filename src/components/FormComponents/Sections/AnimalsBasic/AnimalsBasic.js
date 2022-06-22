import React, { useState } from "react";
import sectionStyles from "../FormSections.module.css";
import formStyles from "../../FormComponents.module.css";

import LabelForm from "../../Labels/LabelForm/LabelForm";

// import PhoneInput from "react-phone-number-input/input";
import InputForm from "../../InputForm/InputForm";
import PhoneInputForm from "../../InputForm/PhoneInputForm";
import SelectForm from "components/FormComponents/SelectForm/SelectForm";
import Button from "components/Button/Button";

const DeleteButtonX = () => {
	return (
		<button
			style={{
				border: "none",
				borderRadius: "50%",
				backgroundColor: "lightGrey",
				width: "1rem",
				height: "1rem",
				cursor: "pointer",
			}}
		>
			X
		</button>
	);
};

const AnimalRow = () => {
	return (
		<div className={formStyles.field}>
			<SelectForm
				title="Type"
				name="animals.type"
				options={[
					{
						label: `Beef`,
						value: "beef",
					},
					{
						label: `Hog`,
						value: "hog",
					},
					{
						label: "Lamb",
						value: "lamb",
					},
					{
						label: `Other Animal`,
						value: `other`,
					},
				]}
			/>

			<InputForm
				title="Count"
				name="animals.count"
				number={{ min: 1, default: 1 }}
				small={true}
			/>

			<DeleteButtonX />
		</div>
	);
};

function AnimalsBasic() {
	const [animalTypeCount, setAnimalTypeCount] = useState(1);
	const handleIncrementAnimal = () => {
		setAnimalTypeCount(animalTypeCount + 1);
	};

	const [addedAnimalsArray, setAddedAnimalsArray] = useState([
		{ type: "beef", count: 1 },
	]);
	const handleAddAnimal = () => {
		setAddedAnimalsArray((previousAnimals) => [
			...previousAnimals,
			{ type: "beef", count: 1 },
		]);
	};

	const handleSetAnimalType = () => {
		
	};

	return (
		<>
			<div name="animals" className={`${sectionStyles.section}`}>
				<LabelForm required={true} title="Select Your Animals" />
				{addedAnimalsArray.map(({type, count}, index) => (
					<AnimalRow type={type} count={count} setAnimalType={handleSetAnimalType} key={index} />
				))}
				<Button onClick={handleAddAnimal}>Add Another Animal</Button>
			</div>
		</>
	);
}

export default AnimalsBasic;
