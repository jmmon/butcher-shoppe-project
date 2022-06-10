import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useForm, FormProvider } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./Order.css";
import bgImage from "../../../assets/images/image-1-3.jpg";
import PageTitle from "../../PageTitle/PageTitle.js";
import InputForm from "./FormComponents/InputForm/InputForm";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground";
import BeefSection from "./animals/BeefSection";
import LabelForm from "./FormComponents/LabelForm";
import LambSection from "./animals/LambSection";
import HogSection from "./animals/HogSection";
import Button from "../../Button/Button";
import SchedulerInput from "../../SchedulerInput/SchedulerInput";
import PhoneInput from "react-phone-number-input/input";

// So: add an animal: increment the ID by one, so each ID will be unique
// Then, animals on the page will copy from one of the IDs.

// So create an animal, it's linked with that ID, but deleting the animal should only delete the react component but not clear the ID from localStorage. ?

function Order() {
	const methods = useForm({
		mode: "all",
	});

	const [phone, setPhone] = useState("");

	const [newAnimalChosenType, setNewAnimalChosenType] = useState("beef");
	const [animalToUnregister, setAnimalToUnregister] = useState("");

	const [idCollectionOfAnimalsByType, setIdCollectionOfAnimalsByType] =
		useState({
			beef: { thisId: 0, idArray: [] },
			lamb: { thisId: 0, idArray: [] },
			hog: { thisId: 0, idArray: [] },
		});

	const clearLocalStorage = () => {
		window.localStorage.removeItem("orderForm");
		console.log(
			"TESTING - local storage",
			window.localStorage.getItem("orderForm")
		);
	};

	useFormPersist("orderForm", {
		watch: methods.watch, // to watch the value to save into storage
		setValue: methods.setValue, // to set the value when loading up the page
		storage: window.localStorage,
		// exclude: ["animals"],
		// could exclude the animals here, then would need to watch them separately to add them separately to localStorage
	});

	// useEffect(() => {
	// 	Object.keys(methods.formState.errors).length > 0 &&
	// 		console.log("errors", methods.formState.errors);
	// }, [methods.formState.errors]);

	useEffect(() => {
		window.localStorage.getItem("orderForm") !== null &&
			console.log(
				"TESTING - local storage",
				JSON.parse(window.localStorage.getItem("orderForm"))
			);
	}, [window.localStorage.getItem("orderForm")]);

	const onSubmit = (data) => console.log(data);

	const addAnimal = (e) => {
		e.preventDefault();

		let copy_chosenAnimalType_IdArray = [
			...idCollectionOfAnimalsByType[newAnimalChosenType].idArray,
		];

		const thisId = idCollectionOfAnimalsByType[newAnimalChosenType].thisId;

		console.log(
			`${newAnimalChosenType} - pre-existing array of IDs: ${copy_chosenAnimalType_IdArray}\nNext id for the new animal will be: ${thisId}`
		);

		copy_chosenAnimalType_IdArray.push(thisId);

		const nextId = thisId + 1;

		setIdCollectionOfAnimalsByType({
			...idCollectionOfAnimalsByType,
			[newAnimalChosenType]: {
				thisId: nextId,
				idArray: [...copy_chosenAnimalType_IdArray],
			},
		});
	};

	const deleteAnimal = (e) => {
		e.preventDefault();
		const typeOfAnimal = e.target.getAttribute("animal");
		const idOfAnimal = +e.target.getAttribute("id");

		let copy_chosenAnimalType_IdArray = [
			...idCollectionOfAnimalsByType[typeOfAnimal].idArray,
		];
		const index = copy_chosenAnimalType_IdArray.indexOf(idOfAnimal);

		console.log({
			typeOfAnimal,
			idOfAnimal,
			copy_chosenAnimalType_IdArray,
		});

		console.log(
			`Removing item ${copy_chosenAnimalType_IdArray[index]} at index ${index}`
		);

		copy_chosenAnimalType_IdArray.splice(index, 1);

		console.log(
			`NEW ID array after removing the ID: ${copy_chosenAnimalType_IdArray}`
		);

		testing__displayObjOfArrs(
			idCollectionOfAnimalsByType,
			"Old collection of animals: "
		);

		setIdCollectionOfAnimalsByType({
			...idCollectionOfAnimalsByType,
			[typeOfAnimal]: {
				thisId: idCollectionOfAnimalsByType[typeOfAnimal].thisId,
				idArray: [...copy_chosenAnimalType_IdArray],
			},
		});

		// trying unregister here instead of separately
		methods.unregister(`${typeOfAnimal}_${idOfAnimal}`);
		//setAnimalToUnregister(`${typeOfAnimal}_${idOfAnimal}`);
	};

	// useEffect(() => {
	// 	if (animalToUnregister !== "") {
	// 		setAnimalToUnregister("");
	// 		methods.unregister(animalToUnregister);
	// 	}
	// }, [animalToUnregister, methods.unregister]);

	const testing__displayObjOfArrs = (obj, msg) => {
		let string = "";
		Object.keys(obj).forEach(
			(arr) =>
				obj[arr].length > 0 && (string += `\n - ${arr}: ${obj[arr]}`)
		);
		string !== "" && console.log(`${msg}${string}`);
	};

	useEffect(() => {
		testing__displayObjOfArrs(
			idCollectionOfAnimalsByType,
			"(useEffect) updated collection of animals: "
		);
	}, [idCollectionOfAnimalsByType]);

	return (
		<>
			<PageTitle
				title="Schedule For Our Service"
				bgImage={bgImage}
				smaller="true"
				position="50% 50%"
			/>

			<WhitePageBackground>
				<FormProvider {...methods}>
					<form
						className="form--center"
						onSubmit={methods.handleSubmit(onSubmit)}
					>
						<Button
							buttonStyle="btn--outline"
							onClick={clearLocalStorage}
						>
							TESTING - Clear LocalStorage
						</Button>
						<div className="form--container">
							<Tabs forceRenderTabPanel>
								<TabList>
									<Tab>Basic Info</Tab>
									<Tab>Animal Cut Sheets</Tab>
								</TabList>
								<TabPanel>
									<Collapsible
										trigger="Contact Info"
										open
										triggerDisabled={true}
										transitionTime={200}
										easing="ease"
									>
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
													name="buyer.name.first"
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
													name="buyer.name.last"
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

											<div className="order-form--field">
												<LabelForm
													required={true}
													title="Contact"
												/>

												<div className="phone input-container">
													<label
														htmlFor="phone"
														className="phone scheduler--label"
													>
														Your Phone Number
													</label>
													<PhoneInput
														className="scheduler--input"
														id="phone"
														name="buyer.phone_number_component"
														country="US"
														onChange={setPhone}
														value={phone}
														placeholder="Enter your 10 digit phone number"
													/>
												</div>

												<InputForm
													title="Phone Number"
													name="buyer.phone_number"
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
													name="buyer.email_address"
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
													name="buyer.address.line_1"
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
													name="buyer.address.line_2"
													placeholder="Address Line 2"
													small={true}
												/>

												<InputForm
													title="City"
													name="buyer.address.city"
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
													name="buyer.address.state"
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
													name="buyer.address.zip_code"
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
									<Collapsible
										trigger="Choose Your Date And Time"
										open
										triggerDisabled={true}
										transitionTime={200}
										easing="ease"
									>
										<SchedulerInput />
									</Collapsible>
								</TabPanel>
								<TabPanel>
									<Collapsible
										trigger="Animal Info"
										open
										// triggerDisabled={true}
										transitionTime={200}
										easing="ease"
									>
										<h4>
											Select and add an animal cuts form:
										</h4>
										<select
											onChange={(e) =>
												setNewAnimalChosenType(
													e.target.value
												)
											}
										>
											<option value="beef">Beef</option>
											<option value="lamb">Lamb</option>
											<option value="hog">Hog</option>
										</select>
										<Button onClick={addAnimal}>
											Add an animal
										</Button>
										{(idCollectionOfAnimalsByType.beef
											.idArray.length > 0 ||
											idCollectionOfAnimalsByType.lamb
												.idArray.length > 0 ||
											idCollectionOfAnimalsByType.hog
												.idArray.length > 0) && (
											<div>
												<h4>Animals</h4>
												{idCollectionOfAnimalsByType
													.beef.idArray.length >
													0 && (
													<Collapsible
														trigger="Your Beef"
														transitionTime={200}
														easing="ease"
													>
														{idCollectionOfAnimalsByType.beef.idArray.map(
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
												{idCollectionOfAnimalsByType
													.lamb.idArray.length >
													0 && (
													<Collapsible
														trigger="Your Lamb"
														transitionTime={200}
														easing="ease"
													>
														{idCollectionOfAnimalsByType.lamb.idArray.map(
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
													.idArray.length > 0 && (
													<Collapsible
														trigger="Your Hog"
														transitionTime={200}
														easing="ease"
													>
														{idCollectionOfAnimalsByType.hog.idArray.map(
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
								</TabPanel>
							</Tabs>
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

export default Order;
