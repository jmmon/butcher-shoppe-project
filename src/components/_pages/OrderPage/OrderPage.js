import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useForm, FormProvider } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";

import "./OrderPage.css";
import bgImage from "../../../assets/images/image-1-3.jpg";
import PageTitle from "../../PageTitle/PageTitle.js";
import InputForm from "./FormComponents/InputForm";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground";
import BeefSection from "./animals/BeefSection";
import LabelForm from "./FormComponents/LabelForm";
import LambSection from "./animals/LambSection";
import HogSection from "./animals/HogSection";

function OrderPage() {
	const methods = useForm({
		mode: "all",
	});

	const [newAnimalChosenType, setNewAnimalChosenType] = useState("beef");

	const [idCollectionOfAnimalsByType, setIdCollectionOfAnimalsByType] =
		useState({
			beef: [],
			lamb: [],
			hog: [],
		});

	console.log(
		"TESTING - local storage",
		window.localStorage.getItem("orderForm")
	);

	const clearLocalStorage = () => {
		window.localStorage.removeItem("orderForm");
		console.log(
			"TESTING - local storage",
			window.localStorage.getItem("orderForm")
		);
	};

	useFormPersist("orderForm", {
		watch: methods.watch,
		setValue: methods.setValue,
		storage: window.localStorage,
		// exclude: ["special_instructions"],
	});

	const onSubmit = (data) => console.log(data);

	// const [activeClickedItems, setActiveClickedItems] = useState([]);

	// const closeAll = (e) => {
	// 	e.preventDefault();
	// 	setActiveClickedItems([]);
	// };

	// const onExpand = (index) => {
	// 	const position = activeClickedItems.indexOf(index);
	// 	if (position === -1) {
	// 		setActiveClickedItems([...activeClickedItems, index]);
	// 	}
	// };

	// const onClose = (index) => {
	// 	let remove = activeClickedItems.indexOf(index);
	// 	setActiveClickedItems(
	// 		activeClickedItems.filter((_, i) => i !== remove)
	// 	);
	// };
	console.log("errors", methods.formState.errors);

	const addAnimal = (e) => {
		// register of inputs is automatic when component is loaded
		e.preventDefault();
		console.log("chosen animal:", newAnimalChosenType);

		let chosenAnimalType_IdArray =
			idCollectionOfAnimalsByType[newAnimalChosenType];
		console.log(
			`Chosen animal's existing ID array: ${chosenAnimalType_IdArray}`
		);

		const idOfLastSpotInArray =
			chosenAnimalType_IdArray.length === 0
				? 0
				: chosenAnimalType_IdArray[chosenAnimalType_IdArray.length - 1];
		console.log(`last spot in array had id of: ${idOfLastSpotInArray}`);

		const newAnimalId = idOfLastSpotInArray + 1;
		console.log(`Next id for the new animal will be: ${newAnimalId}`);

		chosenAnimalType_IdArray.push(newAnimalId);

		testingDisplayObjOfArrs(
			idCollectionOfAnimalsByType,
			"`Old collection of animals: "
		);

		setIdCollectionOfAnimalsByType({
			...idCollectionOfAnimalsByType,
			[newAnimalChosenType]: [...chosenAnimalType_IdArray],
		});
	};

	const testingDisplayObjOfArrs = (obj, msg) => {
		console.log(
			`${msg} ${Object.keys(obj).forEach((arr) =>
				obj[arr].forEach((item) => console.log(`${arr} - ${item}`))
			)}`
		);
	};

	const deleteAnimal = (e) => {
		e.preventDefault();
		console.log(`Deleting animal from button ${e.target}`);
		const typeOfAnimal = e.target.getAttribute("animal");
		const idOfAnimal = e.target.getAttribute("id");

		console.log("animal:", typeOfAnimal, "\nId:", idOfAnimal);

		let chosenAnimalType_IdArray =
			idCollectionOfAnimalsByType[typeOfAnimal];
		console.log(
			`Chosen animal's existing ID array: ${chosenAnimalType_IdArray}`
		);

		const index = chosenAnimalType_IdArray.indexOf(idOfAnimal);

		chosenAnimalType_IdArray.splice(index, 1);
		console.log(
			`NEW ID array after removing the ID: ${chosenAnimalType_IdArray}`
		);
		testingDisplayObjOfArrs(
			idCollectionOfAnimalsByType,
			"`Old collection of animals: "
		);

		setIdCollectionOfAnimalsByType({
			...idCollectionOfAnimalsByType,
			[typeOfAnimal]: [...chosenAnimalType_IdArray],
		});

		//delete first beef
		//indexOf(idToDelete); splice it out or whatever
	};

	useEffect(() => {
		testingDisplayObjOfArrs(
			idCollectionOfAnimalsByType,
			"(useEffect) updated collection of animals: "
		);
		// console.log("(useEffect) updated collection of animals:");
		// console.log(idCollectionOfAnimalsByType);
	}, [idCollectionOfAnimalsByType]);

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
				<FormProvider {...methods}>
					<form
						className="form--center"
						onSubmit={methods.handleSubmit(onSubmit)}
					>
						<article className="form--instructions panel--shadow">
							<h2 className="center-text">
								Ready to schedule your order?
							</h2>
							<p>
								Scheduling for our services is easy! Just fill
								out the information below and sumbit it. Then,
								we will contact you to finalize the scheduling
								date and time. After the mobile dispatch, we
								will give you an estimate for when the meat will
								be processed and ready for pickup. Finally, come
								visit us in Northport to pick up your meat!
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
											information and your location. Give
											us contact information we can reach
											you at, and choose a preference for
											method of contact. Then enter your
											location, so we can optimize our
											route, keeping your costs down and
											saving you time!
										</p>
										<p>
											Once finished with your contact
											info, next is the info about each
											animal you would like processed.
										</p>
									</details>
								</li>
								<li>
									<details>
										<summary>Next, add an animal</summary>
										<p>
											Select an aminal for processing,
											then fill out the cut form for that
											animal.
										</p>
										<h4>
											Unsure about the cuts you would
											like?
										</h4>
										<p>
											Check out the default cut
											selections, or customize the cuts to
											fit your needs.
										</p>
										<p>
											Do you have more animals you'd like
											processed? Next you can add
											additional animals.
										</p>
									</details>
								</li>
								<li>
									<details>
										<summary>
											Add any additional animals
										</summary>
										<p>
											You may add multiple animals of the
											same type or different types. We
											offer custom cut forms for all the
											animals you would like processed.
										</p>
										<p>
											Select the cut options, use our
											default selections, or copy the
											selections you made for a previous
											similar animal.
										</p>
									</details>
								</li>
								<li>
									<details>
										<summary>
											Double-check and submit!
										</summary>
										<p>
											Done filling out the form? Check to
											make sure all your info is correct,
											and submit your order using the
											Submit Order button below the form.
										</p>
									</details>
								</li>
							</ol>
						</article>
						<div className="form--container">
							<h3 className="form--title">Order Form</h3>
							<Collapsible trigger="Contact Info">
								<div
									name="contact_info"
									className="order-form--section"
								>
									<div className="order-form--field">
										<LabelForm
											required={true}
											title="Name"
										/>

										<InputForm
											title="First"
											name="buyer_name_first"
											placeholder="First name"
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
										/>

										<InputForm
											title="Last"
											name="buyer_name_last"
											placeholder="Last name"
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
										/>
									</div>

									<div className="form-field">
										<LabelForm
											required={true}
											title="Contact"
										/>

										<InputForm
											title="Phone Number"
											name="buyer_phone_number"
											placeholder="10 digit phone number"
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
										/>
										<InputForm
											title="Email Address"
											name="buyer_email_address"
											placeholder="Enter your email address"
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
										/>
									</div>

									<div className="order-form--field">
										<LabelForm
											required={true}
											title="Address"
										/>

										<InputForm
											title="Line 1"
											name="buyer_address_line_1"
											placeholder="Address Line 1"
											required={{
												required: {
													value: true,
													message:
														"Please enter your address",
												},
											}}
											small={true}
										/>
										<InputForm
											title="Line 2"
											name="buyer_address_line_2"
											placeholder="Address Line 2"
											small={true}
										/>

										<InputForm
											title="City"
											name="buyer_address_city"
											required={{
												required: {
													value: true,
													message:
														"Please enter your city",
												},
											}}
											small={true}
										/>
										<InputForm
											title="State"
											name="buyer_address_state"
											required={{
												required: {
													value: true,
													message:
														"Please enter your state",
												},
											}}
											small={true}
										/>

										<InputForm
											title="Zip Code"
											name="buyer_address_zip_code"
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
										/>
									</div>
								</div>
							</Collapsible>
							<Collapsible trigger="Animal Info">
								<h4>Select and add an animal cuts form:</h4>
								<select
									onChange={(e) =>
										setNewAnimalChosenType(e.target.value)
									}
								>
									<option value="beef">Beef</option>
									<option value="lamb">Lamb</option>
									<option value="hog">Hog</option>
								</select>
								<button onClick={addAnimal}>
									Add an animal
								</button>
								{(idCollectionOfAnimalsByType.beef.length > 0 ||
									idCollectionOfAnimalsByType.lamb.length >
										0 ||
									idCollectionOfAnimalsByType.hog.length >
										0) && (
									<div>
										<h4>Animals</h4>
										{idCollectionOfAnimalsByType.beef
											.length > 0 && (
											<Collapsible trigger="Your Beef">
												{idCollectionOfAnimalsByType.beef.map(
													(id) => (
														<BeefSection
															key={id}
															id={id}
															deleteAnimal={
																deleteAnimal
															}
														/>
													)
												)}
											</Collapsible>
										)}
										{idCollectionOfAnimalsByType.lamb
											.length > 0 && (
											<Collapsible trigger="Your Lamb">
												{idCollectionOfAnimalsByType.lamb.map(
													(id) => (
														<LambSection
															key={id}
															id={id}
															deleteAnimal={
																deleteAnimal
															}
														/>
													)
												)}
											</Collapsible>
										)}
										{idCollectionOfAnimalsByType.hog
											.length > 0 && (
											<Collapsible trigger="Your Hog">
												{idCollectionOfAnimalsByType.hog.map(
													(id) => (
														<HogSection
															key={id}
															id={id}
															deleteAnimal={
																deleteAnimal
															}
														/>
													)
												)}
											</Collapsible>
										)}
									</div>
								)}
							</Collapsible>
						</div>

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
				</FormProvider>
			</WhitePageBackground>
		</>
	);
}

export default OrderPage;
