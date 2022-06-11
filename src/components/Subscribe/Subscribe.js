import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Subscribe.css";

const headers = {
	"Content-Type": "application/json",
};

function Subscribe({ unsubscribe }) {
	const subscribeBackendUri = `https://thenorthportbutchershoppe.com/server/${
		unsubscribe ? "unsubscribe" : "subscribe"
	}`;

	// const subscribeBackendUri = `https://localhost:3001/server/${
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

	useEffect(() => {
		// componentWillUnmount
		return () => {
			timer && clearTimeout(timer);
		};
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		// console.log("handleSubmit works");

		setResponseFromSubscribeBox((prevState) => ({
			...prevState,
			isLoading: true,
			data: null,
			error: null,
		}));

		console.log("entered email address:", email);
		console.log("attempt axios post to:", subscribeBackendUri);

		await axios
			.post(subscribeBackendUri, { email: email }, { headers: headers })
			.then((res) => {
				// console.log("response status:", res.status);
				if (res.status === 200) {
					setResponseFromSubscribeBox((prevState) => ({
						...prevState,
						isLoading: false,
						data: email,
						error: null,
					}));

					setEmail("");
					console.log(
						`Success at ${
							unsubscribe ? "unsubscribe" : "subscribe"
						} email request!`
					);
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
				console.log("axios post error:", e);
				console.log("entered email address:", email);
				console.log("attempt axios post to:", subscribeBackendUri);

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
		<div className="subscribe--wrapper card panel-shadow--light">
			<div className="subscribe--container">
				<form className="subscribe--email-form" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="subscribe--input"
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
				</form>
			</div>

			<p
				className={`subscribe--notification ${
					responseFromSubscribeBox.error
						? "error"
						: responseFromSubscribeBox.data
						? "success"
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
		</div>
	);
}

export default Subscribe;
