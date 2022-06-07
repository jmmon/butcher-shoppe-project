import React from "react";
import { useState, useEffect } from "react";
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

const animal = "hog";

function HogSection({ id, deleteAnimal }) {
	id = +id;
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}`;

	const { setValue } = useFormContext();

	// useFormPersist(`${stringId}`, {
	// 	watch: watch, // to watch the value to save into storage
	// 	setValue: setValue, // to set the value when loading up the page
	// 	storage: window.localStorage,
	// 	exclude: ["buyer"],
	// 	// could exclude the animals here, then would need to watch them separately to add them separately to localStorage
	// });

	// useEffect(() => {
	// 	window.localStorage.getItem(`${stringId}`) !== null &&
	// 		console.log(
	// 			`TESTING - ${stringId} storage:`,
	// 			JSON.parse(window.localStorage.getItem(`${stringId}`))
	// 		);
	// }, [window.localStorage.getItem(`${stringId}`)]);

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

	//we have a  glitch! when 2 selected: refresh, change selection: refresh, submit: 3 selected in localStorage but only 2 selected in state --- FIXED

	const [saveTwoShoulderChoices, setSaveTwoShoulderChoices] = useState(
		// get previous object and turn it into an array OR use empty array
		storageFormObjectOrEmptyObject?.animals?.[stringId]?.["shoulder"]?.[
			"new_shoulder_choices"
		]
			? Object.keys(
					storageFormObjectOrEmptyObject?.animals?.[stringId]?.[
						"shoulder"
					]?.["new_shoulder_choices"]
			  )
					.filter(
						(shoulderChoiceKeys) =>
							storageFormObjectOrEmptyObject?.animals?.[
								stringId
							]?.["shoulder"]?.["new_shoulder_choices"]?.[
								shoulderChoiceKeys
							] === true
					)
					.map(
						(incompleteName) =>
							`animals.${stringId}.shoulder.new_shoulder_choices.${incompleteName}`
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
				// state updates, DOM updates, but the localStorage still thinks there are 3 selected.
				// TODO: go through localStorage and set-false any names not in the array

				// const correctArray = Object.keys(
				// 	storageFormObjectOrEmptyObject?.animals?.[stringId]?.[
				// 		"shoulder"
				// 	]?.["new_shoulder_choices"]
				// )
				// 	.filter(
				// 		(shoulderChoiceKeys) =>
				// 		[lastSavedChoice, currentHamType].includes(shoulderChoiceKeys)
				// 	)
				// 	.map(
				// 		(incompleteName) =>
				// 			`animals.${stringId}.shoulder.new_shoulder_choices.${incompleteName}`
				// 	);

				// 	console.log('correct array', correctArray);

				// correctArray.forEach(shoulderChoices => {
				// 	setValue()
				// })

				const shoulderChoicesKeysArrayFromLocalStorage = Object.keys(
					storageFormObjectOrEmptyObject?.animals?.[stringId]?.[
						"shoulder"
					]?.["new_shoulder_choices"]
				);

				// go through the new_shoulder_choices object (in local storage) and grab the keys
				shoulderChoicesKeysArrayFromLocalStorage.forEach((keyName) => {
					//for each of our options in our new_shoulder_choices object, set the value in react-hook-form to what the state says it should be;
					// this should force a localStorage update
					const thisFieldName = `animals.${stringId}.shoulder.new_shoulder_choices.${keyName}`;
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

	const [shoulderCuts, setShoulderCuts] = useState(
		JSON.parse(window.localStorage.getItem("orderForm"))?.animals?.[
			stringId
		]?.["info"]?.["hog_amount"] === "half_hog"
			? "all"
			: JSON.parse(window.localStorage.getItem("orderForm"))?.animals?.[
					stringId
			  ]?.["shoulder"]?.["all_or_split"] === "split"
			? "split"
			: "all"
	);

	const handleChangeShoulderCuts = (e) => {
		const { id } = e.target;
		setShoulderCuts(id);
	};

	const [shoulderCutsSelected, setShoulderCutsSelected] = useState({
		option1:
			JSON.parse(window.localStorage.getItem("orderForm"))?.animals?.[
				stringId
			]?.["shoulder"]?.["option"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: JSON.parse(window.localStorage.getItem("orderForm"))
						?.animals?.[stringId]?.["shoulder"]?.["option"] ===
				  "smoked"
				? "smoked"
				: JSON.parse(window.localStorage.getItem("orderForm"))
						?.animals?.[stringId]?.["shoulder"]?.["option"] ===
				  "ground"
				? "ground"
				: "roasts_and_steaks",
		option2:
			JSON.parse(window.localStorage.getItem("orderForm"))?.animals?.[
				stringId
			]?.["shoulder"]?.["option_2"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: JSON.parse(window.localStorage.getItem("orderForm"))
						?.animals?.[stringId]?.["shoulder"]?.["option_2"] ===
				  "smoked"
				? "smoked"
				: JSON.parse(window.localStorage.getItem("orderForm"))
						?.animals?.[stringId]?.["shoulder"]?.["option_2"] ===
				  "ground"
				? "ground"
				: "roasts_and_steaks",
	});

	/* 
			value: "roasts_and_steaks",
			value: "kansas_city_bacon",
			value: `smoked`,
			value: `ground`,
	*/

	const handleSetShoulderCutsSelectedOptions = (e) => {
		const { name, value } = e.target;
		setShoulderCutsSelected((prevSelected) => ({
			...prevSelected,
			[name]: value,
		}));
	};

	const handleSetWholeHog = (e) => {
		const { id } = e.target;
		const isNowWholeHog = id === "whole_hog";

		// console.log("handleSetWholeHog firing:", isNowWholeHog);

		setWholeHog(isNowWholeHog);

		//reset other states which depend on this:
		if (isNowWholeHog) {
			// hamSelected
			if (hamSelected === "half_hams_and_roasts_and_half_steaks") {
				setHamSelected(false); //reset this option
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
							name="shoulder.new_shoulder_choices"
							animalInfo={animalInfo}
							options={[
								{
									label: "Fresh Pork roasts_and_steaks",
									name: "shoulder.new_shoulder_choices.roasts_and_steaks",
								},
								{
									label: "Kansas City Bacon",
									name: "shoulder.new_shoulder_choices.kansas_city_bacon",
								},
								{
									label: "Smoke It! (Picnic Ham)",
									name: "shoulder.new_shoulder_choices.smoked",
								},
								{
									label: "Grind it!",
									name: "shoulder.new_shoulder_choices.ground",
								},
							]}
							handleChooseOption={
								handleUpdateSaveUpToTwoShoulderChoices
							}
							previousCheckedOptionsArray={saveTwoShoulderChoices}
						/>

						{wholeHog ? (
							<>
								<h4>whole hog - break out by length</h4>
								{saveTwoShoulderChoices.lenth === 1 && (
									<>
										<div>first half</div>
										<div>second half</div>
									</>
								)}
								{saveTwoShoulderChoices.lenth === 2 && (
									<>
										<div>first option</div>
										<div>second option</div>
									</>
								)}
							</>
						) : (
							<>
								<h4>whole hog - break out by length</h4>
								<div>first option</div>
							</>
						)}

						{saveTwoShoulderChoices.includes(
							getSplitAnimalInfo(
								"shoulder.new_shoulder_choices.roasts_and_steaks",
								animalInfo
							)
						) && (
							<div className="order-form--field">
								This field is to ask about fresh
								roasts_and_steaks:
								<br />
								{/* <SelectForm /> */}
								first: do we want all roasts, all steaks, or
								half/half?
								<br />
								-if we choose all roasts or half/half, we need
								to ask about the roasts:
								<br />
								{"{Roast Size}"}
								<br />
								<br />
								-if we choose all steaks or half/half, we need
								to ask about the steaks:
								<br />
								{"{Steak thickness"}
								<br />
								{"SteaksPerPackage}"}
							</div>
						)}

						{saveTwoShoulderChoices.includes(
							getSplitAnimalInfo(
								"shoulder.new_shoulder_choices.smoked",
								animalInfo
							)
						) && (
							<div className="order-form--field">
								This field is to ask about smoked{" "}
								{"(picnic ham)"}:
								<br />
								first: do we want all roasts, all steaks, or
								half/half?
								<br />
								-if we choose all roasts or half/half, we need
								to ask about the roasts:
								<br />
								{"{Roast Size}"}
								<br />
								<br />
								-if we choose all steaks or half/half, we need
								to ask about the steaks:
								<br />
								{"{Steak thickness"}
								<br />
								{"SteaksPerPackage}"}
							</div>
						)}

						{saveTwoShoulderChoices.includes(
							getSplitAnimalInfo(
								"shoulder.new_shoulder_choices.kansas_city_bacon",
								animalInfo
							)
						) && (
							<div className="order-form--field">
								{
									"(no additional options, don't need to show this)"
								}
							</div>
						)}

						{saveTwoShoulderChoices.includes(
							getSplitAnimalInfo(
								"shoulder.new_shoulder_choices.ground",
								animalInfo
							)
						) && (
							<div className="order-form--field">
								we need to CHOOSE ONE:
								<br />
								{"{Breakfast Sausage (seasoned)"}
								<br />
								{"Ground Pork (unseasoned)}"}
							</div>
						)}

						<div className="order-form--field">
							{(shoulderCutsSelected.option1 === "smoked" ||
								shoulderCutsSelected.option2 === "smoked") && (
								<SelectForm
									title="Picnic / Shoulder Cut"
									name="shoulder.smoked"
									options={[
										{
											label: "All Picnic / Fresh Shoulder Roasts",
											value: "roasts_and_steaks",
										},
										{
											label: "Kansas City Bacon",
											value: "kansas_city_bacon",
										},
										{
											label: `Smoked (Picnic Ham)`,
											value: `smoked`,
										},
										{
											label: `Ground Pork`,
											value: `ground`,
										},
									]}
									animalInfo={animalInfo}
									handleChangeOption={
										handleSetShoulderCutsSelectedOptions
									}
								/>
							)}
						</div>
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
