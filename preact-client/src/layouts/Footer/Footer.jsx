import React, { useMemo } from "react";
import Styles from "./Footer.module.css";

import Subscribe from "components/Subscribe/Subscribe";
import FooterSuspenseContainer from "../../components/FooterSuspenseContainer/FooterSuspenseContainer";
import LinkScrollUp from "components/LinkScrollUp/LinkScrollUp";
import LogoComponent from "assets/logo/LogoComponent";
import TelLink from "components/TelLink/TelLink";

const facebookUrl = "https://www.facebook.com/TheButcherShoppe2022";

// const instagramUrl = "https://www.instagram.com/the_butcher_shoppe_/";

function Footer() {
	const contactMemo = useMemo(
		() =>
			FooterSuspenseContainer({
				key: "contact",
				title: "Contact Us!",
				lazyPromise: import("../../components/Contact/Contact"),
				loadingName: "Contact Box",
				linkTarget: "contact",
			}),
		[]
	);

	const mapMemo = useMemo(
		() =>
			FooterSuspenseContainer({
				key: "map",
				title: "Find Us In Downtown Northport!",
				lazyPromise: import("../../components/Map/Map"),
				loadingName: "Map",
				linkTarget: "map",
				placeName: "420 Center Ave, Northport, WA 99157, USA",
				zoomLevel: 15,
			}),
		[]
	);

	return (
		<footer
			className={`flex-col-jcenter panel-shadow--dark ${Styles.container}`}
			id="footer-container"
		>
			<section className={`flex-col-jcenter-acenter ${Styles.section}`}>
				<div className={`flex-wrap-jcenter ${Styles.join_our_newsletter_container} ${Styles.mobile_margin}`}>
					<h2 className={`${Styles.heading}`}>Join our</h2>
					<LinkScrollUp
						path="/newsletter/subscribe"
						className={`${Styles.heading} underline`}
					>
						newsletter
					</LinkScrollUp>
					<h2 className={`${Styles.heading}`}>
						to receive periodic updates!
					</h2>
				</div>
				<div className={`flex-wrap-jcenter ${Styles.join_our_newsletter_container} ${Styles.mobile_margin}`}>
					<p className={Styles.subscription_text}>You can</p>
					<LinkScrollUp
						path="/newsletter/unsubscribe"
						className={`${Styles.subscription_text} underline ${Styles.unsubscribe_link}`}
					>
						unsubscribe
					</LinkScrollUp>
					<p className={Styles.subscription_text}>at any time.</p>
				</div>

				<Subscribe />
			</section>

			<section
				className={`flex-jcenter-acenter-wrap ${Styles.section} gap-1 ${Styles.mobile_margin}`}
			>
				<h2 className={`${Styles.heading}`}>Give Us A Call: </h2>

				<TelLink className={`main-link text-center ${Styles.heading}`}>(509) 640-6766</TelLink>
			</section>

			<section
				className={`flex-jcenter-acenter-wrap ${Styles.contact_map_container} ${Styles.section}`}
			>
				{contactMemo}
				{mapMemo}
			</section>

			<section
				className={`flex-jcenter ${Styles.section} ${Styles.links}`}
				id="more-links"
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
					{/* <div className={styles.links_column}>
						<div className={`flex-col ${styles.link_items}`}>
							<h2 className={`${styles.heading}`}>
								Social Media
							</h2>
							<a
								href={facebookUrl}
								target="_blank"
								rel="noreferrer"
								className={`main-link `}
							>
								Facebook
							</a>
						</div>
					</div> */}
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
								className={`main-link `}
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

			{/* <section className={`flex-jcenter-acenter ${styles.section} ${styles.logo_surround}`}> */}
			<section className={`flex-jcenter-acenter ${Styles.section}`}>
				{/* <div className={styles.logo_surround}> */}
				<LogoComponent
					fills={{
						white: "#ccc",
					}}
					// fills={{
					// 	brown: "#765", //handle
					// 	black: "#aaa", //blade, trees
					// 	white: "#242424", //outside, mountain-trace, holes
					// 	// grey: "#888", // mountains
					// 	//red //text
					// }}
					className={Styles.banner_2}
				/>
				{/* </div> */}
				{/* <LogoComponent fill="white" className={styles.banner} /> */}
			</section>

			<section className={`flex-col-acenter ${Styles.social_media}`}>
				<div
					className={`flex-jaround-acenter ${Styles.social_media_wrap}`}
				>
					<LinkScrollUp
						path="/"
						className={`flex ${Styles.social_name}`}
					>
						The Butcher Shoppe
					</LinkScrollUp>

					<div
						className={`flex-acenter-jcenter gap-1 ${Styles.social_icons}`}
					>
						<h4>Find Us On:</h4>
						<a
							className={`main-link ${Styles.social_small_font}`}
							href={facebookUrl}
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
					</div>
					<small
						className={`${Styles.website_rights} ${Styles.social_small_font}`}
					>
						C 2022
					</small>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
