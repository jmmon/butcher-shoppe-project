import React from "react";
import Styles from "./Footer.module.css";
import LinksStyles from "assets/styles/Links.module.css";

import CONSTANTS from "utils/CONSTANTS";

import Subscribe from "components/Subscribe/Subscribe";

import LinkScrollUp from "components/LinkScrollUp/LinkScrollUp";
import LogoComponent from "assets/logo/LogoComponent";
import FooterModuleContainer from "components/FooterModuleContainer/FooterModuleContainer";
import Contact from "components/Contact/Contact";
import Map from "components/Map/Map";

import TelLink from "components/TelLink/TelLink";
import { ComponentInView } from "utils/ComponentInView";

const facebookUrl = "https://www.facebook.com/TheButcherShoppe2022";

// const instagramUrl = "https://www.instagram.com/the_butcher_shoppe_/";

export default function Footer() {
	return (
		<footer
			className={`flex-col-jcenter panel-shadow--dark gap-4 ${Styles.footer}`}
		>
			<section className={`flex-col-jcenter-acenter ${Styles.section}`}>
				<div
					className={`flex-wrap-jcenter ${Styles.join_our_newsletter_container} ${Styles.mobile_margin}`}
				>
					<h2 className={`${Styles.heading}`}>Join our</h2>
					<LinkScrollUp
						path="/newsletter/subscribe"
						className={`${Styles.heading}`}
						underline
					>
						newsletter
					</LinkScrollUp>
					<h2 className={`${Styles.heading}`}>
						to receive periodic updates!
					</h2>
				</div>
				<div
					className={`flex-wrap-jcenter ${Styles.join_our_newsletter_container} ${Styles.mobile_margin}`}
				>
					<p className={Styles.subscription_text}>You can</p>
					<LinkScrollUp
						path="/newsletter/unsubscribe"
						className={`${Styles.subscription_text} ${Styles.unsubscribe_link}`}
						underline
					>
						unsubscribe
					</LinkScrollUp>
					<p className={Styles.subscription_text}>at any time.</p>
				</div>

				<Subscribe />
			</section>

			<div id="contact" style={{scrollPaddingTop: "4rem",}}></div>
			<section
				className={`flex-jcenter-acenter-wrap ${Styles.section} gap-1 ${Styles.mobile_margin}`}
			>
				<h2 className={`${Styles.heading}`}>Give Us A Call: </h2>

				<TelLink
					className={`${LinksStyles.main_link} text-center ${Styles.heading}`}
				>
					{CONSTANTS.PHONE_NUMBER_STRING}
				</TelLink>
			</section>

			
			<ComponentInView marginPx="0px">
				<section
					className={`flex-jcenter-acenter-wrap gap-4 ${Styles.contact_map_container} ${Styles.section}`}
				>
					<FooterModuleContainer title="Contact Us!">
						<Contact />
					</FooterModuleContainer>

					<FooterModuleContainer
						title="Find Us In Downtown Northport!"
					>
						<Map />
					</FooterModuleContainer>
				</section>
			</ComponentInView>
			
			<div id="more-links" style={{scrollPaddingTop: "4rem", marginTop: "-2rem"}}></div>

			<section
				className={`flex-jcenter ${Styles.section} ${Styles.links}`}
			>
				<div className={`flex-jbetween ${Styles.links_half} `}>
					<div className={Styles.links_column}>
						<h2 className={`${Styles.heading}`}>The Shoppe</h2>
						<div className={`flex-col ${Styles.link_items}`}>
							<LinkScrollUp path="/">Home</LinkScrollUp>
							<LinkScrollUp path="/meet-the-team">
								Meet The Team
							</LinkScrollUp>
							<LinkScrollUp path="/membership">
								Membership
							</LinkScrollUp>
							<LinkScrollUp path="/faq">FAQ</LinkScrollUp>
						</div>
					</div>
					<div className={Styles.links_column}>
						<h2 className={`${Styles.heading}`}>Ordering</h2>
						<div className={`flex-col ${Styles.link_items}`}>
							<LinkScrollUp path="/services">
								Services
							</LinkScrollUp>
							<LinkScrollUp path="/how-to-order">
								How To Order
							</LinkScrollUp>
							<LinkScrollUp path="/order">
								Order Form
							</LinkScrollUp>
						</div>
					</div>
				</div>
				<div className={`${Styles.links_half} flex-jbetween`}>
					<div className={Styles.links_column}>
						<h2 className={`${Styles.heading}`}>Keep In Touch</h2>
						<div className={`flex-col ${Styles.link_items}`}>
							<LinkScrollUp path="/newsletter/subscribe">
								Subscribe to our Newsletter
							</LinkScrollUp>
							<LinkScrollUp path="/newsletter/unsubscribe">
								Unsubscribe
							</LinkScrollUp>
							<a
								href={facebookUrl}
								target="_blank"
								rel="noreferrer"
								className={`${LinksStyles.main_link}`}
							>
								Facebook
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className={`flex-jcenter-acenter ${Styles.section}`}>
				<div className={Styles.back_to_top}>
					<LinkScrollUp className="btn btn--primary">
						Back To The Top
					</LinkScrollUp>
				</div>
			</section>

			<section className={`flex-col-jcenter-acenter`}>
				<div className={`flex-jcenter-acenter ${Styles.logo_wrapper}`}>
					<LogoComponent className={Styles.banner} />
				</div>

				<div className={`flex-jcenter-acenter ${Styles.social_media}`}>
					<LinkScrollUp
						path="/"
						className={`flex-jcenter ${Styles.social_name}`}
					>
						The Butcher Shoppe
					</LinkScrollUp>

					<div
						className={`flex-acenter-jcenter gap-1 ${Styles.social_icons}`}
					>
						<h4 className={Styles.find_us}>Find Us On:</h4>
						<a
							className={`${LinksStyles.main_link}`}
							href={facebookUrl}
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
					</div>
				</div>

				<div
					className={`flex-col-jcenter-acenter ${Styles.social_emails_wrapper}`}
				>
					<div
						className={`flex-jcenter-acenter-wrap ${Styles.social_emails_container}`}
					>
						<span className={`${Styles.social_emails_name}`}>
							Questions?
						</span>
						<a
							href="mailto: info@thenorthportbutchershoppe.com"
							className={`${Styles.social_emails}`}
						>
							info@thenorthportbutchershoppe.com
						</a>
					</div>
					<div
						className={`flex-jcenter-acenter-wrap ${Styles.social_emails_container}`}
					>
						<span className={`${Styles.social_emails_name}`}>
							Website Help?
						</span>

						<a
							href="mailto: support@thenorthportbutchershoppe.com"
							className={`${Styles.social_emails}`}
						>
							support@thenorthportbutchershoppe.com
						</a>
					</div>
				</div>

				<small className={Styles.website_rights}>C 2022</small>
			</section>
		</footer>
	);
}
