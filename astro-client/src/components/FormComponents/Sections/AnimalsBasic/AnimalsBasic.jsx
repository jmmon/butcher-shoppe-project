// import React, { useState } from "react";
import * as React from 'preact';

import sectionStyles from "../FormSections.module.css";
import formStyles from "../../FormComponents.module.css";

import LabelForm from "../../Labels/LabelForm/LabelForm";

import InputForm from "../../InputForm/InputForm";
import SelectForm from "../../../FormComponents/SelectForm/SelectForm";
import Button from "../../../Button/Button";
import SectionContainer from "../../../SectionContainer/SectionContainer";

const DeleteButtonX = ({ onClick }) => {
	return (
		<button
			style={{
				border: "none",
				borderRadius: "50%",
				backgroundColor: "lightGrey",
				width: "1rem",
				height: "1rem",
				cursor: "pointer",
				marginTop: "1.6rem",
			}}
			onClick={onClick}
		>
			X
		</button>
	);
};

const AnimalRow = ({ type, count, index, handleDelete }) => {
	const [thisAnimalType, setThisAnimalType] = useState();

	const handleSelectOther = (e) => {
		const value = e.target.value;
		setThisAnimalType(value);
	};

	return (
		<div className={formStyles.animals_basic_field}>
			<DeleteButtonX onClick={() => handleDelete(index)} />
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
			</div>

			{thisAnimalType === "other" ? (
				<>
					<div className={formStyles.field}>
						<InputForm
							title="Animal Type"
							placeholder="Other animal type"
							name={`animals.${index}.otherType`}
							required={true}
						/>
					</div>
					<div className={formStyles.field}>
						<InputForm
							title="Count"
							name={`animals.${index}.count`}
							number={{ min: 1, default: 1 }}
						/>
					</div>
				</>
			) : (
				<div className={formStyles.field}>
					<InputForm
						title="Count"
						name={`animals.${index}.count`}
						number={{ min: 1, default: 1 }}
					/>
				</div>
			)}
		</div>
	);
};

function AnimalsBasic() {
	// const storageFormObjectOrEmptyObject =
	// 	JSON.parse(window.localStorage.getItem("orderForm")) || {};

	// const [addedAnimalsArray, setAddedAnimalsArray] = useState(
	// 	storageFormObjectOrEmptyObject?.animals || [{ type: "beef", count: 1 }]
	// );

	const [addedAnimalsArray, setAddedAnimalsArray] = useState([
		{ type: "beef", count: 1 },
	]);

	const handleAddAnimal = (e) => {
		e.preventDefault();
		console.log(e);
		console.log("add animal");
		setAddedAnimalsArray((previousAnimals) => [
			...previousAnimals,
			{ type: "beef", count: 1 },
		]);
	};

	const handleDeleteAnimal = (index) => {
		console.log(addedAnimalsArray);
		if (index > 0) {
			let newAnimals = [...addedAnimalsArray];
			newAnimals.splice(index, 1);
			setAddedAnimalsArray(newAnimals);
		}
	};

	return (
		<SectionContainer title="Animal Info">
			<div name="animals" className={`${sectionStyles.section}`}>
				<LabelForm title="Select Your Animals" />
				{addedAnimalsArray.map(({ type, count }, index) => (
					<AnimalRow
						type={type}
						count={count}
						index={index}
						key={index}
						handleDelete={handleDeleteAnimal}
					/>
				))}
				<div className="flex-jcenter-acenter padding-2--vertical">
					<Button className={`btn--large btn--wide btn--outline`} onClick={handleAddAnimal}>Add Another Animal</Button>
				</div>
			</div></SectionContainer>
	);
}

export default AnimalsBasic;
