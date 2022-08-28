import React from "react";
import Styles from "./HowToOrder.module.css";
import { Helmet } from "react-helmet";
import bgTitle from "assets/images/image-1-116-cropped-55.jpg";

import PageLayout from "layouts/PageLayout/PageLayout";
import PageTitle from "layouts/PageTitle/PageTitle";
import NavBottomButtons from "layouts/NavBottomButtons/NavBottomButtons";
import Card from "components/Card/Card";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";
import TelLink from "components/TelLink/TelLink";

export default function HowToOrder({path, setVisitedRoutes}) {
	React.useEffect(() => {
		setVisitedRoutes((prev) => ([...prev, path]));
	},[])
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
						<LinkWithPreload href="/order">order form</LinkWithPreload> and submit your
						order, or <TelLink>give us a call</TelLink> if you have
						any questions or would like to order over the phone.
					</p>
					<br />
					<p>
						Then, we will contact you to finalize the date and time
						for the mobile dispatch.
					</p>
					<br />
					<p>
						After the mobile dispatch, we will take your carcass(es)
						to a meat processor of your choice, and they will handle
						the rest!
					</p>
					<br />
					<br />
					<h2>Steps for ordering:</h2>
					<br />
					<ol>
						<li className={Styles.details_item}>
							<details>
								<summary>
									Start with your contact information
								</summary>
								<ul className={`panel-shadow--light grid gap-1 ${Styles.details_content}`}>
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
								</ul>
							</details>
						</li>
						<li className={Styles.details_item}>
							<details>
								<summary>Next, add your animal(s)</summary>
								<ul className={`panel-shadow--light grid gap-1 ${Styles.details_content}`}>
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
							</details>
						</li>
						<li className={Styles.details_item}>
							<details>
								<summary>
									Select your preferred date, and an alternate
									date or window
								</summary>
								<ul className={`panel-shadow--light grid gap-1 ${Styles.details_content}`}>
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
						<li className={Styles.details_item}>
							<details>
								<summary>Add any notes and submit!</summary>
								<ul className={`panel-shadow--light grid gap-1 ${Styles.details_content}`}>
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