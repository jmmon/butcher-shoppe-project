import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import ConfirmButton from "../../../Button/ConfirmButton";
import CheckboxForm from "../FormComponents/CheckboxForm";
import InputForm from "../FormComponents/InputForm";
import LabelForm from "../FormComponents/LabelForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading";
import RadioForm from "../FormComponents/RadioForm";
import SelectForm from "../FormComponents/SelectForm";

function HogSection({ id, deleteAnimal }) {
	const animal = "hog";
	id = +id;
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}}`;

	const [halfHog, setHalfHog] = useState(
		window.localStorage.getItem("orderForm")?.[stringId]?.["info"]?.[
			"hog-amount"
		] === "half_hog" || false
	);

	const [hamSelected, setHamSelected] = useState(
		window.localStorage.getItem("orderForm")?.[stringId]?.["ham"]?.[
			"cut"
		] === "hams/roasts"
			? "hams/roasts"
			: window.localStorage.getItem("orderForm")?.[stringId]?.["ham"]?.[
					"cut"
			  ] === "steaks"
			? "steaks"
			: window.localStorage.getItem("orderForm")?.[stringId]?.["ham"]?.[
					"cut"
			  ] === "half_hams/roasts_half_steaks"
			? "half_hams/roasts_half_steaks"
			: false
	);

	const handleHamSelection = (e) => {
		const value = e.target.value;
		setHamSelected(value !== "other" ? value : false);
	};

	const [shoulderCuts, setShoulderCuts] = useState(
		window.localStorage.getItem("orderForm")?.[stringId]?.["info"]?.[
			"hog-amount"
		] === "half_hog"
			? "all"
			: window.localStorage.getItem("orderForm")?.[stringId]?.[
					"shoulder"
			  ]?.["all_or_split"] === "split"
			? "split"
			: "all"
	);

	const handleShoulderCuts = (e) => {
		const { id } = e.target;
		setShoulderCuts(id);
	};

	const [shoulderCutsSelected, setShoulderCutsSelected] = useState({
		option1:
			window.localStorage.getItem("orderForm")?.[stringId]?.[
				"shoulder"
			]?.["option"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: window.localStorage.getItem("orderForm")?.[stringId]?.[
						"shoulder"
				  ]?.["option"] === "smoked"
				? "smoked"
				: window.localStorage.getItem("orderForm")?.[stringId]?.[
						"shoulder"
				  ]?.["option"] === "ground"
				? "ground"
				: "roasts/steaks",
		option2:
			window.localStorage.getItem("orderForm")?.[stringId]?.[
				"shoulder"
			]?.["option_2"] === "kansas_city_bacon"
				? "kansas_city_bacon"
				: window.localStorage.getItem("orderForm")?.[stringId]?.[
						"shoulder"
				  ]?.["option_2"] === "smoked"
				? "smoked"
				: window.localStorage.getItem("orderForm")?.[stringId]?.[
						"shoulder"
				  ]?.["option_2"] === "ground"
				? "ground"
				: "roasts/steaks",
	});

	/* 
			value: "roasts/steaks",
			value: "kansas_city_bacon",
			value: `smoked`,
			value: `ground`,
	*/

	const handleShoulderCutsSelected = (e) => {
		const { name, value } = e.target;
		setShoulderCutsSelected((prevSelected) => ({
			...prevSelected,
			[name]: value,
		}));
	};

	const handleHalfHog = (e) => {
		const { id } = e.target;
		const value = id === "half_hog";
		setHalfHog(value);
		if (value) {
			// if true (if half_hog), make sure "half_hams/roasts_half_steaks" is not selected for hamSelected
			if (hamSelected == "half_hams/roasts_half_steaks") {
				setHamSelected(false);
			}
		}
	};

	return (
		<Collapsible trigger={`Hog Cut Sheet${id === 0 ? "" : ` #${id + 1}`}`}>
			<select>
				{/* TODO: display all OTHER this type of animal for copying from*/}
				<option value="beef">Hog 1</option>
			</select>
			<button>Copy from previous added animal</button>
			<ConfirmButton {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				{`Delete this ${animalInfo.animal}`}
			</ConfirmButton>

			<Collapsible trigger="Hog Information">
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
						name="info.hog-amount"
						required={true}
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
						handleSplitHalf={handleHalfHog}
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Ham Options">
				<div className="order-form--section">
					<OrderFormSectionSubheading>
						Options for your ham
					</OrderFormSectionSubheading>
					<SelectForm
						title="Ham Cut"
						name="ham.cut"
						options={[
							{
								label: `${!halfHog && "All "}Hams/Roasts`,
								value: "hams/roasts",
							},
							{
								label: `${
									!halfHog && "All "
								}Steaks (Specify package size below)`,
								value: "steaks",
							},
							!halfHog && {
								label: "Half Hams/Roasts, Half Steaks (Specify package size below)",
								value: "half_hams/roasts_half_steaks",
							},
							{
								label: `Other (Specify in Special Instructions)`,
								value: `other`,
							},
						]}
						animalInfo={animalInfo}
						handleSelect={handleHamSelection}
					/>
				</div>

				{(hamSelected === "hams/roasts" ||
					hamSelected === "half_hams/roasts_half_steaks") && (
					<div className="order-form--field">
						<SelectForm
							title="Smoked Or Fresh"
							subtitle={`${
								halfHog
									? "Half Hog orders may choose either cured and smoked OR fresh."
									: "Whole Hog orders may choose one of each, or all of one or the other."
							} `}
							name="ham.smoked_or_fresh"
							options={[
								{
									label: "Smoked",
									value: "smoked",
								},
								{ label: "Fresh", value: "fFresh" },
								!halfHog && {
									label: "Both (Whole Hog Orders Only)",
									value: "both",
								},
								{
									label: `Other (Specify in Special Instructions)`,
									value: `other`,
								},
							]}
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
									value: "One",
								},
								{
									label: "Two",
									value: "Two",
								},
								{
									label: `Other (Specify in Special Instructions)`,
									value: `Other (Specify in Special Instructions)`,
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>
				)}
			</Collapsible>
			<Collapsible trigger="Bacon / Side Pork">
				<SelectForm
					title={
						halfHog ? "Bacon Or Side Pork" : "Bacon And Side Pork"
					}
					subtitle={`${
						halfHog
							? "Half Hog orders may choose either bacon or side pork."
							: "Whole Hog orders may choose some of each bacon and side pork, or all of one or the other."
					} `}
					name="bacon.select"
					options={[
						{
							label: "Bacon (Cured and Smoked)",
							value: "bacon",
						},
						{
							label: "Fresh Side Pork",
							value: "side_pork",
						},
						!halfHog && {
							label: "Half Bacon, Half Side Pork",
							value: "half_bacon_half_side_pork",
						},
						{
							label: `Other (Specify in Special Instructions)`,
							value: `other`,
						},
					]}
					animalInfo={animalInfo}
					// handleSelect={handleSideBaconPorkSelection}
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
				{!halfHog && (
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
						handleSplitHalf={handleShoulderCuts}
					/>
				)}
				<div className="order-form--field">
					<SelectForm
						title="Shoulder Options"
						subtitle={`Choose your ${
							!halfHog && shoulderCuts === "split" && "first "
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
						handleSelect={handleShoulderCutsSelected}
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
							handleSelect={handleShoulderCutsSelected}
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
							handleSelect={handleShoulderCutsSelected}
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
		</Collapsible>
	);
}

export default HogSection;
