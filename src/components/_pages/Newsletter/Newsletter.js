import React from "react";
import PageTitle from "../../PageTitle/PageTitle";
import bgImage from "../../../assets/images/image-1-136.jpg";
import "./Newsletter.css";
import Subscribe from "../../Subscribe.js/Subscribe";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";

function NewsletterPage() {
	return (
		<>
			<PageTitle
				heading="SUBSCRIBE TO OUR NEWSLETTER"
				bgImage={bgImage}
				smaller={true}
			/>
			<div className="newsletter">
				<div className="newsletter--container panel--shadow">
					<h1 className="newsletter--heading">
						Get all our updates delivered straight to your inbox!
					</h1>
					<div className="newsletter--container--content-wrapper">
						{/* <h2 className="newsletter--subheading">
							<em>Subscribe below!</em>
						</h2> */}
						<p className="newsletter--blerb card panel--shadow">
							<em>What's happening at The Butcher Shoppe?</em>{" "}
							<br />
							<br />
							For our neighbors and our community, we like to keep
							everyone up to date on all things related to The
							Butcher Shoppe. We send out a twice-monthly
							newsletter with all the info!
							<br /> <br />
							Want to stay informed? Take part in our newsletter
							to stay up to date on all the Shoppe information:
							news, updates, and more!
							<br />
							<br />
							Enter your email address below and click "Subscribe"
							to receive instructions on how to confirm your
							newsletter subscription!
						</p>

						<div className="subscribe--wrapper card">
							<Subscribe />
						</div>
					</div>
				</div>
				<div className="newsletter--container unsubscribe panel--shadow">
					<h3 className="newsletter--subheading unsubscribe">
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
			</div>
		</>
	);
}

export default NewsletterPage;
