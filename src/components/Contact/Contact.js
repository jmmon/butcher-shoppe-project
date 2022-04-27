import { useState, useRef } from "react";
import "./Contact.css";

// import useForm from '../utils/useForm';

import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const emailJs = {
	userId: "s_lsMHoKQ1eYJ_my7",
	service_toUs: "service_9s7s7i9",
	service_toThem: "service_x2o8oyf",
};

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

		// get random number for "contact number" displayed in email, to differentiate contacts -- necessary?? Not sure
		form.current.contact__number.value = (Math.random() * 100000) | 0;

		setSentToUs((prevState) => ({
			...prevState,
			status: "PENDING",
			errMsg: null,
		}));

		// send us the email
		emailjs
			.sendForm(
				emailJs.service_toUs,
				"contact_form",
				form.current,
				emailJs.userId
			)
			.then(() => {
				setSentToUs((prevState) => ({
					...prevState,
					status: "COMPLETE",
				}));

				console.log("timer set");
				timer = setTimeout(() => {
					// reset button timer
					console.log("timer ended");
					setSentToUs((prevState) => ({
						...prevState,
						status: "WAITING",
					}));
				}, 4000);

				setInput((prevInput) => {
					// clear input boxes
					return {
						...prevInput,
						contact__name: "",
						contact__email: "",
						contact__textarea: "",
					};
				});
			})
			.catch((err) => {
				console.log("Failed:", err);
				setSentToUs((prevState) => ({
					...prevState,
					status: "ERROR",
					errMsg: err,
				}));
			});
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
			<form className="contact__form" ref={form} onSubmit={handleSubmit}>
				<input type="hidden" name="contact__number" />

				<div className="input__container input__small">
					<label className="contact__label" htmlFor="contact__name">
						Name:
					</label>

					<input
						type="text"
						className="contact__input contact__name footer-input"
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
						className="contact__input contact__email footer-input"
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
						className="contact__input contact__textarea footer-input"
						name="contact__textarea"
						placeholder="Type here..."
						onChange={handleChange}
						value={input.contact__textarea}
						required
					/>
				</div>

				{(sentToUs.status === "WAITING" ||
					sentToUs.status === "ERROR") && (
					<button
						type="submit"
						className=" contact__form__submit btn btn--outline btn--large"
					>
						Send Email
					</button>
				)}

				{sentToUs.status === "PENDING" && (
					<button
						type="submit"
						className="contact__form__submit btn btn--outline btn--large btn--pending"
						disabled
					>
						Sending...
					</button>
				)}

				{sentToUs.status === "COMPLETE" && (
					<button
						type="submit"
						className=" contact__form__submit btn btn--outline btn--large btn--complete"
						disabled
					>
						Email Sent!
					</button>
				)}

				{sentToUs.errMsg && (
					<p className="contact__form__err">{sentToUs.errMsg}</p>
				)}
			</form>
		</div>
	);
};

export default Contact;
