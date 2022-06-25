import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import PageTitle from "components/PageTitle/PageTitle";
import Button from "components/Button/Button";

// const confirmUri =
// 	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

const TESTINGconfirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/testing_thenorthportbutchershoppe.com";

function SubscribeConfirm({ subscribe }) {
	const { confirmId } = useParams();

	const handleConfirmSubscription = () => {
		console.log("SubscribeConfirm param:", confirmId);
		// const data = `cookie=${confirmId}&submit=${
		// 	subscribe ? "subscribe" : "unsubscribe"
		// }`;
		axios
			.post(TESTINGconfirmUri, data)
			.then((res) => {
				console.log("SubscribeConfirm-POST response:", res);
				console.log("SubscribeConfirm-POST response.data:", res.data);
			})
			.catch((e) => {
				console.log("SubscribeConfirm-POST axios error:", e);
			});
	}

	// React.useEffect(() => {
	// 	console.log("SubscribeConfirm param:", confirmId);
	// 	const data = `cookie=${confirmId}&submit=${
	// 		subscribe ? "subscribe" : "unsubscribe"
	// 	}`;
	// 	axios
	// 		.post(TESTINGconfirmUri, data)
	// 		.then((res) => {
	// 			console.log("SubscribeConfirm-POST response:", res);
	// 			console.log("SubscribeConfirm-POST response.data:", res.data);
	// 		})
	// 		.catch((e) => {
	// 			console.log("SubscribeConfirm-POST axios error:", e);
	// 		});
	// });

	return (
		<div>
			<PageTitle title="Confirm Subscription"></PageTitle>
			<WhitePageBackground>
				<div className="flex-col-jcenter-acenter">
				{subscribe && <h2>Click the button below to confirm your newsletter subscription!</h2>}
				{!subscribe && <h2>Click the button below to stop receiving our newsletter!</h2>}

					<Button buttonStyle="btn--outline"
					onClick={handleConfirmSubscription}>
						Confirm {subscribe ? "Subscription" : "Unsubscription"}
					</Button>
				</div>

			</WhitePageBackground>
		</div>
	);
}

export default SubscribeConfirm;
