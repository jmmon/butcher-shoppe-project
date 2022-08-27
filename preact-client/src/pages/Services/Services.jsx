import React from "react";
import Styles from "./Services.module.css";
import { Link } from "wouter";

import bgTitle from "assets/images/image-1-2-cropped-55.jpg";
import bgSlaughter from "assets/images/image-1-124-cropped-55.jpg";
import bgProcessing from "assets/images/image-1-2-cropped-55.jpg";

import Button from "components/Button/Button";
import PageTitle from "layouts/PageTitle/PageTitle";
import NavBottomButtons from "layouts/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";
import PageLayout from "layouts/PageLayout/PageLayout";
import TelLink from "components/TelLink/TelLink";
import { Helmet } from "react-helmet";

export default function Services() {
	return (
		<PageLayout
			helmet={
				<Helmet>
					<title>
						Our Services | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="We currently offer our mobile slaughter service - no hassle of transporting animals, and no kill floor!"
					/>
				</Helmet>
			}
			title={
				<PageTitle
					title="SERVICES"
					bgImage={bgTitle}
					position="50% 40%"
				/>
			}
			bottomNav={
				<NavBottomButtons
					prev={{ title: "FAQ", link: "/faq" }}
					next={{ title: "How To Order", link: "/how-to-order" }}
				/>
			}
		>
			<div className={Styles.container}>
				<div className="card--width">
					<div className={Styles.btns_container}>
						<Button
							className="btn btn--large btn--outline"
							url="#slaughter"
						>
							Slaughter
						</Button>
						<Button
							className="btn btn--outline btn--large"
							url="#processing"
						>
							Processing
						</Button>
					</div>
				</div>

				
				<Card
					title="What We Offer"
					paragraphs={[
						"We serve the surrounding Stevens County area with our mobile farm slaughter truck. After dispatch, we will deliver your carcass to a local meat processing shop of your choice.",
						"Our own meat processing Shoppe in downtown Northport is currently under construction, and once it is complete we will send carcasses there to be processed in-house.",
						"We also process wild game, like deer, elk, moose and bear",
						"Sorry, no poultry or rabbits!",
					]}
				>
					<p>
						Basic kill fees and average meat processing fees are
						outlined below. Kill fees are paid in the field and
						processing fees are paid upon pick-up at your chosen
						meat processing shop.
					</p>
				</Card>

				<hr />

				<div className="flex-col-jcenter" id="slaughter">
					<Card
						title="Slaughter"
						paragraphs={[
							"On the scheduled day of your appointment, you will be asked to safely secure your animal(s) where dispatch can occur without harming other livestock. The designated animal(s) will be killed, hung, eviscerated, de-hided, de-headed and de-legged on sight.",
							"	You may choose to retain any or all of the contents removed from the animal. We will dispose of the rest. Then your animal(s) will be loaded into a refrigerated box and transported to the designated shop. Kill and leave is an option as well.",
						]}
						bg={bgSlaughter}
					/>
					<h2 className={`text-center ${Styles.prices_title}`}>
						Slaughter Prices
					</h2>
					<div
						className={`${Styles.prices_container} panel-shadow--light`}
					>
						<span className={Styles.prices_two_column}>
							Minimum Charge
						</span>
						<span className={Styles.prices_two_column}>$100</span>

						<span className={Styles.prices_spacer}></span>

						<span className={`text-center ${Styles.prices_header}`}>
							Animal
						</span>
						<span className={`text-center ${Styles.prices_header}`}>
							Base Price
						</span>
						<span className={`text-center ${Styles.prices_header}`}>
							If You Keep The Guts
						</span>

						<span className={Styles.prices_spacer}></span>

						<span className={`text-center ${Styles.prices_item}`}>
							Beef
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$160
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$140
						</span>

						<span className={Styles.prices_spacer}></span>

						<span className={`text-center ${Styles.prices_item}`}>
							Hog
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$100
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$90
						</span>

						<span className={Styles.prices_spacer}></span>

						<span className={`text-center ${Styles.prices_item}`}>
							Sheep, <br />
							Goats
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$80
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$70
						</span>

						<span className={Styles.prices_spacer}></span>

						<span className={`text-center ${Styles.prices_item}`}>
							Bison,
							<br />
							Buffalo
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$180
						</span>
						<span className={`text-center ${Styles.prices_item}`}>
							$160
						</span>

						<span className={Styles.prices_spacer}></span>

						<span className={Styles.prices_two_column}>
							Exotic Animals
						</span>
						<span className={Styles.prices_two_column}>
							<TelLink>Please Call Us</TelLink>
						</span>
					</div>
					<div>
						<h2 className={`text-center ${Styles.prices_title}`}>
							Extra Charges
						</h2>
						<Card>
							<ul
								className={`${Styles.prices_extra_margin} flex-col gap-1`}
							>
								<li>
									<p>
										Fuel surcharge will apply based on the
										current diesel prices
									</p>
								</li>
								<li>
									<p>
										Farms located south of Chewelah will be
										subject to mileage fees
									</p>
								</li>
							</ul>
							<div className={Styles.prices_extra_call}>
								Please <TelLink>give us a call</TelLink> if you
								have any questions on our pricing or extra
								charges!
							</div>
						</Card>
					</div>
				</div>

				<hr />

						<div className="flex-col-jcenter" id="processing">
							<Card title="Processing" bg={bgProcessing}>
								<p>
									Our goal is to best serve our customers,
									and, once completed, our Shoppe in downtown{" "}
									<a href="#map">Northport</a> will process
									your animal carcasses, giving you the cuts
									you want from your animals.
								</p>
								<p>
									Our meat processing Shoppe is currently
									under construction. Subscribe to our{" "}
									<Link href="/newsletter/subscribe">
										newsletter
									</Link>{" "}
									so you will know when our Shoppe is ready.
								</p>
								<p>
									In the meantime, to best serve you, we offer
									transportation of the carcass to a meat
									processing shop of your choice after
									dispatch.
								</p>
							</Card>
							<div>
								<h2
									className={`text-center ${Styles.prices_title}`}
								>
									Processing Prices
								</h2>
								<div className="card--width card--content-width card--font-size">
									<p>
										For now, we will use the shop of your
										choice to process the carcass. To get
										pricing information for meat processing,
										please contact your shop of choice.
									</p>
								</div>
							</div>
						</div>
			</div>
		</PageLayout>
	);
}
