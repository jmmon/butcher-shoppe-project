import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

const contactBoxBackendUri =
	"https://thenorthportbutchershoppe.com/server/contact";
// const contactBoxBackendUri = "localhost:3001/server/contact";
const headers = { "Content-Type": "application/json" };

const Contact = () => {
	// const form = useRef();
	const [input, setInput] = useState({
		contact__name: "",
		contact__email: "",
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
			contact__textarea: input.contact__textarea,
			contact__number: (Math.random() * 100000) | 0,
		};

		console.log("message data:", dataFromContactBox);
		console.log("attempt axios post to:", contactBoxBackendUri);

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
		<div className="contact">
			<form className="contact__form" onSubmit={formHandleSubmit}>
				<div className="input__container input__small">
					<label className="contact__label" htmlFor="contact__name">
						Name:
					</label>

					<input
						type="text"
						className="contact__input contact__name"
						name="contact__name"
						placeholder="Your name"
						value={input.contact__name}
						onChange={inputHandleChange}
						required
					/>
				</div>

				<div className="input__container input__small">
					<label className="contact__label" htmlFor="contact__email">
						Email:
					</label>

					<input
						type="email"
						className="contact__input contact__email"
						name="contact__email"
						placeholder="Your email"
						value={input.contact__email}
						onChange={inputHandleChange}
						required
					/>
				</div>

				<div className="input__container input__large">
					<label
						className="contact__label"
						htmlFor="contact__textarea"
					>
						How can we help you?
					</label>

					<textarea
						type="text"
						className="contact__input contact__textarea"
						name="contact__textarea"
						placeholder="Type here..."
						onChange={inputHandleChange}
						value={input.contact__textarea}
						required
					/>
				</div>

				<button
					type="submit"
					className={`contact__form__submit btn btn--outline btn--large ${
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

				{/* <button
					type="submit"
					className={`contact__form__submit btn btn--outline btn--large ${
						sentToUs.status === "PENDING"
							? "btn--pending"
							: sentToUs.status === "COMPLETE"
							? "btn--complete"
							: sentToUs.status === "ERROR"
							? "btn--error"
							: ""
					}`}
					disabled={sentToUs.status === "PENDING"}
				>
					{sentToUs.status === "PENDING"
						? "Sending..."
						: sentToUs.status === "COMPLETE"
						? "Email Sent!"
						: sentToUs.status === "ERROR"
						? "Sending Error!"
						: "Send Email"}
				</button> */}

				<p
					className={`contact__form__notification ${
						responseFromContactBox.error
							? "error"
							: responseFromContactBox.data
							? "success"
							: ""
					}`}
				>
					{responseFromContactBox.data
						? "Message sent! A copy will be sent to your provided email address."
						: responseFromContactBox.error
						? `Error: ${responseFromContactBox.error.message}`
						: ""}
				</p>

				{/* <p
					className={`contact__form__notification ${
						sentToUs.status === "ERROR" && "error"
					} ${sentToUs.status === "COMPLETE" && "success"}`}
				>
					{sentToUs.status === "COMPLETE"
						? "Message sent! A copy will be sent to your provided email address."
						: sentToUs.errMsg}
				</p> */}
			</form>
		</div>
	);
};

export default Contact;
