import React from "react";
import "./Services.css";

import bgTitle from "assets/images/image-1-2.jpg";
import bgSlaughter from "assets/images/image-1-124.jpg";
import bgProcessing from "assets/images/image-1-2.jpg";

import Button from "components/Button/Button";
import PageTitle from "components/PageTitle/PageTitle";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";

import ServicesButchering from "components/ServicesButchering/ServicesButchering";
import ServicesProcessing from "components/ServicesProcessing/ServicesProcessing";
import { Link } from "wouter";

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
								url="#slaughter-link"
							>
								Slaughter
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
							"We serve the surrounding Stevens County area with our mobile farm slaughter truck and you have the option to have your carcass delivered to another local shop or send it back to our meat shop in Northport.",
							"We also process wild game, like deer, elk, moose and bear",
							"Sorry, no poultry or rabbits!",
						]}
						// paragraphs={[
						// 	"We serve Stevens County and the surrounding area with our mobile farm slaughter truck. While our shop is under constructionand you have the option to have your carcass delivered to another local shop or send it back to our meat shop in Northport.",
						// 	"We also process wild game, like deer, elk, moose and bear",
						// 	"Sorry, no poultry or rabbits!",
						// ]}

						// paragraphs={[
						// 	"We cover the tri-county area with our mobile farmkill truck, and we process that meat in our store in Downtown Northport.",
						// 	"We provide farm kills for beef, hogs, goats, lamb and bison. This includes dispatch, evisceration and transport to our meat shop.",
						// 	"We provide custom cut, cure, smoke and wrap.",
						// 	"We process wild game, including deer, elk, moose and bear.",
						// ]}
					>
						<p className="card--paragraph">
							Basic kill fees and average meat processing fees are
							outlined below. Kill fees are paid in the field and
							processing fees are paid upon pick-up at the
							downtown Northport store.{" "}
							<a href="#map-link-target">(See map down below)</a>
						</p>
					</Card>

					<hr />

					<div className="flex-col-jcenter" id="slaughter-link">
						<Card
							title="Slaughter"
							paragraphs={[
								"On the scheduled day of your appointment, you will be asked to safely secure your animal(s) where dispatch can occur without harming other livestock. The designated animal(s) will be killed, hung, eviscerated, de-hided, de-headed and de-legged on sight.",
								"	You may choose to retain any or all of the contents removed from the animal. We will dispose of the rest. Then your animal(s) will be weighed and loaded into a refrigerated box and transported to the designated shop. Kill and leave is an option as well.",
							]}
							bg={bgSlaughter}
						/>
						<h2 className="prices-grid-title ">Slaughter Prices</h2>
						{/* <p>Minimum Charge: $100</p> */}
						<div className="prices-grid-container panel-shadow--light">
							<span className="prices-two-column-header">
								Minimum Charge
							</span>
							<span className="prices-two-column-amount">
								$100
							</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-grid-header">Animal</span>
							<span className="prices-grid-header">
								Base Price
							</span>
							<span className="prices-grid-header">
								If You Keep The Guts
							</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-grid-item">Beef</span>
							<span className="prices-grid-item">$160</span>
							<span className="prices-grid-item">$140</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-grid-item">Hog</span>
							<span className="prices-grid-item">$100</span>
							<span className="prices-grid-item">$90</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-grid-item">
								Sheep, <br />
								Goats
							</span>
							<span className="prices-grid-item">$80</span>
							<span className="prices-grid-item">$70</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-grid-item">
								Bison,
								<br />
								Buffalo
							</span>
							<span className="prices-grid-item prices-grid-item-2">
								$180
							</span>
							<span className="prices-grid-item prices-grid-item-2">
								$160
							</span>

							<span className="prices-grid-spacer"></span>

							<span className="prices-two-column">
								Exotic Animals
							</span>
							<span className="prices-two-column">
								<a href="tel:15096907214">Please Call Us</a>
							</span>
						</div>
						<div>
							<h2 className="prices-grid-title ">
								Extra Charges
							</h2>
							<div className="card--width card--content-width card--font-size">
								<ul>
									<li>
										<p className="card--paragraph">
											Fuel surcharge will apply based on
											the current diesel prices
										</p>
									</li>
									<li>
										<p className="card--paragraph">
											Farms located north of Chewelah will
											be subject to mileage fees, please
											call the office
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<hr />

					<div className="flex-col-jcenter" id="processing-link">
						<Card
							title="Processing"
							bg={bgProcessing}
							paragraphs={[
								"Our goal is to best serve our customers, and, once completed, our shoppe will be available for processing the carcasses in downtown Northport.",
							]}
						>
							<p className="card--paragraph">
								Our meat processing shoppe is currently under
								construction. Subscribe to our{" "}
								<Link href="/newsletter/subscribe">
									newsletter
								</Link>{" "}
								so you will know when our shoppe is ready.
							</p>
							<p className="card--paragraph">
								In the meantime, to best serve you, we offer
								transportation of the carcass to a meat
								processing shop of your choice after dispatch.
							</p>
						</Card>
						<div>
							<h2 className="prices-grid-title ">
								Processing Prices
							</h2>
							<div className="card--width card--content-width card--font-size">
								<p className="card--paragraph">
									For now, we will use the shop of your choice
									to process the carcass. To get pricing
									information for meat processing, please
									contact your shop of choice.
								</p>
							</div>
						</div>
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
