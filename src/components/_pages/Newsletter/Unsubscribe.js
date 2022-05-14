import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import bgImage from "../../../assets/images/image-1-136.jpg";
import "./Newsletter.css";
import Subscribe from "../../Subscribe.js/Subscribe";

function NewsletterPage() {
	return (
		<>
			<PageTitle heading="UNSUBSCRIBE" bgImage={bgImage} />
			<div className="newsletter">
				<div
					id="unsubscribe"
					className="newsletter--container panel--shadow"
				>
					<h1 className="newsletter--subheading">
						Looking to unsubscribe?
					</h1>
					<div className="newsletter--container--content-wrapper">
						<p className="newsletter--blerb card panel--shadow">
							We hope you enjoy our newsletters! If you are
							already a newsletter subscriber and wish to
							unsubscribe, you can do that here. <br />
							<br />
							Enter your subscribed email below and we will send
							you an email for you to confirm your removal from
							our newsletter mailing list. Click the link in the
							email and you will be unsubscribed!
						</p>
						<div className="subscribe--wrapper unsubscribe card">
							<Subscribe unsubscribe={true} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default NewsletterPage;
