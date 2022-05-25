import React, { useState } from "react";
import { Accordion, AccordionItem } from "react-sanfona";
import Collapsible from "react-collapsible";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import "./BeefOrder.css";
import bgImage from "../../../assets/images/image-1-3.jpg";
import PageTitle from "../../PageTitle/PageTitle.js";
import SelectForm from "./FormComponents/SelectForm";
import InputForm from "./FormComponents/InputForm";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground";
import BeefSection from "./animals/BeefSection";

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

function BeefOrder() {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm({
		mode: "all",
	});

	console.log("local storage", window.localStorage.getItem("orderForm"));

	const clearLocalStorage = () => {
		window.localStorage.removeItem("orderForm");
		console.log("local storage", window.localStorage.getItem("orderForm"));
	};

	useFormPersist("orderForm", {
		watch,
		setValue,
		storage: window.localStorage,
		// exclude: ["special_instructions"],
	});

	const onSubmit = (data) => console.log(data);

	const [activeClickedItems, setActiveClickedItems] = useState([]);

	const closeAll = (e) => {
		e.preventDefault();
		setActiveClickedItems([]);
	};

	const onExpand = (index) => {
		const position = activeClickedItems.indexOf(index);
		if (position === -1) {
			setActiveClickedItems([...activeClickedItems, index]);
		}
	};

	const onClose = (index) => {
		let remove = activeClickedItems.indexOf(index);
		setActiveClickedItems(
			activeClickedItems.filter((_, i) => i !== remove)
		);
	};
	console.log("errors", errors);

	return (
		<>
			<PageTitle
				heading="Select Your Beef Cut Options"
				bgImage={bgImage}
				smaller="true"
				position="50% 50%"
			/>

			<WhitePageBackground>
				<button onClick={clearLocalStorage}>Clear</button>
				<form
					className="form--center"
					onSubmit={handleSubmit(onSubmit)}
				>
					<article className="form--instructions panel--shadow">
						<h2 className="center-text">
							Ready to schedule your order?
						</h2>
						<p>
							Scheduling for our services is easy! Just fill out
							the information below and sumbit it. Then, we will
							contact you to finalize the scheduling date and
							time. After the mobile dispatch, we will give you an
							estimate for when the meat will be processed and
							ready for pickup. Finally, come visit us in
							Northport to pick up your meat!
						</p>
						<br />
						<h3>Steps for ordering:</h3>
						<ol className="form--steps">
							<li>
								<details>
									<summary>
										Start with your contact information
									</summary>
									<p>
										The first section is your basic
										information and your location. Give us
										contact information we can reach you at,
										and choose a preference for method of
										contact. Then enter your location, so we
										can optimize our route, keeping your
										costs down and saving you time!
									</p>
									<p>
										Once finished with your contact info,
										next is the info about each animal you
										would like processed.
									</p>
								</details>
							</li>
							<li>
								<details>
									<summary>Next, add an animal</summary>
									<p>
										Select an aminal for processing, then
										fill out the cut form for that animal.
									</p>
									<h4>
										Unsure about the cuts you would like?
									</h4>
									<p>
										Check out the default cut selections, or
										customize the cuts to fit your needs.
									</p>
									<p>
										Do you have more animals you'd like
										processed? Next you can add additional
										animals.
									</p>
								</details>
							</li>
							<li>
								<details>
									<summary>
										Add any additional animals
									</summary>
									<p>
										You may add multiple animals of the same
										type or different types. We offer custom
										cut forms for all the animals you would
										like processed.
									</p>
									<p>
										Select the cut options, use our default
										selections, or copy the selections you
										made for a previous similar animal.
									</p>
								</details>
							</li>
							<li>
								<details>
									<summary>Double-check and submit!</summary>
									<p>
										Done filling out the form? Check to make
										sure all your info is correct, and
										submit your order using the Submit Order
										button below the form.
									</p>
								</details>
							</li>
						</ol>
					</article>
					<div className="form--container">
						<h3 className="form--title">Order Form</h3>
						<Collapsible trigger="Contact Info">
							<section className="order-form--section">
								<div className="order-form--field">
									<label className="order-form--label">
										Name
										<span className="form-required">*</span>
									</label>

									<InputForm
										label="First"
										name="buyer_name_first"
										placeholder="First name"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your first name",
											},
											pattern: {
												value: /^[a-zA-Z]+$/,
												message:
													"Only letters for your name, please",
											},
										}}
										small={true}
										errors={errors}
									/>

									<InputForm
										label="Last"
										name="buyer_name_last"
										placeholder="Last name"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your last name",
											},
											pattern: {
												value: /^[a-zA-Z]+$/,
												message:
													"Only letters for your name, please",
											},
										}}
										small={true}
										errors={errors}
									/>
								</div>

								<div className="form-field">
									<label className="order-form--label">
										Contact
										<span className="form-required">*</span>
									</label>
									<InputForm
										label="Phone Number"
										name="buyer_phone_number"
										placeholder="10 digit phone number"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"A phone number is required",
											},
											pattern: {
												value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
												message:
													"Please use a valid phone number",
											},
										}}
										small={true}
										errors={errors}
									/>
									<InputForm
										label="Email Address"
										name="buyer_email_address"
										placeholder="Enter your email address"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"An email address is required",
											},
											pattern: {
												value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
												message:
													"Please use a valid email address",
											},
										}}
										small={true}
										errors={errors}
									/>
								</div>

								<div className="order-form--field">
									<label className="order-form--label">
										Address
										<span className="form-required">*</span>
									</label>

									<InputForm
										label="Line 1"
										name="buyer_address_line_1"
										placeholder="Address Line 1"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your address",
											},
										}}
										small={true}
										errors={errors}
									/>
									<InputForm
										label="Line 2"
										name="buyer_address_line_2"
										placeholder="Address Line 2"
										register={register}
										small={true}
										errors={errors}
									/>

									<InputForm
										label="City"
										name="buyer_address_city"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your city",
											},
										}}
										small={true}
										errors={errors}
									/>
									<InputForm
										label="State"
										name="buyer_address_state"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your state",
											},
										}}
										small={true}
										errors={errors}
									/>

									<InputForm
										label="Zip Code"
										name="buyer_address_zip_code"
										register={register}
										required={{
											required: {
												value: true,
												message:
													"Please enter your zip code",
											},
											pattern: {
												value: /^\d{5}(?:[-\s]\d{4})?$/,
												message:
													"Please enter a valid zip code",
											},
										}}
										small={true}
										errors={errors}
									/>
								</div>
							</section>
						</Collapsible>
						<Collapsible trigger="Animal Info">
							Example layouts:
							<br />
							case(no animals):
							<br />
							<select>
								<option value="beef">Beef</option>
								<option value="lamb">Lamb</option>
								<option value="hog">Hog</option>
							</select>
							<button>Add an animal</button>
							<br />
							<br />
							<hr />
							<br />
							case(starting first animal):
							<br />
							<select>
								<option value="beef">Beef</option>
								<option value="lamb">Lamb</option>
								<option value="hog">Hog</option>
							</select>
							<button>Add another animal</button>
							<br />
							<BeefSection
								register={register}
								errors={errors}
								setValue={setValue}
							/>
							<br />
							<br />
							<hr />
							<br />
							case(one animal):
							<br />
							<select>
								<option value="beef">Beef</option>
								<option value="lamb">Lamb</option>
								<option value="hog">Hog</option>
							</select>
							<button>Add another animal</button>
							<br />
							<BeefSection
								register={register}
								errors={errors}
								setValue={setValue}
							/>
							<br />
							<Collapsible trigger="Your Animals">
								<BeefSection
									register={register}
									errors={errors}
									setValue={setValue}
								/>
							</Collapsible>
							<br />
							<br />
							<hr />
							<br />
							case(multiple animals):
							<br />
							<select>
								<option value="beef">Beef</option>
								<option value="lamb">Lamb</option>
								<option value="hog">Hog</option>
							</select>
							<button>Add another animal</button>
							<br />
							<Collapsible trigger="Your Animals">
								<BeefSection
									register={register}
									errors={errors}
									setValue={setValue}
								/>

								<BeefSection
									register={register}
									errors={errors}
									setValue={setValue}
								/>

								<BeefSection
									register={register}
									errors={errors}
									setValue={setValue}
								/>
							</Collapsible>
						</Collapsible>
					</div>

					<div className="accordion--buttons-wrapper card">
						<Accordion allowMultiple className="">
							{/* <AccordionItem
								titleClassName="card"
								className="steak-options panel--shadow"
								key={0}
								title="Steak Options"
								expanded={activeClickedItems.includes(0)}
								onExpand={(e) => onExpand(e, 0)}
								onClose={(e) => onClose(e, 0)}
							>
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
												label: "NONE)",
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

									<div className="order-form--field">
										<OrderFormLabelAndSubtext
											text="Tenderized Round Steaks"
											subtext="Steaks are run through the cuber
												(similar to pounding them)"
											name="tenderized_round_steaks"
											extra
										/>

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
										<OrderFormLabelAndSubtext
											name="round_steaks_extra"
											text="Other Round Steak Options"
											subtext="Round steaks can also be put
											into hamburger, made into roasts
											or or made into Jerky"
											extra
										/>

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
											<option value="ROASTS">
												ROASTS
											</option>
										</select>
									</div>

									<div className="order-form--field">
										<OrderFormLabelAndSubtext
											name="tenderloin_extra"
											text="Tenderloin"
											subtext={`The eye of the loin taken out
											separately from the T-Bone and
											Sirloin steaks and cut 1 1/2"
											thick or made into Roast`}
											extra
										/>

										<select
											name="tenderloin_extra"
											id="tenderloin_extra"
											className="order-form--select"
										>
											<option value="NONE">NONE</option>
											<option value="STEAKS">
												STEAKS
											</option>
											<option value="ROAST">ROAST</option>
										</select>
									</div>

									<div className="order-form--field">
										<OrderFormLabelAndSubtext
											name="flank_steak"
											text="Flank Steak"
											subtext={`One flank steak per
												half-lengthwise grain-sliced and
												used in stir fry or fajitas; may be
												put into hamburger instead`}
										/>

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
							</AccordionItem> */}

							{/* <AccordionItem
								titleClassName="card"
								className="roast-options panel--shadow"
								key={1}
								title="Roast Options"
								expanded={activeClickedItems.includes(1)}
								onExpand={(e) => onExpand(e, 1)}
								onClose={(e) => onClose(e, 1)}
							>
								<section className="order-form--section">
									<OrderFormSectionSubheading
										text={
											"Standard Roasts are Chuck, Cross Rib, Arm, Rump, Sirloin Tip and, Heel of Round"
										}
									/>

									<div className="order-form--field">
										<OrderFormLabelAndSubtext
											name="roast_size"
											text="Roast Size"
											subtext="We suggest a 3-4# roast
											for a family of 2-4"
										/>

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
										<OrderFormLabelAndSubtext
											name="roast_boneless"
											text="Boneless Roasts"
											subtext="5-7 of the better
											roasts per half beef are boned,
											rolled and tied - otherwise you get
											the same roasts with the bone left
											in"
											extra
										/>

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
										<OrderFormLabelAndSubtext
											name="remove_bone_dust__checkbox"
											text="Remove Bone Dust"
											subtext="Bone dust is a residue left
												from bone and fat when meat is
												run through the saw [like saw
												dust], it has no effect on the
												meat other than looks"
											extra
										/>
										<div className="order-form--checkbox-container">
											<input
												className="order-form--checkbox"
												type="checkbox"
												id="remove_bone_dust__checkbox"
												name="remove_bone_dust__checkbox"
											/>
											<label htmlFor="remove_bone_dust__checkbox">
												YES Remove Bone Dust
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
							</AccordionItem> */}

							{/* <AccordionItem
								titleClassName="card"
								className="ground-beef-options panel--shadow"
								key={2}
								title="Ground Beef Options"
								expanded={activeClickedItems.includes(2)}
								onExpand={(e) => onExpand(e, 2)}
								onClose={(e) => onClose(e, 2)}
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
											<option value="1 1/2#">
												1 1/2#
											</option>
											<option value="2#">2#</option>
											<option value="1# *Additional fee - See Price List">
												1# *Additional fee - See Price
												List
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
							</AccordionItem> */}

							{/* <AccordionItem
								titleClassName="card"
								className="other-cut-options panel--shadow"
								key={3}
								title="Other Cut Options"
								expanded={activeClickedItems.includes(3)}
								onExpand={(e) => onExpand(e, 3)}
								onClose={(e) => onClose(e, 3)}
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
							</AccordionItem> */}

							{/* <AccordionItem
								titleClassName="card"
								className="cow-info panel--shadow"
								key={4}
								title="Cow Information"
								expanded={activeClickedItems.includes(4)}
								onExpand={(e) => onExpand(e, 4)}
								onClose={(e) => onClose(e, 4)}
							>
								<section className="order-form--section">
									<div className="order-form--field">
										<label className="order-form--label">
											Grower Name
										</label>

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
											<span className="form-required">
												*
											</span>
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
													SPLIT HALF *Additional
													fee-See price list
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
											<h3 className="order-form--title">
												Contact Info
											</h3>
											<OrderFormSectionSubheading text="for the other person, if splitting half" />

											<label className="order-form--label">
												Name
											</label>

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
							</AccordionItem> */}

							<AccordionItem
								titleClassName="card"
								className="customer-contact-info panel--shadow"
								key={5}
								title="Your Contact Info"
								expanded={activeClickedItems.includes(5)}
								onExpand={(e) => onExpand(e, 5)}
								onClose={(e) => onClose(e, 5)}
							></AccordionItem>
						</Accordion>
						<div
							className={
								activeClickedItems.length === 0
									? `card panel--shadow accordion-close-all-wrapper-hidden`
									: `card panel--shadow accordion-close-all-wrapper`
							}
							onClick={(e) => {
								closeAll(e);
							}}
						>
							<span className="accordion-close-all-title">
								Close All
							</span>
						</div>
					</div>
					{/* end Accordion with button wrapper */}

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
			</WhitePageBackground>
		</>
	);
}

export default BeefOrder;
