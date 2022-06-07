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

const animal = "hog";

function HogSection({ id, deleteAnimal }) {
	id = +id;
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}`;

	const [wholeHog, setWholeHog] = useState(
		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
			"info"
		]?.["hog_amount"] === "whole_hog" || undefined
	);

	const [saveTwoShoulderChoices, setSaveTwoShoulderChoices] = useState(
		// get previous state OR use empty array
		[]
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
				setSaveTwoShoulderChoices([lastSavedChoice, currentHamType]);
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
			  ]?.["ham"]?.["cut"] === "half_hams/roasts_half_steaks"
			? "half_hams/roasts_half_steaks"
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
		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
			"info"
		]?.["hog_amount"] === "half_hog"
			? "all"
			: JSON.parse(window.localStorage.getItem("orderForm"))?.[
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
			JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
				"shoulder"
			]?.["option"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: JSON.parse(window.localStorage.getItem("orderForm"))?.[
						stringId
				  ]?.["shoulder"]?.["option"] === "smoked"
				? "smoked"
				: JSON.parse(window.localStorage.getItem("orderForm"))?.[
						stringId
				  ]?.["shoulder"]?.["option"] === "ground"
				? "ground"
				: "roasts/steaks",
		option2:
			JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
				"shoulder"
			]?.["option_2"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: JSON.parse(window.localStorage.getItem("orderForm"))?.[
						stringId
				  ]?.["shoulder"]?.["option_2"] === "smoked"
				? "smoked"
				: JSON.parse(window.localStorage.getItem("orderForm"))?.[
						stringId
				  ]?.["shoulder"]?.["option_2"] === "ground"
				? "ground"
				: "roasts/steaks",
	});

	/* 
			value: "roasts/steaks",
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
		const isPurchasingWholeHog = id === "whole_hog";
		console.log("handleSetWholeHog firing:", isPurchasingWholeHog);
		setWholeHog(isPurchasingWholeHog);
		if (
			isPurchasingWholeHog &&
			hamSelected === "half_hams/roasts_half_steaks"
		) {
			setHamSelected(false); //reset this option
		}
	};

	// useEffect(() => {
	// 	console.log(
	// 		"testing wholeHog initial state check: localStorage says it should be set to:",
	// 		window.localStorage.getItem("orderForm")?.[stringId]?.["info"]?.[
	// 			"hog_amount"
	// 		] === "whole_hog"
	// 	);
	// 	console.log("The tree:");
	// 	console.log(" ", JSON.parse(window.localStorage.getItem("orderForm")));
	// 	console.log(
	// 		" ",
	// 		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]
	// 	);
	// 	console.log(
	// 		" ",
	// 		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
	// 			"info"
	// 		]
	// 	);
	// 	console.log(
	// 		" ",
	// 		JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
	// 			"info"
	// 		]?.["hog_amount"]
	// 	);
	// }, [
	// 	JSON.parse(window.localStorage.getItem("orderForm"))?.[stringId]?.[
	// 		"info"
	// 	]?.["hog_amount"],
	// ]);

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
								// options={[
								// 	{
								// 		label: `${wholeHog ? "All " : ""}Hams/Roasts`,
								// 		value: "hams/roasts",
								// 	},
								// 	{
								// 		label: `${
								// 			wholeHog ? "All " : ""
								// 		}Steaks (Specify package size below)`,
								// 		value: "steaks",
								// 	},
								// 	wholeHog && {
								// 		label: "Half Hams/Roasts, Half Steaks (Specify package size below)",
								// 		value: "half_hams/roasts_half_steaks",
								// 	},
								// 	{
								// 		label: `Other (Specify in Special Instructions)`,
								// 		value: `other`,
								// 	},
								// ]}

								options={
									wholeHog
										? [
												{
													label: `All Hams/Roasts`,
													value: "hams/roasts",
												},
												{
													label: `All Steaks (Specify package size below)`,
													value: "steaks",
												},
												{
													label: "Half Hams/Roasts, Half Steaks (Specify package size below)",
													value: "half_hams/roasts_half_steaks",
												},
												{
													label: `Other (Specify in Special Instructions)`,
													value: `other`,
												},
										  ]
										: [
												{
													label: `Hams/Roasts`,
													value: "hams/roasts",
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

						{(hamSelected === "hams/roasts" ||
							hamSelected === "half_hams/roasts_half_steaks") && (
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
							hamSelected === "half_hams/roasts_half_steaks") && (
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
									label: "Fresh Pork Roasts/Steaks",
									name: "shoulder.new_shoulder_choices.roasts/steaks",
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

						{wholeHog && (
							<RadioForm
								title="One or Two Choices"
								subtitle="Whole orders may choose one or two options for the shoulder"
								name="shoulder.all_or_split"
								options={[
									{
										label: "All One Cut Style",
										inputId: "all",
									},
									{
										label: "Choose Two Cut Styles",
										inputId: "split",
									},
								]}
								animalInfo={animalInfo}
								handleSelectOption={handleChangeShoulderCuts}
							/>
						)}
						<div className="order-form--field">
							<SelectForm
								title="Shoulder Options"
								subtitle={`Choose your ${
									wholeHog &&
									shoulderCuts === "split" &&
									"first "
								}shoulder cut option. For Kansas City Bacon, it's made from the eye of the shoulder and packaged the same as your bacon - any remaining meat goes into sausage, and the arm portion goes into a roast.`}
								name="shoulder.option"
								options={[
									{
										label: "Fresh Pork Roasts/Steaks",
										value: "roasts/steaks",
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

							{shoulderCuts === "split" && (
								<SelectForm
									title="Shoulder Options - Second Cut"
									subtitle={`Choose your second shoulder cut option. For Kansas City Bacon, it's made from the eye of the shoulder and packaged the same as your bacon - any remaining meat goes into sausage, and the arm portion goes into a roast.`}
									name="shoulder.option_2"
									options={[
										{
											label: "Fresh Pork Roasts/Steaks",
											value: "roasts/steaks",
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
						<div className="order-form--field">
							{(shoulderCutsSelected.option1 === "smoked" ||
								shoulderCutsSelected.option2 === "smoked") && (
								<SelectForm
									title="Picnic / Shoulder Cut"
									name="shoulder.smoked"
									options={[
										{
											label: "All Picnic / Fresh Shoulder Roasts",
											value: "roasts/steaks",
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

			{/* Ham options:

						Ham Cut: {
							All Roasts/Hams
							All Steaks
							(Half/Half)
							Other
						} :
			
							(IF WHOLE_HOG): {
								(IF ALL HAMS/ROASTS): 
									TYPE (whole_hog orders choose UP TO 2): {
										Smoked
										Fresh
										Other
									},
									Ham/Roast Size {
										...
									}
								}

								(IF HALF HAMS/ROASTS AND HALF STEAKS): {
									(HAMS/ROASTS): {
										TYPE (whole_hog orders choose 1): {
											Smoked
											Fresh
											Other
										},
										Ham/Roast Size {
											...
										}
									}

									(STEAKS): {
										NumberPerPackage
									}
								}

								(IF ALL STEAKS): {
									NumberPerPackage
								}
									
							}

							(IF HALF_HOG): {
								(IF HAMS/ROASTS): {
									TYPE (half_hog orders choose 1): {
										Smoked
										Fresh
										Other
									},
									Ham/Roast Size {
										...
									}
								}

								(IF STEAKS): {
									NumberPerPackage
								}

							}
								
			*/}

			{/* Bacon / Side Pork
			
				(whole orders choose up to 2, half choose up to 1): { 
					Bacon (cured and smoked)
					Fresh Side Pork
					Other
				} :
					(IF BACON OR FRESH SIDE PORK): {
						Cut: {
							Sliced
							Slab
						} :
							(IF SLICED): {
								Standard
								Thin
								Thick
							}
					}
			
			*/}

			{/* 
				Shoulder options:
				Half hog orders: choose one type of cut
				Whole hog orders: choose one or two types of cuts
				(checkbox state idea: could be array of 2 items, and each change a new one is pushed on and the oldest one is removed)
				
				Fresh Pork Roasts/Steaks: {
					{(Roasts/Steaks)
						All Fresh SHoulder Roasts
						All Fresh Shoulder Steaks
						Half Roasts Half Steaks
						Other
					}:
					 	IF ROASTS:
							{(Roast size)
								3-4
								4-5
								5-6
								other
							}
						IF STEAKS:
							{
								Thickness: {
									...
								},
								SteaksPerPackage: {
									...
								}
							}
				},
				Kansas City Bacon: {
					(NO EXTRA OPTIONS)
				},
				Smoked Picnic Ham: {
					{(Roasts/Steaks)
						All Picnic Roasts
						All Picnic Steaks
						Half Roasts Half Steaks
						Other
					}:
					 	IF ROASTS:
							{(Roast size)
								3-4
								4-5
								5-6
								other
							}
						IF STEAKS:
							{
								Thickness: {
									...
								},
								SteaksPerPackage: {
									...
								}
							}
				},
				GRIND: {
					Choose One: {
						Breakfast Sausage (seasoned)
						Ground Pork (unseasoned)
					}
				}


			*/}

			{/*  Loin options:
				
				Loin Cut: {
						All Chops
						All Roasts (Usually 3)
						One Roast, remaining Chops
						Other
					}:
						IF CHOPS: {
							Thickness of Chops: {
								...
							},
							ChopsPerPackage: {
								...
							},
						}

						IF ROAST(S): {
							Roast Size: {
								...
							}
						}
			*/}

			{/* Spare Rib Options:

					Country Spare Ribs (from some pork chops/steaks)? Yes/No
					

			*/}

			{/* Other Options:

					Lard (raw fat, not rendered)?

					Extras: {
						Liver?
						Heart?
					}
			*/}
		</Collapsible>
	);
}

export default HogSection;
