import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";
import PageTitle from "components/PageTitle/PageTitle";
import PageLayout from "components/PageLayout/PageLayout";

const confirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

// const TESTINGconfirmUri =
// 	"https://thenorthportbutchershoppe.com/mailman/confirm/testing_thenorthportbutchershoppe.com";
const listName = "Newsletter";

function SubscribeConfirm({ isSubscribePage, id }) {
	const [location, setLocation] = useLocation();
	const confirmationId = id;

	const [error, setError] = useState(null);

	let timer = null;
	timer = setTimeout(() => {
		setError = null;
	}, 10000);

	useEffect(() => {
		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [timer]);

	React.useEffect(() => {
		console.log("SubscribeConfirm param:", confirmationId);
		const data = `realname=&digests=0&language=en&cookie=${confirmationId}&submit=${
			isSubscribePage ? "Subscribe+to" : "Unsubscribe+from"
		}+list+${listName}`;

		axios
			.post(confirmUri, data)
			.then((res) => {
				console.log("SubscribeConfirm-POST response:", res);
				console.log("SubscribeConfirm-POST response.data:", res.data);

				console.log(res.status);
				if (res.status < 300) {
					setLocation("/", { replace: true });
				}
			})
			.catch((e) => {
				setError(e);

				console.log("SubscribeConfirm-POST axios error:", e);
			});
	}, [confirmationId, setLocation, location, isSubscribePage, setError]);

	return (
		<PageLayout
			helmet={null}
			title={<PageTitle title="Confirm Subscription"></PageTitle>}
		>
			<div className="flex-col-jcenter-acenter">
				{isSubscribePage && (
					<>
						<h2>Thanks For Joining Our Newsletter</h2>
						<p>You will be redirected to our home page.</p>
					</>
				)}
				{!isSubscribePage && (
					<h2>Come back anytime to stay up to date!</h2>
				)}
				{!isSubscribePage && (
					<p>You will be redirected to our home page.</p>
				)}
				{error && (
					<p className="subscribe_notification error">
						There was an error with the confirmation:{" "}
						{error.message}
					</p>
				)}
			</div>
		</PageLayout>
	);
}

export default SubscribeConfirm;

// TODO: migrate this function to the under-conostruction barnch so live testing can be performed behind the scenes before links are added in the confirmation emails.
