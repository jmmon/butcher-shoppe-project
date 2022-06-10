import React, { useState } from "react";
import Collapsible from "react-collapsible";
import CheckboxForm from "../FormComponents/CheckboxForm/CheckboxForm";
import LabelForm from "../FormComponents/Labels/LabelForm/LabelForm";
import InputForm from "../FormComponents/InputForm/InputForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading/OrderFormSectionSubheading";
import SelectForm from "../FormComponents/SelectForm/SelectForm";
import RadioForm from "../FormComponents/RadioForm/RadioForm";
import ConfirmButton from "../../../Button/ConfirmButton";
import Button from "../../../Button/Button";
import GrowerInfo from "../FormComponents/GrowerInfo";

const animal = "beef";

function BeefSection({ id, deleteAnimal }) {
	id = +id;
	const animalInfo = { id: id, animal: animal };
	const stringId = `${animal}_${id}}`;

	const [splitHalf, setSplitHalf] = useState(
		window.localStorage.getItem("orderForm")?.animals?.[stringId]?.[
			"info"
		]?.["beef_amount"] === "split_half" || false
	);

	const handleSplitHalf = (e) => {
		const { id } = e.target;
		setSplitHalf(id === "split_half");
	};

	return (
		<Collapsible trigger={`Beef Cut Sheet${id === 0 ? "" : ` #${id + 1}`}`}>
			{/* TODO: */}
			<h4>Copy From Another Animal:</h4>
			<select>
				{/* TODO: display all OTHER this type of animal for copying from*/}
				<option value="beef">Beef 1</option>
			</select>
			<Button>Copy from previous added animal</Button>
			{/* END TODO */}

			<ConfirmButton {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				{`Delete this ${animalInfo.animal}`}
			</ConfirmButton>

			<Collapsible trigger="Cow Information">
				TODO: header^^ banner
			</Collapsible>
			<section className="order-form--section">
				<GrowerInfo animalInfo={animalInfo} />

				<RadioForm
					title="Choose One"
					name="info.beef_amount"
					required={true}
					options={[
						{
							label: "WHOLE BEEF",
							value: "whole",
						},
						{
							label: "HALF BEEF",
							value: "half",
						},
						{
							label: "HIND QUARTER",
							value: "hind_quarter",
						},
						{
							label: "FRONT QUARTER",
							value: "front_quarter",
						},
						{
							label: "SPLIT HALF *Additional fee-See price list",
							value: "split_half",
						},
					]}
					animalInfo={animalInfo}
					handleChangeOption={handleSplitHalf}
				/>
			</section>

			<section
				className={`order-form--section  ${
					splitHalf
						? "beef--split-half-section--show"
						: "beef--split-half-section"
				}`}
				id="split-half--contact-info"
			>
				{splitHalf && (
					<>
						<div className="order-form--field">
							<h3 className="order-form--title">Contact Info</h3>
							<OrderFormSectionSubheading>
								for the other person, if splitting half
							</OrderFormSectionSubheading>

							<LabelForm title="Name" />
							<InputForm
								title="First"
								name="beef.split_half.name.first"
								placeholder="First name"
								required={
									splitHalf && {
										required: {
											value: true,
											message:
												"Please enter the other person's first name",
										},
										pattern: {
											value: /^[a-zA-Z]+$/,
											message:
												"Only letters for names, please",
										},
									}
								}
								small={true}
								animalInfo={animalInfo}
							/>
							<InputForm
								title="Last"
								name="beef.split_half.name.last"
								placeholder="Last name"
								required={
									splitHalf && {
										required: {
											value: true,
											message:
												"Please enter the other person's last name",
										},
										pattern: {
											value: /^[a-zA-Z]+$/,
											message:
												"Only letters for names, please",
										},
									}
								}
								small={true}
								animalInfo={animalInfo}
							/>
						</div>

						<InputForm
							title="Phone Number"
							name="beef.split_half.phone_number"
							placeholder="10 digit phone number"
							required={
								splitHalf && {
									required: {
										value: true,
										message: "A phone number is required",
									},
									pattern: {
										value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
										message:
											"Please use a valid phone number",
									},
								}
							}
							small={true}
						/>
					</>
				)}
			</section>

			<Collapsible trigger="Steak Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Standard Steaks are Rib, T-Bone, Sirloin, Round, and
						Flank
					</OrderFormSectionSubheading>
					<div className="order-form--field">
						<SelectForm
							title="Steak Thickness"
							name="steak.thickness"
							subtitle="(inches)"
							options={[
								{
									label: "3/4 (Standard)",
									value: "3/4",
								},
								{ label: "1", value: "1" },
								{
									label: "1 1/4",
									value: "1 1/4",
								},
								{
									label: "OTHER (List in special instructions)",
									value: "OTHER",
								},
								{
									label: "NONE",
									value: "NONE",
								},
							]}
							animalInfo={animalInfo}
							// className="order-form--field"
						/>
						<SelectForm
							title="Number of Steaks Per Package"
							name="steak.number_per_package"
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
					</div>

					<div className="order-form--field">
						<SelectForm
							title="Tenderized Round Steaks"
							name="steak.extra.tenderized_round_steaks"
							subtitle="Steaks are run through the cuber
					(similar to pounding them)"
							costsExtra
							options={[
								{
									label: "NONE",
									value: "NONE",
								},
								{
									label: "HALF",
									value: "HALF",
								},
								{
									label: "ALL",
									value: "ALL",
								},
							]}
							animalInfo={animalInfo}
						/>

						<SelectForm
							title="Other Round Steak Options"
							name="steak.extra.round_steaks"
							subtitle="Round steaks can also be put
					into hamburger, made into roasts
					or or made into Jerky"
							costsExtra
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
					</div>

					<div className="order-form--field">
						<SelectForm
							title="Tenderloin"
							name="steak.extra.tenderloin"
							subtitle={`The eye of the loin taken out
					separately from the T-Bone and
					Sirloin steaks and cut 1 1/2"
					thick or made into Roast`}
							costsExtra
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
							subtitle={`One flank steak per
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
				</section>
			</Collapsible>
			<Collapsible trigger="Roast Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin
						Tip and, Heel of Round
					</OrderFormSectionSubheading>

					<div className="order-form--field">
						<SelectForm
							title="Boneless Roasts"
							name="roast.boneless"
							subtitle="5-7 of the better
						roasts per half beef are boned,
						rolled and tied - otherwise you get
						the same roasts with the bone left
						in"
							costsExtra
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
							title="Roast Size"
							name="roast.size"
							subtitle="We suggest a 3-4# roast
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
					</div>
					<div className="order-form--field">
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
					</div>
					<CheckboxForm
						title="Remove Bone Dust"
						name="remove_bone_dust"
						subtitle="Bone dust is a residue left from bone and fat when meat is run through the saw [like saw dust], it has no effect on the meat other than looks"
						costsExtra
						options={[
							{
								name: "roast.remove_bone_dust__checkbox",
								label: "YES Remove Bone Dust",
							},
						]}
						animalInfo={animalInfo}
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Ground Beef Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Choose your ground beef options
					</OrderFormSectionSubheading>

					<div className="order-form--field">
						<SelectForm
							title="Ground Beef Package Size"
							name="ground_beef.package_size"
							options={[
								{
									label: "1 1/2#",
									value: "1 1/2#",
								},
								{
									label: "2#",
									value: "2#",
								},
								{
									label: "1# *Additional fee - See Price List",
									value: "1# *Additional fee - See Price List",
								},
							]}
							animalInfo={animalInfo}
						/>

						<SelectForm
							title="Ground Beef Patties"
							name="ground_beef.patties"
							subtitle="1/4# patties, 30# minimum"
							costsExtra
							options={[
								{
									label: "NO",
									value: "NO",
								},
								{
									label: "4 patties per pkg",
									value: "4 patties per pkg",
								},
								{
									label: "5 patties per pkg",
									value: "5 patties per pkg",
								},
								{
									label: "6 patties per pkg",
									value: "6 patties per pkg",
								},
								{
									label: "7 patties per pkg",
									value: "7 patties per pkg",
								},
								{
									label: "8 patties per pkg",
									value: "8 patties per pkg",
								},
							]}
							animalInfo={animalInfo}
						/>
					</div>
				</section>
			</Collapsible>
			<Collapsible trigger="Other Cut Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						More options for your cuts
					</OrderFormSectionSubheading>
					<div className="order-form--field">
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
					</div>
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
						name="beef-extras"
						options={[
							{
								name: "extras.liver__checkbox",
								label: "LIVER",
							},
							{
								name: "extras.heart__checkbox",
								label: "HEART",
							},
							{
								name: "extras.tongue__checkbox",
								label: "TONGUE",
							},
							{
								name: "extras.oxtail__checkbox",
								label: "OXTAIL",
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
				</section>
			</Collapsible>
		</Collapsible>
	);
}

export default BeefSection;
