import React, { useState } from "react";
import Collapsible from "react-collapsible";
import CheckboxForm from "../FormComponents/CheckboxForm";
import InputForm from "../FormComponents/InputForm";
import SelectForm from "../FormComponents/SelectForm";

function OrderFormSectionSubheading({ text }) {
	return (
		<div className="order-form--section-subheading-container">
			<ul className="order-form--section-subheading">
				{/* <span class="dot" /> */}
				<li>{text}</li>
			</ul>
			<hr />
		</div>
	);
}

function OrderFormLabelAndSubtext({ text, subtext, name, extra }) {
	return (
		<label htmlFor={name} className="order-form--label">
			{text} {extra && <span className="form-special-extra">*</span>}
			{extra && (
				<>
					<br />
					<span className="form-special-extra">
						* Additional Fee - See Price List
					</span>
				</>
			)}
			{subtext && (
				<>
					<br />
					<span className="order-form--label-subtext">{subtext}</span>
				</>
			)}
		</label>
	);
}

function BeefSection({ register, errors, setValue }) {
	const [split, setSplit] = useState(false);

	const handleSplit = (e) => {
		// e.preventDefault();
		setSplit(!split);
	};

	return (
		<Collapsible trigger="Beef Cut Sheet">
			<select>
				<option value="beef">Beef 1</option>
			</select>
			<button>Copy from previous added animal</button>
			<Collapsible trigger="Steak Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading
						text={
							"Standard Steaks are Rib, T-Bone, Sirloin, Round, and Flank"
						}
					/>
					<SelectForm
						label="Steak Thickness"
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
						register={register}
						errors={errors}
					/>
					<SelectForm
						label="Number of Steaks Per Package"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Tenderized Round Steaks"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Other Round Steak Options"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Tenderloin"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Flank Steak"
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
						register={register}
						errors={errors}
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Roast Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading
						text={
							"Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin Tip and, Heel of Round"
						}
					/>

					<SelectForm
						label="Roast Size"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Boneless Roasts"
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
						register={register}
						errors={errors}
					/>
					<SelectForm
						label="Rib Options"
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
						register={register}
						errors={errors}
					/>

					<SelectForm
						label="Chuck Options"
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
						register={register}
						errors={errors}
					/>

					<CheckboxForm
						label="Remove Bone Dust"
						fieldName="remove_bone_dust"
						subtext="Bone dust is a residue left from bone and fat when meat is run through the saw [like saw dust], it has no effect on the meat other than looks"
						extra
						options={[
							{
								name: "remove_bone_dust__checkbox",
								value: "YES Remove Bone Dust",
							},
						]}
						register={register}
						errors={errors}
					/>

					<InputForm
						textarea={true}
						label="SPECIAL INSTRUCTIONS"
						name="special_instructions"
						placeholder="Enter special instructions for certain options here"
						errors={errors}
						setValue={setValue}
						// setValue because plain register seems to block text from being entered for some reason
					/>
				</section>
			</Collapsible>
			<Collapsible trigger="Ground Beef Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading
						text={"Choose your ground beef options"}
					/>
					<div className="order-form--field">
						<label
							htmlFor="ground_beef_package_size"
							className="order-form--label"
						>
							Ground Beef Package Size
						</label>

						<select
							name="ground_beef_package_size"
							id="ground_beef_package_size"
							className="order-form--select"
						>
							<option value="1 1/2#">1 1/2#</option>
							<option value="2#">2#</option>
							<option value="1# *Additional fee - See Price List">
								1# *Additional fee - See Price List
							</option>
						</select>
					</div>

					<div className="order-form--field">
						<OrderFormLabelAndSubtext
							name="ground_beef_pattiest"
							text="Ground Beef Patties"
							subtext="1/4# patties,
											30# minimum"
							extra
						/>

						<select
							name="ground_beef_patties"
							id="ground_beef_patties"
							className="order-form--select"
						>
							<option value="NO">NO</option>
							<option value="4 patties per pkg">
								4 patties per pkg
							</option>
							<option value="5 patties per pkg">
								5 patties per pkg
							</option>
							<option value="6 patties per pkg">
								6 patties per pkg
							</option>
							<option value="7 patties per pkg">
								7 patties per pkg
							</option>
							<option value="8 patties per pkg">
								8 patties per pkg
							</option>
						</select>
					</div>

					<div className="order-form--field">
						<label
							htmlFor="beef-extras"
							className="order-form--label"
						>
							EXTRAS
						</label>

						<div className="order-form--checkbox-container">
							<input
								className="order-form--checkbox"
								type="checkbox"
								id="extras_liver__checkbox"
								name="extras_liver__checkbox"
							/>
							<label htmlFor="extras_liver__checkbox">
								LIVER
							</label>

							<input
								className="order-form--checkbox"
								type="checkbox"
								id="extras_heart__checkbox"
								name="extras_heart__checkbox"
							/>
							<label htmlFor="extras_heart__checkbox">
								HEART
							</label>

							<input
								className="order-form--checkbox"
								type="checkbox"
								id="extras_tongue__checkbox"
								name="extras_tongue__checkbox"
							/>
							<label htmlFor="extras_tongue__checkbox">
								TONGUE
							</label>

							<input
								className="order-form--checkbox"
								type="checkbox"
								id="extras_oxtail__checkbox"
								name="extras_oxtail__checkbox"
							/>
							<label htmlFor="extras_oxtail__checkbox">
								OXTAIL
							</label>
						</div>
					</div>
				</section>
			</Collapsible>
			<Collapsible trigger="Other Cut Options">
				<section className="order-form--section">
					<OrderFormSectionSubheading
						text={"More options for your cuts"}
					/>

					<div className="order-form--field">
						<label
							htmlFor="boneless_stew_meat"
							className="order-form--label"
						>
							Boneless Stew Meat
						</label>

						<select
							name="boneless_stew_meat"
							id="boneless_stew_meat"
							className="order-form--select"
						>
							<option value="YES (standard is 6-8 packages)">
								YES (standard is 6-8 packages)
							</option>
							<option value="NO (meat goes into hamburger)">
								NO (meat goes into hamburger)
							</option>
						</select>
					</div>

					<div className="order-form--field">
						<label
							htmlFor="soup_bones"
							className="order-form--label"
						>
							Soup Bones
						</label>

						<select
							name="soup_bones"
							id="soup_bones"
							className="order-form--select"
						>
							<option value="YES (standard is 4-5 packages)">
								YES (standard is 4-5 packages)
							</option>
							<option value="NO (meat goes into hamburger)">
								NO (meat goes into hamburger)
							</option>
						</select>
					</div>

					<div className="order-form--field">
						<label
							htmlFor="short_ribs"
							className="order-form--label"
						>
							Short Ribs
						</label>

						<select
							name="short_ribs"
							id="short_ribs"
							className="order-form--select"
						>
							<option value="YES (standard is 4-5 packages)">
								YES (standard is 4-5 packages)
							</option>
							<option value="NO (meat goes into hamburger)">
								NO (meat goes into hamburger)
							</option>
						</select>
					</div>
				</section>
			</Collapsible>
			<Collapsible trigger="Cow Information">
				<section className="order-form--section">
					<div className="order-form--field">
						<label className="order-form--label">Grower Name</label>

						<div className="order-form--input-container order-form--input-container-small">
							<label
								htmlFor="grower_name_first"
								className="order-form--label-small"
							>
								First
							</label>
							<input
								type="text"
								className="order-form--input"
								id="grower_name_first"
								name="grower_name_first"
								placeholder="First name"
							/>
						</div>

						<div className="order-form--input-container order-form--input-container-small">
							<label
								htmlFor="grower_name_last"
								className="order-form--label-small"
							>
								Last
							</label>
							<input
								type="text"
								className="order-form--input"
								id="grower_name_last"
								name="grower_name_last"
								placeholder="Last name"
							/>
						</div>
					</div>

					<div className="order-form--field">
						<label className="order-form--label">
							Ear Tag Number (if applicable)
						</label>

						<input
							type="text"
							className="order-form--input"
							id="ear_tag_number"
							name="ear_tag_number"
							placeholder="Ear tag number"
						/>
					</div>

					<div className="order-form--field">
						<label
							htmlFor="beef-amount"
							className="order-form--label"
						>
							Choose Any
							<span className="form-required">*</span>
						</label>
						<div className="order-form--checkbox-wrapper">
							<div className="order-form--checkbox-container">
								<input
									className="order-form--checkbox"
									type="checkbox"
									id="beef_whole__checkbox"
									name="beef_whole__checkbox"
								/>
								<label htmlFor="beef_whole__checkbox">
									WHOLE BEEF
								</label>
							</div>

							<div className="order-form--checkbox-container">
								<input
									className="order-form--checkbox"
									type="checkbox"
									id="beef_half__checkbox"
									name="beef_half__checkbox"
								/>
								<label htmlFor="beef_half__checkbox">
									HALF BEEF
								</label>
							</div>

							<div className="order-form--checkbox-container">
								<input
									className="order-form--checkbox"
									type="checkbox"
									id="hind_quarter__checkbox"
									name="hind_quarter__checkbox"
								/>
								<label htmlFor="hind_quarter__checkbox">
									HIND QUARTER
								</label>
							</div>

							<div className="order-form--checkbox-container">
								<input
									className="order-form--checkbox"
									type="checkbox"
									id="front_quarter__checkbox"
									name="front_quarter__checkbox"
								/>
								<label htmlFor="front_quarter__checkbox">
									FRONT QUARTER
								</label>
							</div>

							<div className="order-form--checkbox-container">
								<input
									className="order-form--checkbox"
									type="checkbox"
									id="split_half__checkbox"
									name="split_half__checkbox"
									value={split}
									// checked={split}
									onChange={handleSplit}
								/>
								<label htmlFor="split_half__checkbox">
									SPLIT HALF *Additional fee-See price list
								</label>
							</div>
						</div>
					</div>
				</section>
				{split && (
					<section
						className="order-form--section"
						id="split-half--contact-info"
					>
						<div className="order-form--field">
							<h3 className="order-form--title">Contact Info</h3>
							<OrderFormSectionSubheading text="for the other person, if splitting half" />

							<label className="order-form--label">Name</label>

							<div className="order-form--input-container order-form--input-container-small">
								<label
									htmlFor="split_half_first"
									className="order-form--label-small"
								>
									First
								</label>
								<input
									type="text"
									className="order-form--input"
									id="split_half_first"
									name="split_half_first"
									placeholder="First name"
								/>
							</div>

							<div className="order-form--input-container order-form--input-container-small">
								<label
									htmlFor="split_half_last"
									className="order-form--label-small"
								>
									Last
								</label>
								<input
									type="text"
									className="order-form--input"
									id="split_half_last"
									name="split_half_last"
									placeholder="Last name"
								/>
							</div>
						</div>

						<div className="order-form--field">
							<label
								htmlFor="split_half_phone"
								className="order-form--label"
							>
								Phone Number
							</label>

							<input
								type="text"
								className="order-form--input"
								id="split_half_phone"
								name="split_half_phone"
								placeholder="Phone number"
							/>
						</div>
					</section>
				)}
			</Collapsible>
		</Collapsible>
	);
}

export default BeefSection;
