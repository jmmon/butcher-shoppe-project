import React, { useState } from "react";
import "./BeefOrder.css";
import PageTitle from "../PageTitle.js";

import bgImage from "../../assets/images/image-1-3.jpg";

import { Accordion, AccordionItem } from "react-sanfona";

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

function BeefOrder() {
	const [input, setInput] = useState({
		steak_thickness: "",
		steak_thickness: "",
	});

	const [split, setSplit] = useState(false);

	// const [expand, setExpand] = useState({
	// 	steakOptions: true,
	// 	roastOptions: false,

	// })

	const handleSplit = (e) => {
		// e.preventDefault();
		setSplit(!split);
	};

	const [activeClickedItems, setActiveClickItems] = useState([]);

	const handleExpand = (e) => {
		e.preventDefault();
		console.log(e.target.name);
	};

	const handleClick = () => {};

	return (
		<>
			<PageTitle
				heading="Select Your Beef Cut Options"
				bgImage={bgImage}
				smaller="true"
				position="50% 50%"
			/>

			{/* <div className="order-form--heading-container">
				<h3 className="order-form--title">
					Select Your Beef Cut Options
				</h3>
			</div> */}
			<div className="beef-order-form--container">
				<form className="order-form card panel--shadow">
					<Accordion allowMultiple className="">
						<AccordionItem
							titleClassName="card"
							className="steak-options"
							key="steak-options"
							title="Steak Options"
							expanded={activeClickedItems.includes(
								"steak-options"
							)}
						>
							<section className="order-form--section">
								<OrderFormSectionSubheading
									text={
										"Standard Steaks are Rib, T-Bone, Sirloin, Round, and Flank"
									}
								/>

								<div className="order-form--field">
									<label
										htmlFor="steak_thickness"
										className="order-form--label"
									>
										Steak Thickness
									</label>

									<select
										name="steak_thickness"
										id="steak_thickness"
										className="order-form--select"
									>
										<option value="3/4">
											3/4" (Standard)
										</option>
										<option value="1">1"</option>
										<option value="1 1/4">1 1/4"</option>
										<option value="OTHER">
											OTHER (List in special instructions)
										</option>
										<option value="NONE">NONE</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="steaks_per_package"
										className="order-form--label"
									>
										Number of Steaks Per Package
									</label>

									<select
										name="steaks_per_package"
										id="steaks_per_package"
										className="order-form--select"
									>
										<option value="TWO">
											TWO (Standard)
										</option>
										<option value="THREE">THREE</option>
										<option value="FOUR">FOUR</option>
										<option value="OTHER">
											OTHER (List in special instructions)
										</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="tenderized_round_steaks"
										className="order-form--label"
									>
										Tenderized Round Steaks (steaks are run
										through the cuber - similar to pounding
										them) *Additional Fee - See Price List
									</label>

									<select
										name="tenderized_round_steaks"
										id="tenderized_round_steaks"
										className="order-form--select"
									>
										<option value="NONE">NONE</option>
										<option value="HALF">HALF</option>
										<option value="ALL">ALL</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="round_steaks_extra"
										className="order-form--label"
									>
										Round Steaks can also be put into
										hamburger, made into roasts or or made
										into Jerky *Additional fee - See Price
										List
									</label>

									<select
										name="round_steaks_extra"
										id="round_steaks_extra"
										className="order-form--select"
									>
										<option value="NONE">NONE</option>
										<option value="WHOLE ROUND into Jerky">
											WHOLE ROUND into Jerky
										</option>
										<option value="HALF ROUND into Jerky">
											HALF ROUND into Jerky
										</option>
										<option value="GRIND">GRIND</option>
										<option value="ROASTS">ROASTS</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="tenderloin_extra"
										className="order-form--label"
									>
										Tenderloin (The eye of the loin taken
										out separately from the T-Bone and
										Sirloin steaks and cut 1 1/2" thick or
										made into Roast) *Additional fee - See
										Price List
									</label>

									<select
										name="tenderloin_extra"
										id="tenderloin_extra"
										className="order-form--select"
									>
										<option value="NONE">NONE</option>
										<option value="STEAKS">STEAKS</option>
										<option value="ROAST">ROAST</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="flank_steak"
										className="order-form--label"
									>
										Flank Steak (one flank steak per
										half-lengthwise grain-sliced and used in
										stir fry or fajitas - may be put into
										hamburger instead)
									</label>

									<select
										name="flank_steak"
										id="flank_steak"
										className="order-form--select"
									>
										<option value="YES">YES</option>
										<option value="NO">NO</option>
									</select>
								</div>
							</section>
						</AccordionItem>

						<AccordionItem
							titleClassName="card"
							className="roast-options"
							key="roast-options"
							title="Roast Options"
							expanded={activeClickedItems.includes(
								"roast-options"
							)}
						>
							<section className="order-form--section">
								<OrderFormSectionSubheading
									text={
										"Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin Tip and, Heel of Round"
									}
								/>

								<div className="order-form--field">
									<label
										htmlFor="roast_size"
										className="order-form--label"
									>
										Roast Size (we suggest a 3-4# roast for
										a family of 2-4)
									</label>

									<select
										name="roast_size"
										id="roast_size"
										className="order-form--select"
									>
										<option value="3-4#">3-4#</option>
										<option value="4-5#">4-5#</option>
										<option value="5-6#">5-6#</option>
										<option value="None">None</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="roast_boneless"
										className="order-form--label"
									>
										Boneless Roasts (5-7 of the better
										roasts per half beef are boned, rolled
										and tied - otherwise you get the same
										roasts with the bone left in)
										*Additional fee - See Price List
									</label>

									<select
										name="roast_boneless"
										id="roast_boneless"
										className="order-form--select"
									>
										<option value="NO">NO</option>
										<option value="YES">YES</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="rib_options"
										className="order-form--label"
									>
										Rib Options
									</label>

									<select
										name="rib_options"
										id="rib_options"
										className="order-form--select"
									>
										<option value="ALL RIB STEAKS">
											ALL RIB STEAKS
										</option>
										<option value="ALL RIB ROASTS">
											ALL RIB ROASTS
										</option>
										<option value="HALF ROASTS HALF STEAKS">
											HALF ROASTS HALF STEAKS
										</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="chuck_options"
										className="order-form--label"
									>
										Chuck Options
									</label>

									<select
										name="chuck_options"
										id="chuck_options"
										className="order-form--select"
									>
										<option value="ALL CHUCK ROASTS (pot roasts)">
											ALL CHUCK ROASTS (pot roasts)
										</option>
										<option value="ALL CHUCK STEAKS">
											ALL CHUCK STEAKS
										</option>
										<option value="HALF CHUCK ROASTS HALF STKS">
											HALF CHUCK ROASTS HALF STKS
										</option>
										<option value="GRIND">GRIND</option>
									</select>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="remove-bone-dust"
										className="order-form--label"
									>
										Remove Bone Dust *Additional fee - See
										Price List
									</label>
									<div className="order-form--checkbox-container">
										<input
											className="order-form--checkbox"
											type="checkbox"
											id="remove_bone_dust__checkbox"
											name="remove_bone_dust__checkbox"
										/>
										<label for="remove_bone_dust__checkbox">
											YES (Bone dust is a residue left
											from bone and fat when meat is run
											through the saw [like saw dust], it
											has no effect on the meat other than
											looks)
										</label>
									</div>
								</div>

								<div className="order-form--field">
									<label
										htmlFor="special_instructions"
										className="order-form--label"
									>
										SPECIAL INSTRUCTIONS
									</label>

									<textarea
										name="special_instructions"
										id="special_instructions"
										className="order-form--textarea"
										placeholder="Enter special instructions for certain options here"
									></textarea>
								</div>
							</section>
						</AccordionItem>

						<AccordionItem
							titleClassName="card"
							className="ground-beef-options"
							key="ground-beef-options"
							title="Ground Beef Options"
							expanded={activeClickedItems.includes(
								"ground-beef-options"
							)}
						>
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
									<label
										htmlFor="ground_beef_patties"
										className="order-form--label"
									>
										Ground Beef Patties (1/4# patties, 30#
										minimum) *Additional fee - See Price
										List
									</label>

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
										<label for="extras_liver__checkbox">
											LIVER
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="extras_heart__checkbox"
											name="extras_heart__checkbox"
										/>
										<label for="extras_heart__checkbox">
											HEART
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="extras_tongue__checkbox"
											name="extras_tongue__checkbox"
										/>
										<label for="extras_tongue__checkbox">
											TONGUE
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="extras_oxtail__checkbox"
											name="extras_oxtail__checkbox"
										/>
										<label for="extras_oxtail__checkbox">
											OXTAIL
										</label>
									</div>
								</div>
							</section>
						</AccordionItem>

						<AccordionItem
							titleClassName="card"
							className="other-cut-options"
							key="other-cut-options"
							title="Other Cut Options"
							expanded={activeClickedItems.includes(
								"other-cut-options"
							)}
						>
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
						</AccordionItem>

						<AccordionItem
							titleClassName="card"
							className="cow-info"
							key="cow-info"
							title="Cow Information"
							expanded={activeClickedItems.includes("cow-info")}
						>
							<section className="order-form--section">
								<div className="order-form--field">
									<label className="order-form--label">
										Grower Name
									</label>

									<div className="order-form--input-container order-form--input-left">
										<label
											htmlFor="grower_name_first"
											className="order-form--input-label"
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

									<div className="order-form--input-container order-form--input-right">
										<label
											htmlFor="grower_name_last"
											className="order-form--input-label"
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
									<div className="order-form--checkbox-container">
										<input
											className="order-form--checkbox"
											type="checkbox"
											id="beef_whole__checkbox"
											name="beef_whole__checkbox"
										/>
										<label for="beef_whole__checkbox">
											WHOLE BEEF
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="beef_half__checkbox"
											name="beef_half__checkbox"
										/>
										<label for="beef_half__checkbox">
											HALF BEEF
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="hind_quarter__checkbox"
											name="hind_quarter__checkbox"
										/>
										<label for="hind_quarter__checkbox">
											HIND QUARTER
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="front_quarter__checkbox"
											name="front_quarter__checkbox"
										/>
										<label for="front_quarter__checkbox">
											FRONT QUARTER
										</label>

										<input
											className="order-form--checkbox"
											type="checkbox"
											id="split_half__checkbox"
											name="split_half__checkbox"
											value={split}
											// checked={split}
											onChange={handleSplit}
										/>
										<label for="split_half__checkbox">
											SPLIT HALF *Additional fee-See price
											list
										</label>
									</div>
								</div>
							</section>
							{split && (
								<section
									className="order-form--section"
									id="split-half--contact-info"
								>
									<div className="order-form--field">
										<label className="order-form--label">
											Contact Info for Person You Are
											Splitting Half With
										</label>

										<div className="order-form--input-container order-form--input-left">
											<label
												htmlFor="split_half_first"
												className="order-form--input-label"
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

										<div className="order-form--input-container order-form--input-right">
											<label
												htmlFor="split_half_last"
												className="order-form--input-label"
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
											Phone Number of Person You Are
											Splitting Half With
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
						</AccordionItem>

						<AccordionItem
							titleClassName="card"
							className="customer-contact-info"
							key="customer-contact-info"
							title="Your Contact Info"
							expanded={activeClickedItems.includes(
								"customer-contact-info"
							)}
						>
							<section className="order-form--section">
								<div className="order-form--field">
									<label className="order-form--label">
										Name
										<span className="form-required">*</span>
									</label>

									<div className="order-form--input-container order-form--input-left">
										<label
											htmlFor="buyer_name_first"
											className="order-form--input-label"
										>
											First
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_name_first"
											name="buyer_name_first"
											placeholder="First name"
										/>
									</div>

									<div className="order-form--input-container order-form--input-right">
										<label
											htmlFor="buyer_name_last"
											className="order-form--input-label"
										>
											Last
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_name_last"
											name="buyer_name_last"
											placeholder="Last name"
										/>
									</div>
								</div>

								<div className="order-form--field">
									<label className="order-form--label">
										Address
										<span className="form-required">*</span>
									</label>

									<div className="order-form--input-container">
										<label
											htmlFor="buyer_address_line_1"
											className="order-form--input-label"
										>
											Line 1
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_line_1"
											name="buyer_address_line_1"
											placeholder="Line 1"
										/>
									</div>

									<div className="order-form--input-container">
										<label
											htmlFor="buyer_address_line_2"
											className="order-form--input-label"
										>
											Line 2
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_line_2"
											name="buyer_address_line_2"
											placeholder="Line 2"
										/>
									</div>

									<div className="order-form--input-container order-form--input-left">
										<label
											htmlFor="buyer_address_city"
											className="order-form--input-label"
										>
											City
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_city"
											name="buyer_address_city"
											placeholder="City"
										/>
									</div>

									<div className="order-form--input-container order-form--input-right">
										<label
											htmlFor="buyer_address_state"
											className="order-form--input-label"
										>
											State
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_state"
											name="buyer_address_state"
											placeholder="State"
										/>
									</div>

									<div className="order-form--input-container order-form--input-left">
										<label
											htmlFor="buyer_address_zip"
											className="order-form--input-label"
										>
											Zip Code
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_zip"
											name="buyer_address_zip"
											placeholder="Zip Code"
										/>
									</div>

									<div className="order-form--input-container order-form--input-right">
										<label
											htmlFor="buyer_address_country"
											className="order-form--input-label"
										>
											Country
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_address_country"
											name="buyer_address_country"
											placeholder="Country"
										/>
									</div>
								</div>
								<div className="form-field">
									<label className="order-form--label">
										Other Info
										<span className="form-required">*</span>
									</label>
									<div className="order-form--input-container order-form--input-left">
										<label
											htmlFor="buyer_phone_number"
											className="order-form--input-label"
										>
											Phone Number
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_phone_number"
											name="buyer_phone_number"
											placeholder="Phone Number"
										/>
									</div>

									<div className="order-form--input-container">
										<label
											htmlFor="buyer_email_address"
											className="order-form--input-label"
										>
											Email Address
										</label>
										<input
											type="text"
											className="order-form--input"
											id="buyer_email_address"
											name="buyer_email_address"
											placeholder="Email Address"
										/>
									</div>
								</div>
							</section>
						</AccordionItem>
					</Accordion>
					{/* </div> */}

					<div className="order-form--heading-container">
						<h3 className="order-form--before-submitting">
							Please Double Check Your Selections Before
							Submitting!
						</h3>
					</div>

					<input
						type="submit"
						className="order-form--submit btn btn--outline btn--large"
						value="Submit Form"
					/>
				</form>
			</div>
		</>
	);
}

export default BeefOrder;
