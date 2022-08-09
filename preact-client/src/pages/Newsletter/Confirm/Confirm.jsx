import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useRoute } from "wouter";
import PageTitle from "layouts/PageTitle/PageTitle";
import PageLayout from "layouts/PageLayout/PageLayout";
import bgImage from "assets/images/image-1-136-cropped-55.jpg";

import Styles from "components/Subscribe/Subscribe.module.css";
import { Helmet } from "react-helmet";

const confirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

// const TESTINGconfirmUri =
// 	"https://thenorthportbutchershoppe.com/mailman/confirm/testing_thenorthportbutchershoppe.com";

const listName = "Newsletter";

export default function Confirm({ isUnsubscribe}) {
	const route = isUnsubscribe ? "/newsletter/unsubscribe/confirm/:confirmationId" : "/newsletter/subscribe/confirm/:confirmationId";
  const [, params] = useRoute(route);
	const confirmationId = params.confirmationId;
	const [location, setLocation] = useLocation();	
	const [error, setError] = useState(null);
	let timer = null;

	const subscribeCommand = isUnsubscribe ? "Unsubscribe+from" : "Subscribe+to";
	const confirmData = `realname=&digests=0&language=en&cookie=${confirmationId}&submit=${subscribeCommand}+list+${listName}`;

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

	// On load:
	useEffect(() => {
		console.log(`${isUnsubscribe ? 'Unsubscribe' : 'Subscribe'} param: ${confirmationId}`);

		axios
			.post(confirmUri, confirmData)
			.then((res) => {
				console.log("SubscribeConfirm-POST response:", res);
				console.log({status: res.status, data: res.data});

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
				<Helmet>
					<title>
						Our Newsletter | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="Join our twice-monthly newsletter to stay up-to-date on your local Butcher Shoppe news."
					/>
				</Helmet>
			}
			title={<PageTitle bgImage={bgImage} title={`Confirm ${isUnsubscribe ? "Unsubscription" : "Subscription"}`} />}
		>
			<div className="flex-col-jcenter-acenter">
				{isUnsubscribe ? (
					<h2>Come back anytime to stay up to date!</h2>
				) : (
					<h2>Thanks For Joining Our Newsletter!</h2>
				)}
				<p>
					You will be redirected to our home page in a few seconds.
				</p>
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