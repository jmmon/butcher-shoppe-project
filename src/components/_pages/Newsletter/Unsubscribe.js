import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import bgImage from "../../../assets/images/image-1-136.jpg";
import "./Newsletter.css";
import Subscribe from "../../Subscribe.js/Subscribe";
import Helmet from "react-helmet";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground";

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
				<PageTitle title="UNSUBSCRIBE" bgImage={bgImage} />
				<WhitePageBackground>
					<section>
						<h2 className="page--subheading">
							Looking To Unsubscribe From Our Newsletter?
						</h2>
						<div className="newsletter--container--content-wrapper">
							<p className="newsletter--blerb card panel-shadow--light">
								We hope you enjoy our newsletters! If you are
								already a newsletter subscriber and wish to
								unsubscribe, you can do that here. <br />
								<br />
								Enter your subscribed email below and we will
								send you an email for you to confirm your
								removal from our newsletter mailing list. Click
								the link in the email and you will be
								unsubscribed!
							</p>
							<Subscribe unsubscribe={true} />
						</div>
					</section>
				</WhitePageBackground>
			</main>
		</>
	);
}

export default NewsletterPage;
