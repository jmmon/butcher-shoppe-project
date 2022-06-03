import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const confirmUri =
	"https://thenorthportbutchershoppe.com/mailman/confirm/newsletter_thenorthportbutchershoppe.com";

function SubscribeConfirm({ subscribe }) {
	const { confirmId } = useParams();

	React.useEffect(() => {
		console.log("SubscribeConfirm param:", confirmId);
		const data = `cookie=${confirmId}&submit=${
			subscribe ? "subscribe" : "unsubscribe"
		}`;
		axios
			.post(confirmUri, data)
			.then((res) => {
				console.log("SubscribeConfirm-POST response:", res);
				console.log("SubscribeConfirm-POST response.data:", res.data);
			})
			.catch((e) => {
				console.log("SubscribeConfirm-POST axios error:", e);
			});
	}, [confirmId]);

	return (
		<div>
			<h2>Testing this redirect for confirming emails</h2>
		</div>
	);
}

export default SubscribeConfirm;
