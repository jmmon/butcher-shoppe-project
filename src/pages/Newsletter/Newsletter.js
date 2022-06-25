import React from "react";
import "./Newsletter.css";
import Helmet from "react-helmet";

import bgImage from "assets/images/image-1-136.jpg";

import PageTitle from "components/PageTitle/PageTitle";
import Subscribe from "components/Subscribe/Subscribe";
import Button from "components/Button/Button";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import Card from "components/Card/Card";

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
					title="SUBSCRIBE TO OUR NEWSLETTER"
					bgImage={bgImage}
					smaller={true}
				/>
				<WhitePageBackground>
					<section className="">
						<Card
							title="What's happening at The Butcher Shoppe?"
							className="newsletter--blerb-container"
						>
							<div className="flex-jcenter newsletter--blerb-heading--container">
								<h3 className="newsletter--blerb-heading">
									<em>
										Get All Our Updates Delivered Straight
										To Your Inbox!
									</em>
								</h3>
							</div>

							<p className="card--paragraph">
								For our neighbors and our community, we like to
								keep everyone up to date on all things related
								to The Butcher Shoppe. We send out a
								twice-monthly newsletter with all the info!
							</p>
							<p className="card--paragraph">
								Want to stay informed? Take part in our
								newsletter to stay up to date on all the Shoppe
								information: news, updates, and more!
							</p>
							<p className="card--paragraph">
								Enter your email address below and click
								"Subscribe" to receive instructions on how to
								confirm your newsletter subscription!
							</p>
						</Card>
						<div className="margin-6--top"></div>
						<Subscribe/>
						<div className="margin-4--top"></div>
					</section>

					{/* <section className={`white card--width  card--font-size`}>
						<div className="grid-row-gap-1-2 card--content-width ">
							<h3 className="card--heading text-center">
								Get All Our Updates Delivered Straight To Your
								Inbox!
							</h3>
						</div>
						<Subscribe />
					</section> */}
				</WhitePageBackground>
				<WhitePageBackground separate={true}>
					<div className="flex-col-acenter gap-2 padding-1">
						<h3>Looking to unsubscribe?</h3>
						<Button
							// className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
							url="/newsletter/unsubscribe"
						>
							Click here
						</Button>
					</div>
				</WhitePageBackground>
			</main>
		</>
	);
}

export default NewsletterPage;
