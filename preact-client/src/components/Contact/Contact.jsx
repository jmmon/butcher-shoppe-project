import React, { useState, useEffect } from "react";
import axios from "axios";

import Styles from "./Contact.module.css";

const contactBoxBackendUri =
	"https://thenorthportbutchershoppe.com/server/contact";

// const contactBoxBackendUri =
// 	"https://thenorthportbutchershoppe.com/staging/server/contact";

// const contactBoxBackendUri = "localhost:3001/server/contact";

const headers = { "Content-Type": "application/json" };

const Contact = () => {
	const [input, setInput] = useState({
		contact__name: "",
		contact__email: "",
		contact__topic: "general",
		contact__textarea: "",
	});

	const [responseFromContactBox, setResponseFromContactBox] = useState({
		data: null,
		error: null,
		isLoading: false,
	});

	let timer = null;

	const inputHandleChange = (e) => {
		setInput((prevInput) => {
			return {
				...prevInput,
				[e.target.name]: e.target.value,
			};
		});
	};

	const resetButtonWithSetTimeout = () => {
		timer = setTimeout(() => {
			// reset button timer
			setResponseFromContactBox((prevState) => ({
				...prevState,
				data: null,
				error: null,
				isLoading: false,
			}));
		}, 6000);
	};

	useEffect(() => {
		// componentWillUnmount
		return () => {
			if (timer) {
				clearTimeout(timer);
			}
		};
	});

	const formHandleSubmit = (e) => {
		e.preventDefault();

		setResponseFromContactBox((prevState) => ({
			...prevState,
			isLoading: true,
			data: null,
			error: null,
		}));

		const dataFromContactBox = {
			contact__name: input.contact__name,
			contact__email: input.contact__email,
			contact__topic: input.contact__topic,
			contact__textarea: input.contact__textarea,
			contact__number: (Math.random() * 100000) | 0,
		};

		// console.log("message data:", dataFromContactBox);
		// console.log("attempt axios post to:", contactBoxBackendUri);

		axios
			.post(contactBoxBackendUri, dataFromContactBox, {
				headers: headers,
			})
			.then((res) => {
				console.log("response status:", res.status);

				setResponseFromContactBox((prevState) => ({
					...prevState,
					data: res.data,
					error: null,
					isLoading: false,
				}));

				// clear input boxes
				setInput((prevInput) => {
					return {
						...prevInput,
						contact__name: "",
						contact__email: "",
						contact__topic: "general",
						contact__textarea: "",
					};
				});
			})
			.catch((e) => {
				console.log("axios post error:", e);

				setResponseFromContactBox((prevState) => ({
					...prevState,
					data: null,
					error: e,
					isLoading: false,
				}));
			})
			.finally(() => {
				resetButtonWithSetTimeout();
			});
	};

	return (
		<form className={Styles.form} onSubmit={formHandleSubmit}>
			<div className={Styles.double_input}>
				<div className={`${Styles.container} ${Styles.small}`}>
					<label className={Styles.label} htmlFor="contact__name">
						Name:
					</label>

					<input
						className={Styles.input}
						type="text"
						name="contact__name"
						placeholder="Your name"
						value={input.contact__name}
						onChange={inputHandleChange}
						required
					/>
				</div>

				<div className={`${Styles.container} ${Styles.small}`}>
					<label className={Styles.label} htmlFor="contact__email">
						Email:
					</label>

					<input
						className={Styles.input}
						type="email"
						name="contact__email"
						placeholder="Your email"
						value={input.contact__email}
						onChange={inputHandleChange}
						required
					/>
				</div>
			</div>

			<div className={`${Styles.container} ${Styles.large}`}>
				<label
					className={`${Styles.label} ${Styles.topic}`}
					htmlFor="contact__topic"
				>
					Topic:
				</label>

				<select
					className={`${Styles.input} ${Styles.topic}`}
					name="contact__topic"
					id="topic"
					onChange={inputHandleChange}
					value={input.contact__topic}
				>
					<option value="general">General Question</option>
					<option value="pricing">Pricing Question</option>
					<option value="orders">Orders Question</option>
					<option value="support">Website Support</option>
				</select>
			</div>

			<div 
			className={`${Styles.container} ${Styles.large} ${Styles.grow}`}
			>
				<label className={Styles.label} htmlFor="contact__textarea">
					How can we help you?
				</label>

				<textarea
					type="text"
					className={`${Styles.input} ${Styles.textarea}`}
					name="contact__textarea"
					placeholder="Type here..."
					onChange={inputHandleChange}
					value={input.contact__textarea}
					required
				/>
			</div>

			<button
				type="submit"
				className={`${Styles.submit} btn btn--outline btn--large ${
					responseFromContactBox.isLoading
						? "btn--pending"
						: responseFromContactBox.data
						? "btn--complete"
						: responseFromContactBox.error
						? "btn--error"
						: ""
				}`}
				disabled={responseFromContactBox.isLoading}
			>
				{responseFromContactBox.isLoading
					? "Sending..."
					: responseFromContactBox.data
					? "Email Sent!"
					: responseFromContactBox.error
					? "Sending Error!"
					: "Send Email"}
			</button>

			<p
				className={`${Styles.notification} ${
					responseFromContactBox.error
						? `${Styles.show} ${Styles.error}`
						: responseFromContactBox.data
						? `${Styles.show} ${Styles.success}`
						: ""
				}`}
			>
				{responseFromContactBox.data
					? "Message sent! A copy will be sent to your provided email address."
					: responseFromContactBox.error
					? `Error: ${responseFromContactBox.error.message}`
					: ""}
			</p>
		</form>
	);
};

export default Contact;