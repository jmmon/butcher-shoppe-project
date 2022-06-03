import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import bgImage from "../../../assets/images/image-1-136.jpg";
import "./Newsletter.css";
import Subscribe from "../../Subscribe.js/Subscribe";
import Button from "../../Button/Button";

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
				<PageTitle
					title="SUBSCRIBE TO OUR NEWSLETTER"
					bgImage={bgImage}
					smaller={true}
				/>
				<WhitePageBackground>
					<section className="">
						<h2 className="page--subheading">
							Get All Our Updates Delivered Straight To Your
							Inbox!
						</h2>
						<div className="newsletter--container--content-wrapper">
							<p className="newsletter--blerb card panel-shadow--light">
								<em>What's happening at The Butcher Shoppe?</em>
								<br />
								<br />
								For our neighbors and our community, we like to
								keep everyone up to date on all things related
								to The Butcher Shoppe. We send out a
								twice-monthly newsletter with all the info!
								<br /> <br />
								Want to stay informed? Take part in our
								newsletter to stay up to date on all the Shoppe
								information: news, updates, and more!
								<br />
								<br />
								Enter your email address below and click
								"Subscribe" to receive instructions on how to
								confirm your newsletter subscription!
							</p>

							<Subscribe />
						</div>
					</section>
				</WhitePageBackground>
				<WhitePageBackground separate={true}>
					<div className="padding-lg--bot">
						<h3 className="margin-lg--top">
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
					</div>
				</WhitePageBackground>
			</main>
		</>
	);
}

export default NewsletterPage;
