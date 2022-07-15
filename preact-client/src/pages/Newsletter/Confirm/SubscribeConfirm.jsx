import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "wouter";
import PageTitle from "components/PageTitle/PageTitle";
import PageLayout from "components/PageLayout/PageLayout";
import bgImage from "assets/images/image-1-136-cropped-55.jpg";

import Styles from "components/Subscribe/Subscribe.module.css";

const confirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

// const TESTINGconfirmUri =
// 	"https://thenorthportbutchershoppe.com/mailman/confirm/testing_thenorthportbutchershoppe.com";
const listName = "Newsletter";

export default function SubscribeConfirm({ isSubscribePage, id }) {
	const [location, setLocation] = useLocation();
	const confirmationId = id;

	const [error, setError] = useState(null);

	let timer = null;

	const startRedirectTimer = () => {
		timer = setTimeout(() => {
			setLocation("/", { replace: true });
		}, 3000);
	};

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
					startRedirectTimer();
				}
			})
			.catch((e) => {
				setError(e);
				console.log("SubscribeConfirm-POST axios error:", e);
			});
	}, []);

	return (
		<PageLayout
			helmet={
				<>
					<title>
						Our Newsletter | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="Join our twice-monthly newsletter to stay up-to-date on your local Butcher Shoppe news."
					/>
				</>
			}
			title={<PageTitle bgImage={bgImage} title="Confirm Subscription" />}
		>
			<div className="flex-col-jcenter-acenter">
				{isSubscribePage && (
					<>
						<h2>Thanks For Joining Our Newsletter!</h2>
						<p>
							You will be redirected to our home page in a few
							seconds.
						</p>
					</>
				)}
				{!isSubscribePage && (
					<>
						<h2>Come back anytime to stay up to date!</h2>
						<p>
							You will be redirected to our home page in a few
							seconds.
						</p>
					</>
				)}
				{error && (
					<p
						className={`${Styles.notification} ${Styles.show} ${Styles.error} card--content-width`}
					>
						There was an error with the confirmation. Please try
						again from the email link, or contact us if you need
						assistance!
						<br />
						Error message: {error.message}
					</p>
				)}
			</div>
		</PageLayout>
	);
}

// TODO: migrate this function to the under-conostruction barnch so live testing can be performed behind the scenes before links are added in the confirmation emails.
