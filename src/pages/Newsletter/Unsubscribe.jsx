import React from "react";
import "./Newsletter.css";
import Helmet from "react-helmet";

import bgImage from "assets/images/image-1-136-cropped-55.jpg";

import PageTitle from "components/PageTitle/PageTitle";
import Subscribe from "components/Subscribe/Subscribe";
import PageLayout from "components/PageLayout/PageLayout";
import Card from "components/Card/Card";

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
				<Card title="Want To Unsubscribe?">
					<p>
						We hope you enjoy our newsletters! If you are already a
						newsletter subscriber and wish to unsubscribe, you can
						do that here.
					</p>
					<p>
						Enter your subscribed email below and we will send you
						an email for you to confirm your removal from our
						newsletter mailing list. Click the link in the email and
						you will be unsubscribed!
					</p>
				</Card>
				<div className="margin-6--top"></div>
				<Subscribe unsubscribe />
				<div className="margin-4--top"></div>
			</section>
		</PageLayout>
	);
}

export default NewsletterPage;
