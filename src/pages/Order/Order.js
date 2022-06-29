import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { useForm, FormProvider } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import "./Order.css";
import styles from "./Order.module.css";

import bgImage from "assets/images/image-1-3.jpg";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import PageTitle from "components/PageTitle/PageTitle.js";

import subscribeStyles from "../../components/Subscribe/Subscribe.module.css";
import Button from "components/Button/Button";

// import BeefSection from "components/FormComponents/Sections/BeefSection/BeefSection";
// import LambSection from "components/FormComponents/Sections/LambSection/LambSection";
// import HogSection from "components/FormComponents/Sections/HogSection/HogSection";
import ContactInfoSection from "components/FormComponents/Sections/ContactInfoSection/ContactInfoSection";
import SchedulerInput from "components/FormComponents/SchedulerInput/SchedulerInput";
import SchedulerInputWindow from "components/FormComponents/SchedulerInput/SchedulerInputWindow";
import AnimalsBasic from "components/FormComponents/Sections/AnimalsBasic/AnimalsBasic";
import OrderFormSectionSubheading from "components/FormComponents/OrderFormSectionSubheading/OrderFormSectionSubheading";

// So: add an animal: increment the ID by one, so each ID will be unique
// Then, animals on the page will copy from one of the IDs.

// So create an animal, it's linked with that ID, but deleting the animal should only delete the react component but not clear the ID from localStorage. ?

