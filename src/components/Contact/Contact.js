import { useState, useRef } from "react";
import axios from "axios";
import "./Contact.css";

// import useForm from '../utils/useForm';

// import emailjs from "@emailjs/browser";
import { useEffect } from "react";

// const emailJs = {
// 	userId: "s_lsMHoKQ1eYJ_my7",
// 	service_toUs: "service_9s7s7i9",
// 	service_toThem: "service_x2o8oyf",
// };

const Contact = () => {
	const form = useRef();
	const [input, setInput] = useState({
		contact__name: "",
		contact__email: "",
		contact__textarea: "",
	});
	const [sentToUs, setSentToUs] = useState({
		status: "WAITING",
		errMsg: null,
	});

	let timer = null;

	const handleChange = (e) => {
		setInput((prevInput) => {
			return {
				...prevInput,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setSentToUs((prevState) => ({
			...prevState,
			status: "PENDING",
			errMsg: null,
		}));

		const contactMessageData = {
			contact__name: input.contact__name,
			contact__number: (Math.random() * 100000) | 0,
			contact__email: input.contact__email,
			contact__textarea: input.contact__textarea,
		};

		console.log("message data:", contactMessageData);
		console.log("posting axios request");
		axios
			.post("http://localhost:3001/contact", contactMessageData)
			.then((res) => {
				console.log("response status:", res.status);
				setSentToUs((prevState) => ({
					...prevState,
					status: "COMPLETE",
				}));

				setInput((prevInput) => {
					// clear input boxes
					return {
						...prevInput,
						contact__name: "",
						contact__email: "",
						contact__textarea: "",
					};
				});

				resetButtonWithSetTimeout();
			})
			.catch((e) => {
				setSentToUs((prevState) => ({
					...prevState,
					status: "ERROR",
				}));

				resetButtonWithSetTimeout();

				console.log("axios post error:", e);
			});
	};

	const resetButtonWithSetTimeout = () => {
		timer = setTimeout(() => {
			// reset button timer
			setSentToUs((prevState) => ({
				...prevState,
				status: "WAITING",
				errMsg: null,
			}));
		}, 4000);
	};

	useEffect(() => {
		return () => {
			// componentWillUnmount
			if (timer) {
				clearTimeout(timer);
				console.log("timer cleared");
			}
		};
	});

	return (
		<div className="contact">
			<form className="contact__form" onSubmit={handleSubmit}>
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
						onChange={handleChange}
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
						onChange={handleChange}
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
						onChange={handleChange}
						value={input.contact__textarea}
						required
					/>
				</div>

				<button
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
				</button>

				{sentToUs.errMsg && (
					<p className="contact__form__err">{sentToUs.errMsg}</p>
				)}
			</form>
		</div>
	);
};

export default Contact;
