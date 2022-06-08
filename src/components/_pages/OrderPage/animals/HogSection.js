// import  from "react";
import React, { useState, useEffect } from "react";
import Collapsible from "react-collapsible";
import ConfirmButton from "../../../Button/ConfirmButton";
import CheckboxForm from "../FormComponents/CheckboxForm";
import InputForm from "../FormComponents/InputForm";
import LabelForm from "../FormComponents/LabelForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading";
import RadioForm from "../FormComponents/RadioForm";
import SelectForm from "../FormComponents/SelectForm";
import getSplitAnimalInfo from "../FormComponents/utils/getSplitAnimalInfo";

// import useFormPersist from "react-hook-form-persist";
import { useFormContext } from "react-hook-form";
import ShoulderChoices from "./HogSection/ShoulderChoices/ShoulderChoices";

const animal = "hog";

function HogSection({ id, deleteAnimal }) {
	id = +id;
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}`;

	const { setValue } = useFormContext();

	const storageFormObjectOrEmptyObject = JSON.parse(
		window.localStorage.getItem("orderForm") || "{}"
	);

	console.log(
		"localStorage parsed object (or empty object):",
		storageFormObjectOrEmptyObject
	);

	const [wholeHog, setWholeHog] = useState(
		storageFormObjectOrEmptyObject?.animals?.[stringId]?.["info"]?.[
			"hog_amount"
		] === "whole_hog" || undefined
	);

	const [saveTwoShoulderChoices, setSaveTwoShoulderChoices] = useState(
		// get previous object and turn it into an array OR use empty array
		storageFormObjectOrEmptyObject?.animals?.[stringId]?.["shoulder"]?.[
			"choices"
		]
			? Object.keys(
					storageFormObjectOrEmptyObject?.animals?.[stringId]?.[
						"shoulder"
					]?.["choices"]
			  )
					.filter(
						(shoulderChoiceKeys) =>
							storageFormObjectOrEmptyObject?.animals?.[
								stringId
							]?.["shoulder"]?.["choices"]?.[
								shoulderChoiceKeys
							] === true
					)
					.map(
						(incompleteName) =>
							`animals.${stringId}.shoulder.choices.${incompleteName}`
					) || []
			: []
	);

	const handleUpdateSaveUpToTwoShoulderChoices = (e) => {
		const isNotChecked = !e.target.checked;
		const currentHamType = e.target.name;

		if (isNotChecked) {
			setSaveTwoShoulderChoices(
				saveTwoShoulderChoices.filter((item) => item !== currentHamType)
			);
		} else {
			const lastSavedChoice =
				saveTwoShoulderChoices[saveTwoShoulderChoices.length - 1] ||
				undefined;
			const lastChoiceExists = lastSavedChoice !== undefined;

			if (wholeHog && lastChoiceExists) {
				const newShoulderChoices = [lastSavedChoice, currentHamType];
				setSaveTwoShoulderChoices([...newShoulderChoices]);

				const shoulderChoicesKeysArrayFromLocalStorage = Object.keys(
					storageFormObjectOrEmptyObject?.animals?.[stringId]?.[
						"shoulder"
					]?.["choices"]
				);

				// go through the choices object (in local storage) and grab the keys
				shoulderChoicesKeysArrayFromLocalStorage.forEach((keyName) => {
					//for each of our options in our choices object, set the value in react-hook-form to what the state says it should be;
					// this should force a localStorage update
					const thisFieldName = `animals.${stringId}.shoulder.choices.${keyName}`;
					setValue(
						thisFieldName,
						[lastSavedChoice, currentHamType].includes(
							thisFieldName
						)
					);
				});
			} else {
				setSaveTwoShoulderChoices([currentHamType]);
			}
		}
	};

	const [hamSelected, setHamSelected] = useState(
		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
			"ham"
		]?.["cut"] === "steaks"
			? "steaks"
			: JSON.parse(window.localStorage.getItem("orderForm"))?.[
					stringId
			  ]?.["ham"]?.["cut"] === "half_hams_and_roasts_and_half_steaks"
			? "half_hams_and_roasts_and_half_steaks"
			: JSON.parse(window.localStorage.getItem("orderForm"))?.[
					stringId
			  ]?.["ham"]?.["cut"] === "other"
			? "other"
			: "hams/roasts"
	);

	const handleHamSelection = (e) => {
		const value = e.target.value;
		setHamSelected(value !== "other" ? value : false);
	};

	/* 
			value: "roasts_and_steaks",
			value: "kansas_city_bacon",
			value: `smoked`,
			value: `ground`,
	*/

	const handleSetWholeHog = (e) => {
		const { id } = e.target;
		const isNowWholeHog = id === "whole_hog";

		// console.log("handleSetWholeHog firing:", isNowWholeHog);

		setWholeHog(isNowWholeHog);

		//reset other states which depend on this:
		if (isNowWholeHog) {
			// hamSelected  //reset this option
			if (hamSelected === "half_hams_and_roasts_and_half_steaks") {
				setHamSelected(false);
			}
		} else {
			// need to adjust shoulder options when we get a half_hog
			if (saveTwoShoulderChoices.length > 1) {
				// save only the last choice
				const lastShoulderChoice =
					saveTwoShoulderChoices[saveTwoShoulderChoices.length - 1];
				setSaveTwoShoulderChoices([lastShoulderChoice]);
			}
		}
	};

	return (
		<Collapsible trigger={`Hog Cut Sheet${id === 0 ? "" : ` #${id + 1}`}`}>
			<select>
				{/* TODO: display all OTHER this type of animal for copying from*/}
				<option value="hog">Hog 1</option>
			</select>
			<button>Copy from previous added animal</button>
			<ConfirmButton {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				{`Delete this ${animalInfo.animal}`}
			</ConfirmButton>
			<Collapsible trigger="Hog Information">
				TODO: Create a matching banner for this^ header
			</Collapsible>
			<section className="order-form--section">
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

				<InputForm
					title="Ear Tag Number (if applicable)"
					name="info.grower.ear_tag_number"
					placeholder="Ear tag number"
					animalInfo={animalInfo}
				/>

				<RadioForm
					title="Choose One"
					name="info.hog_amount"
					options={[
						{
							label: "Whole Hog",
							inputId: "whole_hog",
						},
						{
							label: "Half Hog",
							inputId: "half_hog",
						},
					]}
					animalInfo={animalInfo}
					handleChangeOption={handleSetWholeHog}
				/>
			</section>
			{wholeHog !== undefined && (
				<>
					<Collapsible trigger="Ham Options">
						<div className="order-form--section">
							<OrderFormSectionSubheading>
								Options for your ham
							</OrderFormSectionSubheading>

							<SelectForm
								title="Ham Cut"
								name="ham.cut"
								options={
									wholeHog
										? [
												{
													label: `All Hams/Roasts`,
													value: "hams_and_roasts",
												},
												{
													label: `All Steaks (Specify package size below)`,
													value: "steaks",
												},
												{
													label: "Half Hams/Roasts, Half Steaks (Specify package size below)",
													value: "half_hams_and_roasts_and_half_steaks",
												},
												{
													label: `Other (Specify in Special Instructions)`,
													value: `other`,
												},
										  ]
										: [
												{
													label: `Hams/Roasts`,
													value: "hams_and_roasts",
												},
												{
													label: `Steaks (Specify package size below)`,
													value: "steaks",
												},
												{
													label: `Other (Specify in Special Instructions)`,
													value: `other`,
												},
										  ]
								}
								animalInfo={animalInfo}
								handleChangeOption={handleHamSelection}
							/>
						</div>

						{(hamSelected === "hams_and_roasts" ||
							hamSelected ===
								"half_hams_and_roasts_and_half_steaks") && (
							<div className="order-form--field">
								<SelectForm
									title="Smoked Or Fresh"
									// subtitle={`${
									// 	wholeHog
									// 		? "Whole Hog orders may choose one of each, or all of one or the other."
									// 		: "Half Hog orders may choose either cured and smoked OR fresh."
									// } `}
									subtitle="Whole Hog orders may choose one of each, or all of one or the other. Half Hog orders may choose either cured and smoked OR fresh."
									name="ham.smoked_or_fresh"
									options={
										wholeHog
											? [
													{
														label: "Smoked",
														value: "smoked",
													},
													{
														label: "Fresh",
														value: "fresh",
													},
													{
														label: "Both (Whole Hog Orders Only)",
														value: "both",
													},
													{
														label: `Other (Specify in Special Instructions)`,
														value: `other`,
													},
											  ]
											: [
													{
														label: "Smoked",
														value: "smoked",
													},
													{
														label: "Fresh",
														value: "fresh",
													},

													{
														label: `Other (Specify in Special Instructions)`,
														value: `other`,
													},
											  ]
									}
									animalInfo={animalInfo}
								/>

								<SelectForm
									title="Ham/Roast Size"
									name="ham.size"
									subtitle="We suggest a 4# ham for a family of 2-4, or larger if you like leftovers!"
									options={[
										{
											label: "3-4#",
											value: "3-4#",
										},
										{
											label: "4-5#",
											value: "4-5#",
										},
										{
											label: "5-6#",
											value: "5-6#",
										},
										{
											label: "6-7#",
											value: "6-7#",
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

						{(hamSelected === "steaks" ||
							hamSelected ===
								"half_hams_and_roasts_and_half_steaks") && (
							<div className="order-form--field">
								<SelectForm
									title="Steaks Per Package"
									name="ham.steak.number_per_package"
									options={[
										{
											label: "One (One steak = 2 servings cut in half - Standard)",
											value: "one",
										},
										{
											label: "Two",
											value: "two",
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
					</Collapsible>
					<Collapsible trigger="Bacon / Side Pork">
						<OrderFormSectionSubheading>
							Whole Hog orders may choose some of each bacon and
							side pork, or all of one or the other. Half Hog
							orders may choose either bacon or side pork.
						</OrderFormSectionSubheading>
						<SelectForm
							title={
								wholeHog
									? "Bacon And Side Pork"
									: "Bacon Or Side Pork"
							}
							name="bacon.select"
							options={
								wholeHog
									? [
											{
												label: "Bacon (Cured and Smoked)",
												value: "bacon",
											},
											{
												label: "Fresh Side Pork",
												value: "side_pork",
											},
											{
												label: "Half Bacon, Half Side Pork",
												value: "half_bacon_half_side_pork",
											},
											{
												label: `Other (Specify in Special Instructions)`,
												value: `other`,
											},
									  ]
									: [
											{
												label: "Bacon (Cured and Smoked)",
												value: "bacon",
											},
											{
												label: "Fresh Side Pork",
												value: "side_pork",
											},

											{
												label: `Other (Specify in Special Instructions)`,
												value: `other`,
											},
									  ]
							}
							animalInfo={animalInfo}
							// handleChangeOption={handleSideBaconPorkSelection}
						/>

						<div className="order-form--field">
							<SelectForm
								title="Bacon / Side Pork Cut Style"
								name="bacon.cut_style"
								options={[
									{
										label: "Sliced (approximately 1# packages)",
										value: "sliced",
									},
									{
										label: "Slab (not sliced - approximately 1# chunks)",
										value: "slab",
									},
								]}
								animalInfo={animalInfo}
							/>

							<SelectForm
								title="Bacon / Side Pork Slicing"
								name="bacon.cut_thickness"
								options={[
									{
										label: `Standard`,
										value: `standard`,
									},
									{
										label: `Thin`,
										value: `thin`,
									},
									{
										label: `Thick`,
										value: `thick`,
									},
								]}
								animalInfo={animalInfo}
							/>
						</div>
					</Collapsible>
					<Collapsible trigger="Shoulder">
						<OrderFormSectionSubheading>
							Front Shoulder
						</OrderFormSectionSubheading>

						<CheckboxForm
							title="Front Shoulder Choices"
							subtitle="Whole orders may choose up to 2 options; half orders may choose 1 option."
							name="shoulder.choices"
							animalInfo={animalInfo}
							options={[
								{
									label: "Fresh Pork Roasts / Steaks",
									name: "shoulder.choices.fresh",
								},
								{
									label: "Kansas City Bacon",
									name: "shoulder.choices.kansas_city_bacon",
								},
								{
									label: "Smoke It! (Picnic Ham)",
									name: "shoulder.choices.smoked",
								},
								{
									label: "Grind it!",
									name: "shoulder.choices.ground",
								},
							]}
							handleChooseOption={
								handleUpdateSaveUpToTwoShoulderChoices
							}
							previousCheckedOptionsArray={saveTwoShoulderChoices}
						/>

						{saveTwoShoulderChoices.length > 0 && (
							<ShoulderChoices
								chosenChoicesArray={saveTwoShoulderChoices}
								animalInfo={animalInfo}
							/>
						)}
					</Collapsible>
					<Collapsible trigger="Loin Options">
						<SelectForm
							title="Loin Cut"
							name="loin.options"
							options={[
								{
									label: `All Chops`,
									value: `all_chops`,
								},
								{
									label: `All Roasts (Usually 3)`,
									value: `all_roasts`,
								},
								{
									label: `One Roast - Chops for the remainder`,
									value: `one_roast_rest_chops`,
								},
								{
									label: `Other (Specify In Special Instructions)`,
									value: `other`,
								},
							]}
							animalInfo={animalInfo}
						/>
					</Collapsible>

					<Collapsible trigger="Special Instructions">
						<InputForm
							title="SPECIAL INSTRUCTIONS"
							name="special_instructions"
							placeholder="Enter special instructions for certain options here"
							animalInfo={animalInfo}
							textarea={true}
						/>
					</Collapsible>
				</>
			)}
		</Collapsible>
	);
}

export default HogSection;
