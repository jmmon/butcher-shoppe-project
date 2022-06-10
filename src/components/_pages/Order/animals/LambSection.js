import React from "react";
import { useState } from "react";
import Collapsible from "react-collapsible";
import { useFormContext } from "react-hook-form";

import ConfirmButton from "../../../Button/ConfirmButton";
import CheckboxForm from "../FormComponents/CheckboxForm";
import GrowerInfo from "../FormComponents/GrowerInfo";
import InputForm from "../FormComponents/InputForm/InputForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading";
import RadioForm from "../FormComponents/RadioForm";
import SelectForm from "../FormComponents/SelectForm";

const animal = "lamb";

function LambSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}`;

	const { getValues, setValue } = useFormContext();

	const storageFormObjectOrEmptyObject = JSON.parse(
		window.localStorage.getItem("orderForm") || {}
	);

	const [wholeLamb, setWholeLamb] = useState(
		storageFormObjectOrEmptyObject?.animals?.[stringId]?.["info"]?.[
			"lamb_amount"
		] === "whole_lamb" || undefined
	);

	const handleSetWholeLamb = (e) => {
		const { id } = e.target;
		const isNowWholeLamb = id === "whole_lamb";

		setWholeLamb(isNowWholeLamb);

		//reset other states which depend on this:
		if (isNowWholeLamb) {
			//reset this option
		} else {
			if (
				getValues(`animals.${stringId}.options.shoulder_roast_size`) ===
				"one_of_each"
			) {
				setValue(
					`animals.${stringId}.options.shoulder_roast_size`,
					"whole"
				);
			}
			if (
				getValues(`animals.${stringId}.options.leg`) === "one_of_each"
			) {
				setValue(`animals.${stringId}.options.leg`, "whole");
			}
		}
	};

	return (
		<Collapsible trigger={`Lamb Cut Sheet${id === 0 ? "" : ` #${id + 1}`}`}>
			{/* TODO: */}
			<select>
				{/* TODO: display all OTHER this type of animal for copying from*/}
				<option value="lamb">Lamb 1</option>
			</select>
			<button>Copy from previous added animal</button>
			{/* END TODO */}

			<ConfirmButton {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				{`Delete this ${animalInfo.animal}`}
			</ConfirmButton>

			<Collapsible trigger="Lamb Information">
				TODO: header^^ banner
			</Collapsible>
			<section className="order-form--section">
				<GrowerInfo animalInfo={animalInfo} />

				<RadioForm
					title="Choose One"
					name="info.lamb-amount"
					required={true}
					options={[
						{
							label: "Whole Lamb",
							value: "whole_lamb",
						},
						{
							label: "Half Lamb",
							value: "half_lamb",
						},
					]}
					animalInfo={animalInfo}
					handleChangeOption={handleSetWholeLamb}
				/>
			</section>

			<Collapsible trigger="Lamb Options">
				<div className="order-form--section">
					<OrderFormSectionSubheading>
						Leg of Lamb
					</OrderFormSectionSubheading>
					<SelectForm
						title="Leg of Lamb"
						name="options.leg"
						options={
							wholeLamb
								? [
										{
											label: "Whole",
											value: "whole",
										},
										{
											label: "Cut in Half",
											value: "cut_in_half",
										},
										{
											label: `One of each (Whole Lamb Orders Only)`,
											value: `one_of_each`,
										},
								  ]
								: [
										{
											label: "Whole",
											value: "whole",
										},
										{
											label: "Cut in Half",
											value: "cut_in_half",
										},
								  ]
						}
						animalInfo={animalInfo}
					/>
					<SelectForm
						title="Shoulder Cut Type"
						name="options.shoulder_cut"
						options={[
							{
								label: "All Roasts",
								value: "all_roasts",
							},
							{
								label: "All Shoulder Chops",
								value: "all_chops",
							},
							{
								label: "Half and Half",
								value: "half_roasts_half_chops",
							},
							{
								label: "Grind It",
								value: "ground",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Shoulder Roast Size"
						subtitle="Each Shoulder makes one larger roast or two smaller ones"
						name="options.shoulder_roast_size"
						options={
							wholeLamb
								? [
										{
											label: "Whole",
											value: "whole",
										},
										{
											label: "Cut in Half",
											value: "cut_in_half",
										},
										{
											label: "One of Each (Whole Lamb Orders Only)",
											value: "one_of_each",
										},
										{
											label: "None",
											value: "none",
										},
								  ]
								: [
										{
											label: "Whole",
											value: "whole",
										},
										{
											label: "Cut in Half",
											value: "cut_in_half",
										},
										{
											label: "None",
											value: "none",
										},
								  ]
						}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Shoulder Chops Per Package"
						name="options.shoulder_chops.number_per_package"
						subtitle="Plan one chop per adult serving"
						options={[
							{
								label: "Two (Standard)",
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
								label: "Other (List in special instructions)",
								value: "other",
							},
						]}
						animalInfo={animalInfo}
					/>
					<SelectForm
						title="Shoulder Chop Thickness"
						subtitle="(inches)"
						name="options.shoulder_chops.thickness"
						options={[
							{
								label: `1 (Standard)`,
								value: `1`,
							},
							{
								label: `3/4`,
								value: `3/4`,
							},
						]}
						animalInfo={animalInfo}
					/>

					{/* loin */}

					<SelectForm
						title="Loin Cuts"
						name="options.loin_cuts"
						options={[
							{
								label: "All Lamb Chops",
								value: "all_chops",
							},
							{
								label: "Half Rack of Lamb, Half Lamb Chops",
								value: "half_rack_lamb_half_chops",
							},
						]}
						animalInfo={animalInfo}
					/>

					<div className="order-form--field">
						<SelectForm
							title="Lamb Chops Per Package"
							name="options.lamb_chops.number_per_package"
							subtitle="We do not split the lamb down the back bone so you get butterflied lamb chops - plan one per adult serving"
							options={[
								{
									label: "Two (Standard)",
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
									label: "Other (List in special instructions)",
									value: "other",
								},
							]}
							animalInfo={animalInfo}
						/>
						<SelectForm
							title="Lamb Chop Thickness"
							subtitle="(inches)"
							name="options.lamb_chops.thickness"
							options={[
								{
									label: `1 (Standard)`,
									value: `1`,
								},
								{
									label: `3/4`,
									value: `3/4`,
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>

					<div className="order-form--field">
						<SelectForm
							title="Trim"
							// subtitle="(inches)"
							name="options.trim"
							options={[
								{
									label: `Ground Lamb (includes a few packages of bone in lamb stew)`,
									value: `ground`,
								},
								{
									label: `Lamb Stew (includes a few packages of bone in lamb stew, the rest will be boneless)`,
									value: `lamb_stew`,
								},
							]}
							animalInfo={animalInfo}
						/>

						<SelectForm
							title="Lamb Shanks"
							// subtitle="(inches)"
							name="options.shanks"
							options={[
								{
									label: `Whole`,
									value: `whole`,
								},
								{
									label: `Put into the Ground/Lamb Stew`,
									value: `into_ground`,
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>

					<div className="order-form--field">
						<CheckboxForm
							title="EXTRAS"
							name="organ_meats"
							options={[
								{
									label: "LIVER",
									name: "liver",
								},
								{
									label: "HEART",
									name: "heart",
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>
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

export default LambSection;
