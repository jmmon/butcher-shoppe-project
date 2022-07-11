// import React, { useEffect, useState } from "react";

// import * as React from 'preact';
import { useEffect, useState } from "preact/compat";
import styles from "./OrderForm.module.css";

// import axios from "axios";
// import { useForm, FormProvider } from "react-hook-form";


// import ContactInfoSection from "../FormComponents/Sections/ContactInfoSection/ContactInfoSection";
// import AnimalsBasic from "../FormComponents/Sections/AnimalsBasic/AnimalsBasic";
// import DateSelector from "../FormComponents/Sections/DateSelector/DateSelector";

// import OrderNotes from "../FormComponents/Sections/OrderNotes/OrderNotes";

const headers = { "Content-Type": "application/json" };

const orderFormBackendUri =
	"https://thenorthportbutchershoppe.com/server/order";


// const orderFormBackendUri =
// 	"https://thenorthportbutchershoppe.com/staging/server/contact";

// const orderFormBackendUri = "http://localhost:3001/server/order";

export default function OrderForm() {
	return (
		<div>Order form works</div>
	);
}


// export default function OrderForm() {
// 	const methods = useForm({
// 		mode: "all",
// 	});

// 	const [responseFromSubmitOrder, setResponseFromSubmitOrder] = useState({
// 		data: null,
// 		error: null,
// 		isLoading: false,
// 	});


// 	let timer = null;

// 	const resetButtonWithSetTimeout = () => {
// 		timer = setTimeout(() => {
// 			// reset button timer
// 			setResponseFromSubmitOrder((prevState) => ({
// 				...prevState,
// 				data: null,
// 				error: null,
// 				isLoading: false,
// 			}));
// 		}, 6000);
// 	};

// 	useEffect(() => {
// 		// componentWillUnmount
// 		return () => {
// 			if (timer) {
// 				clearTimeout(timer);
// 			}
// 		};
// 	});

// 	const formHandleSubmit = (data) => {
// 		console.log({ data });

// 		//check for missing end date on alternative date selection?
// 		if (!data.dates.alternate.end) {
// 			data.dates.alternate.end = data.dates.alternate.start;
// 		}

// 		data.dates.preferred = data.dates.preferred.toDateString();
// 		data.dates.alternate.start = data.dates.alternate.start.toDateString();
// 		data.dates.alternate.end = data.dates.alternate.end.toDateString();
// 		data.order_number = (Math.random() * 100000) | 0;

// 		setResponseFromSubmitOrder((prevState) => ({
// 			...prevState,
// 			isLoading: true,
// 			data: null,
// 			error: null,
// 		}));

// 		console.log("attempt axios post to:", orderFormBackendUri);

// 		axios
// 			.post(orderFormBackendUri, data, {
// 				headers: headers,
// 			})
// 			.then((res) => {
// 				console.log("response status:", res.status);

// 				setResponseFromSubmitOrder((prevState) => ({
// 					...prevState,
// 					data: res.data,
// 					error: null,
// 					isLoading: false,
// 				}));

// 				// clear data
// 			})
// 			.catch((e) => {
// 				console.log("axios post error:", e);

// 				setResponseFromSubmitOrder((prevState) => ({
// 					...prevState,
// 					isLoading: false,
// 					data: null,
// 					error: e,
// 				}));
// 			})
// 			.finally(() => {
// 				resetButtonWithSetTimeout();
// 			});
// 	};

// 	return (

// 		<FormProvider {...methods}>
// 			<form
// 				className={`flex-col-acenter ${styles.form__center}`}
// 				onSubmit={methods.handleSubmit(formHandleSubmit)}
// 			>
// 				{/* <Tabs forceRenderTabPanel>
// 					<TabList>
// 						<Tab>Contact Info</Tab>
// 						<Tab>Your Animal(s)</Tab>
// 						<Tab>Preferred Date</Tab>
// 						<Tab>Notes</Tab>
// 					</TabList>
// 					<TabPanel>
// 						<ContactInfoSection />
// 					</TabPanel>
// 					<TabPanel>
// 						<AnimalsBasic />
// 					</TabPanel>
// 					<TabPanel>
// 						<DateSelector />
// 					</TabPanel>
// 					<TabPanel>
// 						<OrderNotes />
// 					</TabPanel>
// 				</Tabs> */}

// 				<div className={styles.heading_container}>
// 					<h4 className="order-form--before-submitting">
// 						Please Double Check Your Information Before
// 						Submitting!
// 					</h4>
// 				</div>

// 				<p
// 					className={`${styles.notification} ${
// 						Object.keys(methods.formState.errors).length > 0
// 							? `${styles.show} ${styles.error}`
// 							: ""
// 					}`}
// 				>
// 					Please Fix Marked Fields
// 				</p>

// 				<button
// 					type="submit"
// 					className={`${
// 						styles.submit
// 					} btn btn--outline btn--large ${
// 						responseFromSubmitOrder.isLoading
// 							? "btn--pending"
// 							: responseFromSubmitOrder.data
// 							? "btn--complete"
// 							: responseFromSubmitOrder.error
// 							? "btn--error"
// 							: ""
// 					}`}
// 					disabled={responseFromSubmitOrder.isLoading}
// 				>
// 					{responseFromSubmitOrder.isLoading
// 						? "Submitting..."
// 						: responseFromSubmitOrder.data
// 						? "Order submitted!"
// 						: responseFromSubmitOrder.error
// 						? "Submission Error"
// 						: "Submit"}
// 				</button>

// 				<p
// 					className={`${styles.notification} ${
// 						responseFromSubmitOrder.error
// 							? `${styles.show} ${styles.error}`
// 							: responseFromSubmitOrder.data
// 							? `${styles.show} ${styles.success}`
// 							: ""
// 					}`}
// 				>
// 					{responseFromSubmitOrder.data
// 						? "Order Submitted! A copy will be sent to your provided email address."
// 						: responseFromSubmitOrder.error
// 						? `Error: ${responseFromSubmitOrder.error.message}`
// 						: ""}
// 				</p>
// 			</form>
// 		</FormProvider>
		
// 	);
// }
