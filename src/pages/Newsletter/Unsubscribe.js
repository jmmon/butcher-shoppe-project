import React from "react";
import "./Newsletter.css";
import Helmet from "react-helmet";

import bgImage from "assets/images/image-1-136.jpg";

import PageTitle from "components/PageTitle/PageTitle";
import Subscribe from "components/Subscribe/Subscribe";
import PageLayout from "components/PageLayout/PageLayout";

function NewsletterPage() {
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
			title={<PageTitle title="UNSUBSCRIBE" bgImage={bgImage} />}
		>
			<section>
				<h2 className="page--subheading">
					Looking To Unsubscribe From Our Newsletter?
				</h2>
				<div className="newsletter--container--content-wrapper">
					<p className="newsletter--blerb card panel-shadow--light">
						We hope you enjoy our newsletters! If you are already a
						newsletter subscriber and wish to unsubscribe, you can
						do that here. <br />
						<br />
						Enter your subscribed email below and we will send you
						an email for you to confirm your removal from our
						newsletter mailing list. Click the link in the email and
						you will be unsubscribed!
					</p>
					<Subscribe unsubscribe={true} />
				</div>
			</section>
		</PageLayout>
	);
}

export default NewsletterPage;
