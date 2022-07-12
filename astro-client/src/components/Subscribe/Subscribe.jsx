//import React, { useState, useEffect } from "react";
// import * as React from 'preact';
import { useState, useEffect } from "preact/hooks";
import axios from "axios";
import Styles from "./Subscribe.module.css";

const headers = {
	"Content-Type": "application/json",
	// "Access-Control-Allow-Origin": "https://staging.thenorthportbutchershoppe.com"
};

export default function Subscribe({ unsubscribe = false, className = "" }) {
	const subscribeBackendUri = `https://thenorthportbutchershoppe.com/server/${
		unsubscribe ? "unsubscribe" : "subscribe"
	}`;
	const [email, setEmail] = useState("");
	const [responseFromSubscribeBox, setResponseFromSubscribeBox] = useState({
		data: null,
		error: null,
		isLoading: false,
	});

	let timer = null;

	const resetButtonWithSetTimeout = () => {
		timer = setTimeout(() => {
			// reset button timer

			setResponseFromSubscribeBox((prevState) => ({
				...prevState,
				isLoading: false,
				data: null,
				error: null,
			}));
		}, 6000);
	};

	// componentWillUnmount
	useEffect(() => {
		return () => {
			timer && clearTimeout(timer);
		};
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		setResponseFromSubscribeBox((prevState) => ({
			...prevState,
			isLoading: true,
			data: null,
			error: null,
		}));

		await axios
			.post(subscribeBackendUri, { email: email }, { headers: headers })
			.then((res) => {
				if (res.status === 200) {
					setResponseFromSubscribeBox((prevState) => ({
						...prevState,
						isLoading: false,
						data: email,
						error: null,
					}));

					setEmail("");
				} else if (res.status === 500) {
					setResponseFromSubscribeBox((prevState) => ({
						...prevState,
						isLoading: false,
						data: null,
						error: res.status,
					}));
				}
			})
			.catch((e) => {
				console.error("Axios POST error:", e);
				console.log(`Email: ${email}, URI: ${subscribeBackendUri}`);

				setResponseFromSubscribeBox((prevState) => ({
					...prevState,
					isLoading: false,
					data: null,
					error: e,
				}));
			});

		resetButtonWithSetTimeout();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`${className} flex-jcenter-wrap-astretch ${Styles.wrapper} card panel-shadow--light`}
		>
			<input
				type="email"
				name="email"
				placeholder="Your Email"
				className={Styles.input}
				required
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				className={`${Styles.subscribe_btn} btn--medium--outline${
					responseFromSubscribeBox.isLoading
						? "--pending"
						: responseFromSubscribeBox.data
						? "--complete"
						: responseFromSubscribeBox.error
						? "--error"
						: ""
				}`}
			>
				{responseFromSubscribeBox.isLoading
					? "Processing..."
					: responseFromSubscribeBox.data
					? `${
							unsubscribe
								? "Check your email!"
								: "Check your email!"
					  }`
					: responseFromSubscribeBox.error
					? `${"Oops, try again!"}`
					: unsubscribe
					? "Unsubscribe"
					: "Subscribe"}
			</button>

			<p
				className={`${Styles.notification} ${
					responseFromSubscribeBox.error
						? `${Styles.error} ${Styles.show}`
						: responseFromSubscribeBox.data
						? `${Styles.success} ${Styles.show}`
						: ""
				}`}
			>
				{responseFromSubscribeBox.error?.status === 500
					? `Server error: ${JSON.stringify(
							responseFromSubscribeBox.error
					  )}`
					: responseFromSubscribeBox.error
					? `Error: ${responseFromSubscribeBox.error.message}`
					: responseFromSubscribeBox.data
					? `${
							unsubscribe ? "Unsubscribe" : "Subscribe"
					  } request sent to ${
							responseFromSubscribeBox.data
					  }! To confirm, please click the link in the email.`
					: ""}
			</p>
		</form>
	);
}
