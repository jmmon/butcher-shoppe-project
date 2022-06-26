import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import PageTitle from "components/PageTitle/PageTitle";
import Button from "components/Button/Button";

// const confirmUri =
// 	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

const TESTINGconfirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/testing_thenorthportbutchershoppe.com";
const listName = "Testing";

function SubscribeConfirm({ isSubscribePage }) {
	const params = useParams();
	const history = useHistory();
	const confirmationId = params.id;

	const [error, setError] = useState(null);

	// const handleConfirmSubscription = () => {
	// 	console.log("SubscribeConfirm param:", confirmationId);
	// 	// const data = `cookie=${confirmationId}&submit=${
	// 	// 	subscribe ? "subscribe" : "unsubscribe"
	// 	// }`;
	// 	const data = `realname=&digests=0&language=en&cookie=${confirmationId}&submit=Subscribe+to+list+${listName}`

	// 	axios
	// 		.post(TESTINGconfirmUri, data)
	// 		.then((res) => {
	// 			console.log("SubscribeConfirm-POST response:", res);
	// 			console.log("SubscribeConfirm-POST response.data:", res.data);
	// 		})
	// 		.catch((e) => {
	// 			console.log("SubscribeConfirm-POST axios error:", e);
	// 		});
	// }
	let timer = null;
	timer = setTimeout(() => {
			setError = null;
	}, 10000)

	useEffect(() => {return () => {timer.destroy();}}, []);

	React.useEffect(() => {
		console.log("SubscribeConfirm param:", confirmationId);
		const data = `realname=&digests=0&language=en&cookie=${confirmationId}&submit=${isSubscribePage ? "Subscribe+to" : "Unsubscribe+from"}+list+${listName}`
		// const data = `cookie=${confirmationId}&submit=${
		// 	subscribe ? "subscribe" : "unsubscribe"
		// }`;
		axios
			.post(TESTINGconfirmUri, data)
			.then((res) => {
				console.log("SubscribeConfirm-POST response:", res);
				console.log("SubscribeConfirm-POST response.data:", res.data);
				
				console.log(res.status);
				if (res.status < 300) {
					history.push("/");
				}
			})
			.catch((e) => {
				setError(e);

				console.log("SubscribeConfirm-POST axios error:", e);
			});
	}, [confirmationId, history]);

	return (
		<div>
			<PageTitle title="Confirm Subscription"></PageTitle>
			<WhitePageBackground>
				<div className="flex-col-jcenter-acenter">
				{isSubscribePage && <><h2>Thanks For Joining Our Newsletter</h2><p>You will be redirected to our home page.</p></>}
				{!isSubscribePage && <h2>Come back anytime to stay up to date!</h2>}
				{!isSubscribePage && <><p>You will be redirected to our home page.</p></>}
				{error && <p className="subscribe_notification error">There was an error with the confirmation: {error.message}</p>}
				</div>

				{/* <div className="flex-col-jcenter-acenter">
				{subscribe && <h2>Click the button below to confirm your newsletter subscription!</h2>}
				{!subscribe && <h2>Click the button below to stop receiving our newsletter!</h2>}

					<Button buttonStyle="btn--outline"
					onClick={handleConfirmSubscription}>
						Confirm {subscribe ? "Subscription" : "Unsubscription"}
					</Button>
				</div> */}

			</WhitePageBackground>
		</div>
	);
}

export default SubscribeConfirm;
