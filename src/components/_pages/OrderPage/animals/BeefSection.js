import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import CheckboxForm from "../FormComponents/CheckboxForm";
import LabelForm from "../FormComponents/LabelForm";
import InputForm from "../FormComponents/InputForm";
import OrderFormSectionSubheading from "../FormComponents/OrderFormSectionSubheading";
import SelectForm from "../FormComponents/SelectForm";
import RadioForm from "../FormComponents/RadioForm";

function BeefSection({ id, deleteAnimal }) {
	const animalInfo = { id: id, animal: "beef" };

	const storage = window.localStorage.getItem("orderForm");
	const findSplitHalf = "beef_" + id + "_split_half_beef__checkbox";

	const [splitHalf, setSplitHalf] = useState(
		storage ? JSON.parse(storage)[findSplitHalf] : false
	);

	const handleSplitHalf = (e) => {
		const { id } = e.target;
		setSplitHalf(id === "split_half_beef__checkbox");
	};

	useEffect(() => {
		console.log("splitHalf:", splitHalf);
	}, [splitHalf]);

	return (
		<Collapsible trigger={`Beef Cut Sheet #${id}`}>
			{/* TODO: */}
			<select>
				<option value="beef">Beef 1</option>
			</select>
			<button>Copy from previous added animal</button>

			<button {...animalInfo} onClick={(e) => deleteAnimal(e)}>
				Delete this beef (should have confirmation just in case)
			</button>
			{/* END TODO */}

			<Collapsible trigger="Cow Information">
				<section className="order-form--section">
					<div className="order-form--field">
						<LabelForm title="Grower Name" />
						<InputForm
							name="grower_name_first"
							placeholder="First name"
							small={true}
							animalInfo={animalInfo}
						>
							First
						</InputForm>
						<InputForm
							name="grower_name_last"
							placeholder="Last name"
							small={true}
							animalInfo={animalInfo}
						>
							Last
						</InputForm>
					</div>

					<InputForm
						name="grower_ear_tag_number"
						placeholder="Ear tag number"
						animalInfo={animalInfo}
					>
						Ear Tag Number (if applicable)
					</InputForm>

					{/* <CheckboxForm
						title="Choose One"
						name="beef-amount"
						required={true}
						individual={true}
						options={[
							{
								name: "whole_beef__checkbox",
								label: "WHOLE BEEF",
							},
							{
								name: "half_beef__checkbox",
								label: "HALF BEEF",
							},
							{
								name: "hind_quarter_beef__checkbox",
								label: "HIND QUARTER",
							},
							{
								name: "front_quarter_beef__checkbox",
								label: "FRONT QUARTER",
							},
							{
								name: "split_half_beef__checkbox",
								label: "SPLIT HALF *Additional fee-See price list",
								handleSplitHalf: handleSplitHalf,
							},
						]}
						animalInfo={animalInfo}
					/> */}

					<RadioForm
						title="Choose One"
						name="beef-amount-2"
						required={true}
						options={[
							{
								inputId: "whole_beef__checkbox",
								label: "WHOLE BEEF",
							},
							{
								inputId: "half_beef__checkbox",
								label: "HALF BEEF",
							},
							{
								inputId: "hind_quarter_beef__checkbox",
								label: "HIND QUARTER",
							},
							{
								inputId: "front_quarter_beef__checkbox",
								label: "FRONT QUARTER",
							},
							{
								inputId: "split_half_beef__checkbox",
								label: "SPLIT HALF *Additional fee-See price list",
							},
						]}
						animalInfo={animalInfo}
						handleSplitHalf={handleSplitHalf}
					/>
				</section>

				{splitHalf && (
					<section
						className="order-form--section"
						id="split-half--contact-info"
					>
						<div className="order-form--field">
							<h3 className="order-form--title">Contact Info</h3>
							<OrderFormSectionSubheading>
								for the other person, if splitting half
							</OrderFormSectionSubheading>

							<LabelForm title="Name" />
							<InputForm
								name="split_half_name_first"
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
							>
								First
							</InputForm>
							<InputForm
								name="split_half_name_last"
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
							>
								Last
							</InputForm>
						</div>

						<InputForm
							name="split_half_phone"
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
						>
							Phone Number
						</InputForm>
					</section>
				)}
			</Collapsible>
			<Collapsible trigger="Steak Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Standard Steaks are Rib, T-Bone, Sirloin, Round, and
						Flank
					</OrderFormSectionSubheading>
					<SelectForm
						name="steak_thickness"
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
					>
						Steak Thickness
					</SelectForm>
					<SelectForm
						name="steaks_per_package"
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
					>
						Number of Steaks Per Package
					</SelectForm>

					<SelectForm
						name="tenderized_round_steaks"
						subtext="Steaks are run through the cuber
					(similar to pounding them)"
						extra
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
					>
						Tenderized Round Steaks
					</SelectForm>

					<SelectForm
						name="round_steaks_extra"
						subtext="Round steaks can also be put
					into hamburger, made into roasts
					or or made into Jerky"
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
					>
						Other Round Steak Options
					</SelectForm>

					<SelectForm
						name="tenderloin_extra"
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
					>
						Tenderloin
					</SelectForm>

					<SelectForm
						name="flank_steak"
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
					>
						Flank Steak
					</SelectForm>
				</section>
			</Collapsible>
			<Collapsible trigger="Roast Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin
						Tip and, Heel of Round
					</OrderFormSectionSubheading>

					<SelectForm
						name="roast_size"
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
					>
						Roast Size
					</SelectForm>

					<SelectForm
						name="roast_boneless"
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
					>
						Boneless Roasts
					</SelectForm>
					<SelectForm
						name="rib_options"
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
					>
						Rib Options
					</SelectForm>

					<SelectForm
						name="chuck_options"
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
					>
						Chuck Options
					</SelectForm>

					<CheckboxForm
						title="Remove Bone Dust"
						name="remove_bone_dust"
						subtext="Bone dust is a residue left from bone and fat when meat is run through the saw [like saw dust], it has no effect on the meat other than looks"
						extra
						options={[
							{
								name: "remove_bone_dust__checkbox",
								label: "YES Remove Bone Dust",
							},
						]}
						animalInfo={animalInfo}
					/>

					<InputForm
						name="special_instructions"
						placeholder="Enter special instructions for certain options here"
						animalInfo={animalInfo}
						textarea={true}

						// setValue because plain register seems to block text from being entered for some reason
					>
						SPECIAL INSTRUCTIONS
					</InputForm>
				</section>
			</Collapsible>
			<Collapsible trigger="Ground Beef Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						Choose your ground beef options
					</OrderFormSectionSubheading>

					<SelectForm
						name="ground_beef_package_size"
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
					>
						Ground Beef Package Size
					</SelectForm>

					<SelectForm
						name="ground_beef_patties"
						subtext="1/4# patties, 30# minimum"
						extra
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
					>
						Ground Beef Patties
					</SelectForm>

					<CheckboxForm
						title="EXTRAS"
						name="beef-extras"
						options={[
							{
								name: "extras_liver__checkbox",
								label: "LIVER",
							},
							{
								name: "extras_heart__checkbox",
								label: "HEART",
							},
							{
								name: "extras_tongue__checkbox",
								label: "TONGUE",
							},
							{
								name: "extras_oxtail__checkbox",
								label: "OXTAIL",
							},
						]}
						animalInfo={animalInfo}
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Other Cut Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading>
						More options for your cuts
					</OrderFormSectionSubheading>

					<SelectForm
						name="boneless_stew_meat"
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
					>
						Boneless Stew Meat
					</SelectForm>

					<SelectForm
						name="soup_bones"
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
					>
						Soup Bones
					</SelectForm>

					<SelectForm
						name="short_ribs"
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
					>
						Short Ribs
					</SelectForm>
				</section>
			</Collapsible>
		</Collapsible>
	);
}

export default BeefSection;