function Order() {
	const methods = useForm({
		mode: "all",
	});

	const [idCollectionOfAnimalsByType, setIdCollectionOfAnimalsByType] =
		useState({
			beef: { thisId: 0, idArray: [] },
			lamb: { thisId: 0, idArray: [] },
			hog: { thisId: 0, idArray: [] },
		});

	// const clearLocalStorage = () => {
	// 	window.localStorage.removeItem("orderForm");
	// 	console.log(
	// 		"TESTING - local storage",
	// 		window.localStorage.getItem("orderForm")
	// 	);
	// };

	// useFormPersist("orderForm", {
	// 	watch: methods.watch,
	// 	setValue: methods.setValue,
	// 	storage: window.localStorage,
	// });

	useEffect(() => {
		console.log("errors", methods.formState.errors);
		// Object.keys(methods.formState.errors).length > 0 &&
		// 	console.log("errors", methods.formState.errors);
	}, [methods.formState.errors]);

	// useEffect(() => {
	// 	window.localStorage.getItem("orderForm") !== null &&
	// 		console.log(
	// 			"TESTING - local storage",
	// 			JSON.parse(window.localStorage.getItem("orderForm"))
	// 		);
	// }, [window.localStorage.getItem("orderForm")]);

	const onSubmit = (data) => {
		console.log("submitting");
		console.log({ data });
	};

	// const addAnimal = (e) => {
	// 	e.preventDefault();

	// 	let copy_chosenAnimalType_IdArray = [
	// 		...idCollectionOfAnimalsByType[newAnimalChosenType].idArray,
	// 	];

	// 	const thisId = idCollectionOfAnimalsByType[newAnimalChosenType].thisId;

	// 	console.log(
	// 		`${newAnimalChosenType} - pre-existing array of IDs: ${copy_chosenAnimalType_IdArray}\nNext id for the new animal will be: ${thisId}`
	// 	);

	// 	copy_chosenAnimalType_IdArray.push(thisId);

	// 	const nextId = thisId + 1;

	// 	setIdCollectionOfAnimalsByType({
	// 		...idCollectionOfAnimalsByType,
	// 		[newAnimalChosenType]: {
	// 			thisId: nextId,
	// 			idArray: [...copy_chosenAnimalType_IdArray],
	// 		},
	// 	});
	// };

	// const deleteAnimal = (e) => {
	// 	e.preventDefault();
	// 	const typeOfAnimal = e.target.getAttribute("animal");
	// 	const idOfAnimal = +e.target.getAttribute("id");

	// 	let copy_chosenAnimalType_IdArray = [
	// 		...idCollectionOfAnimalsByType[typeOfAnimal].idArray,
	// 	];
	// 	const index = copy_chosenAnimalType_IdArray.indexOf(idOfAnimal);

	// 	console.log({
	// 		typeOfAnimal,
	// 		idOfAnimal,
	// 		copy_chosenAnimalType_IdArray,
	// 	});

	// 	console.log(
	// 		`Removing item ${copy_chosenAnimalType_IdArray[index]} at index ${index}`
	// 	);

	// 	copy_chosenAnimalType_IdArray.splice(index, 1);

	// 	console.log(
	// 		`NEW ID array after removing the ID: ${copy_chosenAnimalType_IdArray}`
	// 	);

	// 	testing__displayObjOfArrs(
	// 		idCollectionOfAnimalsByType,
	// 		"Old collection of animals: "
	// 	);

	// 	setIdCollectionOfAnimalsByType({
	// 		...idCollectionOfAnimalsByType,
	// 		[typeOfAnimal]: {
	// 			thisId: idCollectionOfAnimalsByType[typeOfAnimal].thisId,
	// 			idArray: [...copy_chosenAnimalType_IdArray],
	// 		},
	// 	});

	// 	methods.unregister(`${typeOfAnimal}_${idOfAnimal}`);
	// };

	// const testing__displayObjOfArrs = (obj, msg) => {
	// 	let string = "";
	// 	Object.keys(obj).forEach(
	// 		(arr) =>
	// 			obj[arr].length > 0 && (string += `\n - ${arr}: ${obj[arr]}`)
	// 	);
	// 	string !== "" && console.log(`${msg}${string}`);
	// };

	// useEffect(() => {
	// 	testing__displayObjOfArrs(
	// 		idCollectionOfAnimalsByType,
	// 		"(useEffect) updated collection of animals: "
	// 	);
	// }, [idCollectionOfAnimalsByType]);

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
						className={`flex-col-acenter ${styles.form__center}`}
						onSubmit={methods.handleSubmit(onSubmit)}
					>
						{/* <Button
							buttonStyle="btn--outline"
							onClick={clearLocalStorage}
						>
							TESTING - Clear LocalStorage
						</Button> */}
						<Tabs forceRenderTabPanel>
							<TabList>
								<Tab>Contact Info</Tab>
								<Tab>Your Animal(s)</Tab>
								<Tab>Preferred Date</Tab>
							</TabList>
							<TabPanel>
								<Collapsible
									trigger="Contact Info"
									open
									triggerDisabled={true}
									transitionTime={200}
									easing="ease"
								>
									<ContactInfoSection />
								</Collapsible>
							</TabPanel>
							<TabPanel>
								<Collapsible
									trigger="Animal Info"
									open
									triggerDisabled={true}
									transitionTime={200}
									easing="ease"
								>
									<AnimalsBasic />
									{/* <Button onClick={addAnimal}>
										Add Another Animal
									</Button> */}

									{/* <h4>Select Your Animals:</h4>
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
									</select> */}
								</Collapsible>
							</TabPanel>
							<TabPanel>
								<Collapsible
									trigger="Schedule A Date"
									open
									triggerDisabled={true}
									transitionTime={200}
									easing="ease"
								>
									<OrderFormSectionSubheading>
										Pick a Preferred Date, and you may
										choose an Alternate Date or Alternate
										Start and End Date Window
									</OrderFormSectionSubheading>
									<div
										className={`flex-jcenter-astart-wrap gap-4 ${styles.date}`}
									>
										{/* <SchedulerInput 
										register={methods.register} title="Preferred Date:" /> */}
										<SchedulerInputWindow 
										register={methods.register} title="Alternate Date or Date Window" />
									</div>
									{/* <button className="btn btn--primary date-picker-done">Done</button> */}
								</Collapsible>
							</TabPanel>
						</Tabs>

						<div className={styles.heading_container}>
							<h3 className="order-form--before-submitting">
								Please Double Check Your Selections Before
								Submitting!
							</h3>
						</div>


						<p
							className={`${styles.notification} ${
								Object.keys(methods.formState.errors).length > 0
									? `${styles.show} ${styles.error}`
									: ""
							}`}
						>
							Please Fix Marked Fields
						</p>
						<input
							type="submit"
							className={`${styles.submit} btn btn--outline btn--large`}
							value="Submit Form"
						/>
					</form>
				</FormProvider>
			</WhitePageBackground>
		</>
	);
}

export default Order;
