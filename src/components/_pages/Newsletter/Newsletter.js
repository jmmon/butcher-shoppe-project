import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import bgImage from "../../../assets/images/image-1-136.jpg";
import "./Newsletter.css";
import Subscribe from "../../Subscribe.js/Subscribe";
import Button from "../../Button/Button";

import Helmet from "react-helmet";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";

function NewsletterPage() {
	return (
		<>
			<Helmet>
				<title>
					Our Newsletter | The Butcher Shoppe | Northport, WA
				</title>
				<meta
					name="description"
					content="Join our twice-monthly newsletter to stay up-to-date on your local Butcher Shoppe news."
				/>
			</Helmet>
			<main>
				<PageTitle
					heading="SUBSCRIBE TO OUR NEWSLETTER"
					bgImage={bgImage}
					smaller={true}
				/>
				<WhitePageBackground>
					<h2 className="newsletter--heading">
						Get all our updates delivered straight to your inbox!
					</h2>
					<div className="newsletter--container--content-wrapper">
						<p className="newsletter--blerb card panel--shadow">
							<em>What's happening at The Butcher Shoppe?</em>
							<br />
							<br />
							Interested in the services our shop and mobile
							slaughter truck provide? Live in or around the
							beautiful little town of Northport? Just curious
							about what we are up to? Subscribe to our bi-monthly
							newsletter and I'll be sure to keep the updates,
							photos and news coming your way.
							<br />
							<br />
							Enter your email and click “subscribe” to receive
							instructions on how to confirm your subscription to
							The Butcher Shoppe Newsletter.
						</p>

						<div className="subscribe--wrapper card panel--shadow">
							<Subscribe />
						</div>
					</div>
				</WhitePageBackground>
				<WhitePageBackground className="flex-acenter-col newsletter--container-unsubscribe">
					<h3 className="newsletter--subheading-unsubscribe">
						Looking to unsubscribe?
					</h3>
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url="/newsletter/unsubscribe"
					>
						Click here
					</Button>
				</WhitePageBackground>
			</main>
		</>
	);
}

export default NewsletterPage;
