import React from "react";
import { useState } from "react";

import RadioForm from "../../../FormComponents/RadioForm";
import SelectForm from "../../../FormComponents/SelectForm";

function ShoulderChoices({ chosenChoicesArray, animalInfo }) {
	const newChosenChoicesArray = chosenChoicesArray.map(
		(selectedOptionString) => selectedOptionString.split(".").reverse()[0]
	);
	console.log({ newChosenChoicesArray });

	const [freshRoastsAndOrSteaks, setFreshRoastsAndOrSteaks] =
		useState("roasts");
	const [smokedRoastsAndOrSteaks, setSmokedRoastsAndOrSteaks] =
		useState("roasts");

	const handleChange_FreshRoastsAndOrSteaks = (e) => {
		const { name, value } = e.target;
		console.log({ name, value });
		setFreshRoastsAndOrSteaks(value);
	};
	const handleChange_SmokedRoastsAndOrSteaks = (e) => {
		const { name, value } = e.target;
		console.log({ name, value });
		setSmokedRoastsAndOrSteaks(value);
	};

	return (
		<>
			{newChosenChoicesArray.includes("fresh_pork") && (
				<>
					<SelectForm
						title="Fresh Pork Cut"
						name="shoulder.fresh_pork.choice"
						options={[
							{
								label: "All Fresh Shoulder Roasts",
								value: "all_roasts",
							},
							{
								label: "All Fresh Shoulder Steaks",
								value: "all_steaks",
							},
							{
								label: `Half Roasts and Half Steaks`,
								value: `half_roasts_half_steaks`,
							},
							{
								label: `Other (Specify in Special Instructions)`,
								value: `other`,
							},
						]}
						animalInfo={animalInfo}
						handleChangeOption={handleChange_FreshRoastsAndOrSteaks}
					/>
					{freshRoastsAndOrSteaks.includes("roasts") && (
						<div className="order-form--field">
							<SelectForm
								title="Fresh Pork Roast Size"
								subtitle="Roast size in pounds"
								name="shoulder.fresh_pork.roasts.roast_size"
								options={[
									{
										label: "#3-4 (We suggest #3-4 for a family of 2-4)",
										value: "#3-4",
									},
									{
										label: "#4-5",
										value: "#4-5",
									},
									{
										label: `#5-6`,
										value: `#5-6`,
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
						</div>
					)}
					{freshRoastsAndOrSteaks.includes("steaks") && (
						<div className="order-form--field">
							<SelectForm
								title="Steak Thickness"
								subtitle="Steak thickness in inches"
								name="shoulder.fresh_pork.steaks.steak_thickness"
								options={[
									{
										label: "3/4",
										value: "3/4",
									},
									{
										label: "1",
										value: "1",
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
							<SelectForm
								title="Steaks Per Package"
								name="shoulder.fresh_pork.steaks.steaks_per_package"
								options={[
									{
										label: "Two",
										value: "two",
									},
									{
										label: "Three",
										value: "three",
									},
									{
										label: "Four",
										value: "four",
									},
									{
										label: "Five",
										value: "five",
									},
									{
										label: "Six",
										value: "six",
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
						</div>
					)}
				</>
			)}

			{newChosenChoicesArray.includes("smoked_ham") && (
				<>
					<SelectForm
						title="Smoked Ham Cut (Picnic Ham)"
						name="shoulder.smoked_ham.choice"
						options={[
							{
								label: "All Picnic Roasts",
								value: "all_roasts",
							},
							{
								label: "All Picnic Steaks",
								value: "all_steaks",
							},
							{
								label: `Half Roasts and Half Steaks`,
								value: `half_roasts_half_steaks`,
							},
							{
								label: `Other (Specify in Special Instructions)`,
								value: `other`,
							},
						]}
						animalInfo={animalInfo}
						handleChangeOption={
							handleChange_SmokedRoastsAndOrSteaks
						}
					/>
					{smokedRoastsAndOrSteaks.includes("roasts") && (
						<div className="order-form--field">
							<SelectForm
								title="Smoked Ham Roast Size"
								subtitle="Roast size in pounds"
								name="shoulder.smoked_ham.roasts.roast_size"
								options={[
									{
										label: `3-4# (We suggest 3-4# for a family of 2-4)`,
										value: `3-4#`,
									},
									{
										label: `4-5#`,
										value: `4-5#`,
									},
									{
										label: `5-6#`,
										value: `5-6#`,
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
						</div>
					)}
					{smokedRoastsAndOrSteaks.includes("steaks") && (
						<div className="order-form--field">
							<SelectForm
								title="Steak Thickness"
								subtitle="Steak thickness in inches"
								name="shoulder.smoked_ham.steaks.steak_thickness"
								options={[
									{
										label: "3/4",
										value: "3/4",
									},
									{
										label: "1",
										value: "1",
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
							<SelectForm
								title="Steaks Per Package"
								name="shoulder.smoked_ham.steaks.steaks_per_package"
								options={[
									{
										label: "Two",
										value: "two",
									},
									{
										label: "Three",
										value: "three",
									},
									{
										label: "Four",
										value: "four",
									},
									{
										label: "Five",
										value: "five",
									},
									{
										label: "Six",
										value: "six",
									},
									{
										label: `Other (Specify in Special Instructions)`,
										value: `other`,
									},
								]}
								animalInfo={animalInfo}
							/>
						</div>
					)}
				</>
			)}

			{newChosenChoicesArray.includes("kansas_city_bacon") && (
				<>
					<div>
						Good choice! Your Kansas City Bacon will be packaged
						like your bacon / side pork.
					</div>
				</>
			)}

			{newChosenChoicesArray.includes("ground_pork") && (
				<>
					<RadioForm
						title="Ground Meat Options"
						subtitle="Comes wrapped in 1# packages"
						name="shoulder.ground_pork"
						options={[
							{
								label: "Breakfast Sausage (Seasoned)",
								value: "sausage",
							},
							{
								label: "Ground Pork (Unseasoned)",
								value: "ground_pork",
							},
						]}
						animalInfo={animalInfo}
					/>
				</>
			)}
		</>
	);
}

export default ShoulderChoices;
