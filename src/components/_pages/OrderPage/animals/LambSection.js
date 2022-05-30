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
				<option value="beef">Lamb 1</option>
			</select>
			<button>Copy from previous added animal</button>
			{/* END TODO */}

			<ConfirmButton {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				{`Delete this ${animalInfo.animal}`}
			</ConfirmButton>

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
						subtext="Each Shoulder makes one larger roast or two smaller ones"
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
						name="options.shoulder_chops_count"
						subtext="One chop per adult serving"
						extra
						options={[
							{
								label: "NONE",
								value: "NONE",
							},
							{
								label: "WHOLE ROUND into Jerky",
								value: "WHOLE ROUND into Jerky",
							},
							{
								label: "HALF ROUND into Jerky",
								value: "HALF ROUND into Jerky",
							},
							{
								label: "GRIND",
								value: "GRIND",
							},
							{
								label: "ROASTS",
								value: "ROASTS",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Tenderloin"
						name="steak.extra.tenderloin"
						subtext={`The eye of the loin taken out
					separately from the T-Bone and
					Sirloin steaks and cut 1 1/2"
					thick or made into Roast`}
						extra
						options={[
							{
								label: "NONE",
								value: "NONE",
							},
							{
								label: "STEAKS",
								value: "STEAKS",
							},
							{
								label: "ROASTS",
								value: "ROASTS",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Flank Steak"
						name="steak.flank_steak"
						subtext={`One flank steak per
					half-lengthwise grain-sliced and
					used in stir fry or fajitas; may be
					put into hamburger instead`}
						options={[
							{
								label: "YES",
								value: "YES",
							},
							{
								label: "NO",
								value: "NO",
							},
						]}
						animalInfo={animalInfo}
					/>
				</div>
			</Collapsible>
			<Collapsible trigger="Roast Options">
				<div className="order-form--section">
					<OrderFormSectionSubheading>
						Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin
						Tip and, Heel of Round
					</OrderFormSectionSubheading>

					<SelectForm
						title="Roast Size"
						name="roast.size"
						subtext="We suggest a 3-4# roast
						for a family of 2-4"
						options={[
							{
								label: "3-4#",
								value: "3-4#",
							},
							{ label: "4-5#", value: "4-5#" },
							{
								label: "5-6#",
								value: "5-6#",
							},
							{
								label: "NONE",
								value: "NONE",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Boneless Roasts"
						name="roast.boneless"
						subtext="5-7 of the better
						roasts per half beef are boned,
						rolled and tied - otherwise you get
						the same roasts with the bone left
						in"
						extra
						options={[
							{
								label: "NO",
								value: "NO",
							},
							{ label: "YES", value: "YES" },
						]}
						animalInfo={animalInfo}
					/>
					<SelectForm
						title="Rib Options"
						name="roast.rib_options"
						options={[
							{
								label: "ALL RIB STEAKS",
								value: "ALL RIB STEAKS",
							},
							{
								label: "ALL RIB ROASTS",
								value: "ALL RIB ROASTS",
							},
							{
								label: "HALF ROASTS HALF STEAKS",
								value: "HALF ROASTS HALF STEAKS",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Chuck Options"
						name="roast.chuck_options"
						options={[
							{
								label: "ALL CHUCK ROASTS (pot roasts)",
								value: "ALL CHUCK ROASTS (pot roasts)",
							},
							{
								label: "ALL CHUCK STEAKS",
								value: "ALL CHUCK STEAKS",
							},
							{
								label: "HALF CHUCK ROASTS HALF STEAKS",
								value: "HALF CHUCK ROASTS HALF STEAKS",
							},
							{
								label: "GRIND",
								value: "GRIND",
							},
						]}
						animalInfo={animalInfo}
					/>

					<CheckboxForm
						title="Remove Bone Dust"
						name="remove_bone_dust"
						subtext="Bone dust is a residue left from bone and fat when meat is run through the saw [like saw dust], it has no effect on the meat other than looks"
						extra
						options={[
							{
								name: "roast.remove_bone_dust__checkbox",
								label: "YES Remove Bone Dust",
							},
						]}
						animalInfo={animalInfo}
					/>
				</div>
			</Collapsible>
			<Collapsible trigger="Other Cut Options">
				<div className="order-form--section">
					<OrderFormSectionSubheading>
						More options for your cuts
					</OrderFormSectionSubheading>

					<SelectForm
						title="Boneless Stew Meat"
						name="other.boneless_stew_meat"
						options={[
							{
								label: "YES (standard is 6-8 packages)",
								value: "YES (standard is 6-8 packages)",
							},
							{
								label: "NO (meat goes into hamburger)",
								value: "NO (meat goes into hamburger)",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Soup Bones"
						name="other.soup_bones"
						options={[
							{
								label: "YES (standard is 4-5 packages)",
								value: "YES (standard is 4-5 packages)",
							},
							{
								label: "NO (meat goes into hamburger)",
								value: "NO (meat goes into hamburger)",
							},
						]}
						animalInfo={animalInfo}
					/>

					<SelectForm
						title="Short Ribs"
						name="other.short_ribs"
						options={[
							{
								label: "YES (standard is 4-5 packages)",
								value: "YES (standard is 4-5 packages)",
							},
							{
								label: "NO (meat goes into hamburger)",
								value: "NO (meat goes into hamburger)",
							},
						]}
						animalInfo={animalInfo}
					/>

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

					<InputForm
						title="SPECIAL INSTRUCTIONS"
						name="special_instructions"
						placeholder="Enter special instructions for certain options here"
						animalInfo={animalInfo}
						textarea={true}
					/>
				</div>
			</Collapsible>
		</Collapsible>
	);
}

export default LambSection;
