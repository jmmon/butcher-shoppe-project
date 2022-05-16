import { useState, useEffect } from "react";
import axios from "axios";
import "./Subscribe.css";

function Subscribe({ unsubscribe }) {
	const [subscribeStatus, setSubscribeStatus] = useState({
		status: "WAITING",
		errMsg: null,
	});

	// const [showSubscribeNextStep, setShowSubscribeNextStep] = useState(false);

	let timer = null;

	const resetButtonWithSetTimeout = () => {
		timer = setTimeout(() => {
			// reset button timer
			setSubscribeStatus((prevState) => ({
				...prevState,
				status: "WAITING",
				errMsg: null,
			}));
		}, 6000);
	};

	useEffect(() => {
		return () => {
			// componentWillUnmount
			if (timer) {
				clearTimeout(timer);
				//console.log("timer cleared");
			}
		};
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		// console.log("handleSubmit works");

		setSubscribeStatus((prevState) => ({
			...prevState,
			status: "PENDING",
			errMsg: null,
		}));

		const subscribeData = { email: e.target[0].value };
		// console.log("entered email address:", subscribeData);

		await axios
			.post(
				`https://thenorthportbutchershoppe.com/server/${
					unsubscribe ? "unsubscribe" : "subscribe"
				}`,
				subscribeData,
				{ headers: { "Content-Type": "text/plain" } }
			)
			.then((res) => {
				// console.log("response status:", res.status);
				if (res.status === 200) {
					console.log("Success at subscribe email request!");
				} else if (res.status === 500) {
					console.log(
						"Error with sending the subscribe email! Check server for info."
					);
					console.log("res json", res.json);
				}

				setSubscribeStatus((prevState) => ({
					...prevState,
					status: "COMPLETE",
					errMsg: null,
				}));

				// setShowSubscribeNextStep(true);
			})
			.catch((e) => {
				setSubscribeStatus((prevState) => ({
					...prevState,
					status: "ERROR",
					errMsg: e.message,
				}));

				console.log("axios post error:", e);
			});

		resetButtonWithSetTimeout();
	};

	return (
		<>
			<div className="subscribe--container">
				<form className="subscribe--email-form" onSubmit={handleSubmit}>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						className="subscribe--input"
						required
					/>
					<button
						className={`btn btn--medium btn--outline ${
							subscribeStatus.status === "PENDING"
								? "btn--pending"
								: subscribeStatus.status === "COMPLETE"
								? "btn--complete"
								: subscribeStatus.status === "ERROR"
								? "btn--error"
								: ""
						}`}
					>
						{subscribeStatus.status === "WAITING" &&
							(unsubscribe ? "Unsubscribe" : "Subscribe")}
						{subscribeStatus.status === "PENDING" &&
							"Processing..."}
						{subscribeStatus.status === "COMPLETE" &&
							`${
								unsubscribe
									? "Check your email!"
									: "Check your email!"
							}`}
						{subscribeStatus.status === "ERROR" &&
							`${"Oops, try again!"}`}
					</button>
				</form>
			</div>
			{/* {subscribeStatus.status === "COMPLETE" && (
				<p className="subscribe--notification">
					{unsubscribe
						? "Unsubscribe request sent! To confirm, please click the link in the email."
						: "Subscribe request sent! To confirm, please click the link in the email."}
				</p>
			)} */}

			<p
				className={`subscribe--notification ${
					subscribeStatus.status === "ERROR" && "error"
				} ${subscribeStatus.status === "COMPLETE" && "success"}`}
			>
				{subscribeStatus.status === "COMPLETE" &&
					(unsubscribe
						? "Unsubscribe request sent! To confirm, please click the link in the email."
						: "Subscribe request sent! To confirm, please click the link in the email.")}
				{subscribeStatus.status === "ERROR" &&
					`Error: ${subscribeStatus.errMsg}`}
			</p>
		</>
	);
}

export default Subscribe;
