import React from "react";
import Collapsible from "react-collapsible";
import ConfirmButton from "../../../Button/ConfirmButton";
import CheckboxForm from "../FormComponents/CheckboxForm";
import InputForm from "../FormComponents/InputForm";
import LabelForm from "../FormComponents/LabelForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading";
import RadioForm from "../FormComponents/RadioForm";
import SelectForm from "../FormComponents/SelectForm";

function LambSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, animal: "lamb" };
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

			{/* Lamb Options:
			
					Leg of Lamb: {
						Whole
						Cut in Half,
						One of Each (Whole Orders Only!)
					}

					Shoulder: {
						Roasts
						Chops
						Half/Half
						Grind
					}:
						(IF ROASTS): { 
							Size: {
								Whole
								Cut in Half,
								One of Each (Whole Orders Only!)
							}
						}
						(IF CHOPS): { 
							NumPerPackage: {
								2+
							},
							ChopThickness: {
								1", or 3/4"
							}
						}


			*/}

			{/* Loin Options 
			
					Loin Cut: {
						All Lamb Chops
						Half Rack of Lamb, Half Chops
					}
					Chops Per Package:{
						2+
					}
					Chop Thickness: {

					}

			*/}

			{/* Other Options
			
					Trim: {
						Ground Lamb (with few packages of bone-in lamb stew)
						Lamb Stew (with few packages of bone-in stew, the rest is boneless stew)

					}
					Lamb Shanks: {
						Whole
						Put into the Ground/Lamb Stew
					}
					Extras: {
						Liver?
						Heart?
					}
			*/}

			<Collapsible
				trigger="Lamb Information"
				// classParentString="cut_sheet__section"
				// triggerClassName="cut_sheet__section__trigger"
				// contentOuterClassName="cut_sheet__section__content_outer"
			>
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
						name="info.lamb-amount"
						required={true}
						options={[
							{
								inputId: "whole",
								label: "Whole Lamb",
							},
							{
								inputId: "half",
								label: "Half Lamb",
							},
						]}
						animalInfo={animalInfo}
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Lamb Options">
				<div className="order-form--section">
					<OrderFormSectionSubheading>
						Leg of Lamb
					</OrderFormSectionSubheading>
					<SelectForm
						title="Leg of Lamb"
						name="options.leg"
						options={[
							{
								label: "Whole",
								value: "Whole",
							},
							{ label: "Cut in Half", value: "Cut in Half" },
							{
								label: `One of each (Whole Lamb Orders Only)`,
								value: `One of each (Whole Lamb Orders Only)`,
							},
						]}
						animalInfo={animalInfo}
					/>
					<SelectForm
						title="Shoulder Cut Type"
						name="options.shoulder_cut"
						options={[
							{
								label: "All Roasts",
								value: "All Roasts",
							},
							{
								label: "All Shoulder Chops",
								value: "All Shoulder Chops",
							},
							{
								label: "Half and Half",
								value: "Half and Half",
							},
							{
								label: "Grind",
								value: "Grind",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Shoulder Roast Size"
						name="options.shoulder_roast_size"
						subtitle="Each Shoulder makes one larger roast or two smaller ones"
						options={[
							{
								label: "Whole",
								value: "Whole",
							},
							{
								label: "Cut in Half",
								value: "Cut in Half",
							},
							{
								label: "One of Each (Whole Lamb Orders Only)",
								value: "One of Each (Whole Lamb Orders Only)",
							},
							{
								label: "NONE",
								value: "NONE",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Shoulder Chops Per Package"
						name="options.shoulder_chops.number_per_package"
						subtitle="Plan one chop per adult serving"
						options={[
							{
								label: "TWO (Standard)",
								value: "TWO",
							},
							{
								label: "THREE",
								value: "THREE",
							},
							{
								label: "FOUR",
								value: "FOUR",
							},
							{
								label: "OTHER (List in special instructions)",
								value: "OTHER",
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
								value: "All Lamb Chops",
							},
							{
								label: "Half Rack of Lamb, Half Lamb Chops",
								value: "Half Rack of Lamb, Half Lamb Chops",
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
									label: "TWO (Standard)",
									value: "TWO",
								},
								{
									label: "THREE",
									value: "THREE",
								},
								{
									label: "FOUR",
									value: "FOUR",
								},
								{
									label: "OTHER (List in special instructions)",
									value: "OTHER",
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
									value: `Ground Lamb (includes a few packages of bone in lamb stew)`,
								},
								{
									label: `Lamb Stew (includes a few packages of bone in lamb stew, the rest will be boneless)`,
									value: `Lamb Stew (includes a few packages of bone in lamb stew, the rest will be boneless)`,
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
									value: `Whole`,
								},
								{
									label: `Put into the Ground/Lamb Stew`,
									value: `Put into the Ground/Lamb Stew`,
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>

					<div className="order-form--field">
						<CheckboxForm
							title="EXTRAS"
							name="options.extras"
							options={[
								{
									name: "extras.liver__checkbox",
									label: "LIVER",
								},
								{
									name: "extras.heart__checkbox",
									label: "HEART",
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
