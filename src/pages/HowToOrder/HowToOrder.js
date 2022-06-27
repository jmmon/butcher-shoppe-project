import React from "react";
import "./HowToOrder.css";

import bgTitle from "assets/images/image-1-116.jpg";

import PageTitle from "components/PageTitle/PageTitle";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";

function HowToOrder() {
	return (
		<>
			<PageTitle title="How To Order" bgImage={bgTitle} />
			<WhitePageBackground>
				<Card title="Ready to schedule your order?">
					<article>
						<p>
							Scheduling for our services is easy! Just fill out
							the information below and sumbit it. Then, we will
							contact you to finalize the scheduling date and
							time. After the mobile dispatch, we will give you an
							estimate for when the meat will be processed and
							ready for pickup. Finally, come visit us in
							Northport to pick up your meat!
						</p>
						<br />
						<br />
						<h2>Steps for ordering:</h2>
						<br />
						<ol className="form--steps line-height">
							<li>
								<details>
									<summary>
										Start with your contact information
									</summary>
									<ul className="panel-shadow--light">
										<li>
											<p>
												The first section is your basic
												information and your location.
												Give us contact information we
												can reach you at, and choose a
												preference for method of
												contact. Then enter your
												location, so we can optimize our
												route, keeping your costs down
												and saving you time!
											</p>
										</li>
										<li>
											<p>
												Once finished with your contact
												info, next is the info about
												each animal you would like
												processed.
											</p>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary>Next, add an animal</summary>
									<div className="panel-shadow--light">
										<ul>
											<li>
												<p>
													Select an aminal for
													processing, then fill out
													the cut form for that
													animal.
												</p>
											</li>
										</ul>

										<h4 className="margin-1--top">
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
										</ul>
									</div>
								</details>
							</li>
							<li>
								<details>
									<summary>
										Add any additional animals
									</summary>
									<ul className="panel-shadow--light">
										<li>
											<p>
												You may add multiple animals of
												the same type or different
												types. We offer custom cut forms
												for all the animals you would
												like processed.
											</p>
										</li>
										<li>
											<p>
												Select the cut options, use our
												default selections, or copy the
												selections you made for a
												previous similar animal.
											</p>
										</li>
									</ul>
								</details>
							</li>
							<li>
								<details>
									<summary>Double-check and submit!</summary>
									<ul className="panel-shadow--light">
										<li>
											<p>
												Done filling out the form? Check
												to make sure all your info is
												correct, and submit your order
												using the Submit Order button
												below the form.
											</p>
										</li>
									</ul>
								</details>
							</li>
						</ol>
					</article>
				</Card>
			</WhitePageBackground>
			<NavBottomButtons
				prev={{ link: "/services", title: "Services" }}
				next={{ link: "/order", title: "Order Form" }}
			/>
		</>
	);
}

export default HowToOrder;
