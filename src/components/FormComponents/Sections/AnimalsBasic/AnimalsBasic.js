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

const AnimalRow = ({ type, count, index }) => {
	const [thisAnimalType, setThisAnimalType] = useState();
	const handleSelectOther = (e) => {
		const value = e.target.value;
		setThisAnimalType(value);
	};
	return (
		<div className={formStyles.field}>
			<SelectForm
				title="Type"
				name={`animals.${index}.type`}
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
				handleChangeOption={handleSelectOther}
			/>

			{thisAnimalType === "other" ? (
				<div className={formStyles.field}>
					<InputForm
						title="Other Type"
						name={`animals.${index}.otherType`}
						required={true}
						small={true}
					/>
					<InputForm
						title="Count"
						name={`animals.${index}.count`}
						number={{ min: 1, default: 1 }}
						small={true}
					/>
				</div>
			) : (
				<InputForm
					title="Count"
					name={`animals.${index}.count`}
					number={{ min: 1, default: 1 }}
					small={true}
				/>
			)}

			<DeleteButtonX />
		</div>
	);
};

function AnimalsBasic() {
	const storageFormObjectOrEmptyObject =
		JSON.parse(window.localStorage.getItem("orderForm")) || {};

	const [addedAnimalsArray, setAddedAnimalsArray] = useState(
		storageFormObjectOrEmptyObject?.animals || [{ type: "beef", count: 1 }]
	);
	const handleAddAnimal = () => {
		setAddedAnimalsArray((previousAnimals) => [
			...previousAnimals,
			{ type: "beef", count: 1 },
		]);
	};

	return (
		<>
			<div name="animals" className={`${sectionStyles.section}`}>
				<LabelForm required={true} title="Select Your Animals" />
				{addedAnimalsArray.map(({ type, count }, index) => (
					<AnimalRow
						type={type}
						count={count}
						index={index}
						key={index}
					/>
				))}
				<Button onClick={handleAddAnimal}>Add Another Animal</Button>
			</div>
		</>
	);
}

export default AnimalsBasic;
