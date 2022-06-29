import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Subscribe.module.css";

const headers = {
	"Content-Type": "application/json",
	// "Access-Control-Allow-Origin": "https://staging.thenorthportbutchershoppe.com"
};

function Subscribe({ unsubscribe, className }) {
	// const subscribeBackendUri = `https://thenorthportbutchershoppe.com/server/${
	// 	unsubscribe ? "unsubscribe" : "subscribe"
	// }`;

	const subscribeBackendUri = `https://thenorthportbutchershoppe.com/staging/server/${
		unsubscribe ? "unsubscribe" : "subscribe"
	}`;

	// const subscribeBackendUri = `http://localhost:3001/server/${
	// 	unsubscribe ? "unsubscribe" : "subscribe"
	// }`;

	let timer = null;

	const [responseFromSubscribeBox, setResponseFromSubscribeBox] = useState({
		data: null,
		error: null,
		isLoading: false,
	});

	const [email, setEmail] = useState("");

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
					// console.log(
					// 	`Success at ${
					// 		unsubscribe ? "unsubscribe" : "subscribe"
					// 	} email request!`
					// );
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
		<form className={`${className} flex-jcenter-wrap-astretch ${styles.wrapper} card panel-shadow--light`} onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				placeholder="Your Email"
				className={styles.input}
				required
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button
				className={`btn btn--medium btn--outline ${
					responseFromSubscribeBox.isLoading
						? "btn--pending"
						: responseFromSubscribeBox.data
						? "btn--complete"
						: responseFromSubscribeBox.error
						? "btn--error"
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
				className={`${styles.notification} ${
					responseFromSubscribeBox.error
						? styles.error
						: responseFromSubscribeBox.data
						? styles.success
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

export default Subscribe;
