import React from "react";
import "./Services.css";

import bgTitle from "assets/images/image-1-2.jpg";
import bgServices from "assets/images/image-1-124.jpg";
import bgProcessing from "assets/images/image-1-2.jpg";

import Button from "components/Button/Button";
import PageTitle from "components/PageTitle/PageTitle";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";

import ServicesButchering from "components/ServicesButchering/ServicesButchering";
import ServicesProcessing from "components/ServicesProcessing/ServicesProcessing";

function Services() {
	return (
		<>
			<PageTitle title="SERVICES" bgImage={bgTitle} position="50% 40%" />
			<WhitePageBackground>
				<div className="grid-row-gap-4">
					<div className="card--width">
						<div className="services-btns-container">
							<Button
								className="btns"
								buttonStyle="btn--outline"
								buttonSize="btn--large"
								url="#butchering-link"
							>
								Butchering
							</Button>
							<Button
								className="btns"
								buttonStyle="btn--outline"
								buttonSize="btn--large"
								url="#processing-link"
							>
								Processing
							</Button>
						</div>
					</div>

					<Card
						title="What We Offer"
						paragraphs={[
							"We cover the tri-county area with our mobile farmkill truck, and we process that meat in our store in Downtown Northport.",
							"We provide farm kills for beef, hogs, goats, lamb and bison. This includes dispatch, evisceration and transport to our meat shop.",
							"We provide custom cut, cure, smoke and wrap.",
							"We process wild game, including deer, elk, moose and bear.",
						]}
					>
						<ul className="indent">
							<li>No poultry</li>
						</ul>
						<p>
							Basic kill fees and average meat processing fees are
							outlined below. Kill fees are paid in the field and
							processing fees are paid upon pick-up at the
							downtown Northport store.{" "}
							<a href="#map-link-target">(See map down below)</a>
						</p>
					</Card>

					<div className="card--width">
						<Card
							title="Farm Kill"
							paragraphs={[
								"On the scheduled day of your appointment, you will be asked to safely secure your animal(s) where dispatch can occur without harming other livestock. The designated animal(s) will be killed, hung, eviscerated, de-hided, de-headed and de-legged on sight.",
								"	You may choose to retain any or all of the contents removed from the animal. We will dispose of the rest. Then your animal(s) will be weighed and loaded into a refrigerated box and transported to the designated shop. Kill and leave is an option as well.",
							]}
							bg={bgServices}
						/>
						<ServicesButchering bg={bgServices} />
					</div>
					<div className="card--width">
						<ServicesProcessing bg={bgProcessing} />
					</div>
				</div>
			</WhitePageBackground>
			<NavBottomButtons
				prev={{ title: "FAQ", link: "/faq" }}
				next={{ title: "How To Order", link: "/how-to-order" }}
			/>
		</>
	);
}

export default Services;
