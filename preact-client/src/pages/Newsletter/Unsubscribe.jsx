import React from "react";
import Styles from "./Newsletter.module.css";

import bgImage from "assets/images/image-1-136-cropped-55.jpg";

import PageTitle from "layouts/PageTitle/PageTitle";
import Subscribe from "components/Subscribe/Subscribe";
import PageLayout from "layouts/PageLayout/PageLayout";
import Card from "components/Card/Card";
import { Helmet } from "react-helmet";

export default function NewsletterPage({path, setVisitedRoutes}) {
	React.useEffect(() => {
		setVisitedRoutes((prev) => ([...prev, path]));
	},[])
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
				<div className={Styles.mt_6}></div>
				<Subscribe unsubscribe />
				<div className={Styles.mt_4}></div>
			</section>
		</PageLayout>
	);
}