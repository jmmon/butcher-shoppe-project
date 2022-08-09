import React from "react";
import "./Newsletter.css";

import bgImage from "assets/images/image-1-136-cropped-55.jpg";

import PageTitle from "layouts/PageTitle/PageTitle";
import Subscribe from "components/Subscribe/Subscribe";
import Button from "components/Button/Button";
import WhitePageBackground from "layouts/WhitePageBackground/WhitePageBackground";
import Card from "components/Card/Card";
import PageLayout from "layouts/PageLayout/PageLayout";
import { Helmet } from "react-helmet";

export default function NewsletterPage() {
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
			title={
				<PageTitle
					title="SUBSCRIBE TO OUR NEWSLETTER"
					bgImage={bgImage}
					smaller
				/>
			}
			bottomNav={
				<WhitePageBackground separate={true}>
					<div className="flex-col-acenter gap-2 padding-1">
						<h3>Looking to unsubscribe?</h3>
						<Button
							className="btn--outline btn--large"
							url="/newsletter/unsubscribe"
						>
							Click here
						</Button>
					</div>
				</WhitePageBackground>
			}
		>
			<section>
				<Card
					title="What's happening at The Butcher Shoppe?"
					className="newsletter--blerb-container"
				>
					<div className="flex-jcenter newsletter--blerb-heading--container">
						<h3 className="newsletter--blerb-heading">
							<em>
								Get All Our Updates Delivered Straight To Your
								Inbox!
							</em>
						</h3>
					</div>

					<p>
						For our neighbors and our community, we like to keep
						everyone up to date on all things related to The Butcher
						Shoppe. We send out a twice-monthly newsletter with all
						the info!
					</p>
					<p>
						Want to stay informed? Take part in our newsletter to
						stay up to date on all the Shoppe information: news,
						updates, and more!
					</p>
					<p>
						Enter your email address below and click "Subscribe" to
						receive instructions on how to confirm your newsletter
						subscription!
					</p>
				</Card>
				<div className="margin-6--top"></div>
				<Subscribe />
				<div className="margin-4--top"></div>
			</section>
		</PageLayout>
	);
}