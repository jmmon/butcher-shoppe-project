import React from "react";
import "./HowToOrder.css";
import PageLayout from "components/PageLayout/PageLayout";

import bgTitle from "assets/images/image-1-116-cropped-55.jpg";

import PageTitle from "components/PageTitle/PageTitle";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";

import { Link } from "wouter";
import TelLink from "components/TelLink/TelLink";
import { Helmet } from "react-helmet";

function HowToOrder() {
	return (
		<PageLayout
			helmet={
				<Helmet>
					<title>
						How To Order | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="All the info you should need to help you place your order. Have questions? Give us a call!"
					/>
				</Helmet>
			}
			title={<PageTitle title="How To Order" bgImage={bgTitle} />}
			bottomNav={
				<NavBottomButtons
					prev={{ link: "/services", title: "Services" }}
					next={{ link: "/order", title: "Order Form" }}
				/>
			}
		>
			<Card title="Ready to schedule your order?">
				<article>
					<p>
						Scheduling for our services is easy! Just fill out the{" "}
						<Link href="/order">order form</Link> and submit your
						order, or <TelLink>give us a call</TelLink> if you have
						any questions or would like to order over the phone.
					</p>
					<br />
					<p>
						Then, we will contact you to finalize the date and time
						for the mobile dispatch.
					</p>
					<br />
					{/* <p>
						After the mobile dispatch, while our meat processing
						plant is still being prepared, we will offer to take
						your carcass to a processor of your choice, and the
						processor will handle the rest!
					</p> */}
					<p>
						After the mobile dispatch, we will take your carcass(es)
						to a meat processor of your choice, and they will handle
						the rest!
					</p>
					{/* <br />
							<p>
							we will give you an
							estimate for when the meat will be processed and
							ready for pickup. Finally, come visit us in
							Northport to pick up your meat!
						</p> */}
					<br />
					<br />
					<h2>Steps for ordering:</h2>
					<br />
					<ol className="form--steps">
						<li className="details_item">
							<details>
								<summary>
									Start with your contact information
								</summary>
								<ul className="panel-shadow--light details_content line-height">
									<li>
										<p>
											Head on over to our{" "}
											<a href="/order" target="_blank">
												Order
											</a>{" "}
											page, where you will find our order
											form.
										</p>
									</li>
									<li>
										<p>
											The first section is your basic
											information and your address. Give
											us contact information we can reach
											you at. Then enter your address so
											we can optimize our route, keeping
											your costs down and saving you time!
										</p>
									</li>
									{/* <li>
											<p>
												Once finished with your contact
												info, next is the info about
												each animal you would like
												processed.
											</p>
										</li> */}
								</ul>
							</details>
						</li>
						<li className="details_item">
							<details>
								<summary>Next, add your animal(s)</summary>
								<ul className="panel-shadow--light details_content line-height">
									<li>
										<p>
											Select a type of animal for
											slaughter, and choose how many of
											that animal type you have ready for
											slaughter.
										</p>
									</li>
									<li>
										<p>
											You may enter multiple types of
											animals if you'd like to schedule
											them all for the same day.
										</p>
									</li>
									<li>
										<p>
											Have an animal not listed under our
											animal types? Select "Other Animal"
											and tell us what type you have, and
											the animal count.{" "}
											<TelLink>Give us a call</TelLink> if
											you have any questions!
										</p>
									</li>
								</ul>

								{/* <h4 className="margin-1--top">
											Unsure about the cuts you would
											like?
										</h4>
										<ul>
											<li>
												<p>
													Check out the default cut
													selections, or customize the
													cuts to fit your needs.
												</p>
											</li>
											<li>
												<p>
													Do you have more animals
													you'd like processed? Next
													you can add additional
													animals.
												</p>
											</li>
										</ul> */}
							</details>
						</li>
						<li className="details_item">
							<details>
								<summary>
									Select your preferred date, and an alternate
									date or window
								</summary>
								<ul className="panel-shadow--light details_content line-height">
									<li>
										<p>
											Choose a date that works best for
											you. We want to work around your
											schedule.
										</p>
									</li>
									<li>
										<p>
											If for some reason we aren't
											available on your preferred date, we
											will use the alternate date.
										</p>
									</li>
									<li>
										<p>
											For the alternate date, you may also
											choose a date window by selecting a
											starting date and then an ending
											date.
										</p>
									</li>
								</ul>
							</details>
						</li>
						<li className="details_item">
							<details>
								<summary>Add any notes and submit!</summary>
								<ul className="panel-shadow--light details_content line-height">
									<li>
										<p>
											Have special instructions, or want
											to leave notes with your order? Use
											the Order Notes section to provide
											any additional info that would make
											things go easier.
										</p>
									</li>
									<li>
										<p>
											Once you're done, check to
											make sure all your info is correct,
											and submit your order using the
											Submit button below the form!
										</p>
									</li>
									<li>
										<p>
											Once submitted, you will be emailed a
											copy of your order information to
											the email address you provided under Contact Information. That
											way, you will have a copy for your
											records.{" "}
										</p>
									</li>
									<li>
										<p>
											If you need to make any changes
											after the order is submitted, you
											may reply to the order email and we
											will get back to you. Or, feel free
											to give us a{" "}
											<TelLink>call!</TelLink>
										</p>
									</li>
								</ul>
							</details>
						</li>
					</ol>
				</article>
			</Card>
		</PageLayout>
	);
}

export default HowToOrder;
