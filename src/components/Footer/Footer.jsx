import React, { useMemo } from "react";
import styles from "./Footer.module.css";

import Subscribe from "components/Subscribe/Subscribe";
import FooterSuspenseContainer from "./FooterSuspenseContainer";
import LinkScrollUp from "components/LinkScrollUp/LinkScrollUp";
import LogoA1Component from "assets/logo/newest/best/httpspng2svg/LogoA1Component";

const facebookUrl = "https://www.facebook.com/TheButcherShoppe2022";

// const instagramUrl = "https://www.instagram.com/the_butcher_shoppe_/";

function Footer() {
	const contactMemo = useMemo(
		() =>
			FooterSuspenseContainer({
				key: "contact",
				title: "Contact Us!",
				lazyPromise: import("../Contact/Contact"),
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
				lazyPromise: import("../Map/Map"),
				loadingName: "Map",
				linkTarget: "map",
				placeName: "420 Center Ave, Northport, WA 99157, USA",
				zoomLevel: 15,
			}),
		[]
	);

	return (
		<footer
			className={`flex-col-jcenter panel-shadow--dark ${styles.container}`}
			id="footer-container"
		>
			<section className={`flex-col-jcenter-acenter ${styles.section}`}>
				<div className={`flex-wrap-jcenter ${styles.join_our_newsletter_container} ${styles.mobile_margin}`}>
					<h2 className={`${styles.heading}`}>Join our</h2>
					<LinkScrollUp
						path="/newsletter/subscribe"
						className={`${styles.heading} underline`}
					>
						newsletter
					</LinkScrollUp>
					<h2 className={`${styles.heading}`}>
						to receive periodic updates!
					</h2>
				</div>
				<div className={`flex-wrap-jcenter ${styles.join_our_newsletter_container} ${styles.mobile_margin}`}>
					<p className={styles.subscription_text}>You can</p>
					<LinkScrollUp
						path="/newsletter/unsubscribe"
						className={`${styles.subscription_text} underline ${styles.unsubscribe_link}`}
					>
						unsubscribe
					</LinkScrollUp>
					<p className={styles.subscription_text}>at any time.</p>
				</div>

				<Subscribe />
			</section>

			<section
				className={`flex-jcenter-acenter-wrap ${styles.section} gap-1 ${styles.mobile_margin}`}
			>
				<h2 className={`${styles.heading}`}>Give Us A Call: </h2>

				<a
					className={`white-link text-center ${styles.heading}`}
					href="tel:15096406766"
				>
					(509) 640-6766
				</a>
			</section>

			<section
				className={`flex-jcenter-acenter-wrap ${styles.contact_map_container} ${styles.section}`}
			>
				{contactMemo}
				{mapMemo}
			</section>

			<section
				className={`flex-jcenter ${styles.section} ${styles.links}`}
				id="more-links"
			>
				<div className={`flex-jbetween ${styles.links_half} `}>
					<div className={styles.links_column}>
						<h2 className={`${styles.heading}`}>The Shoppe</h2>
						<div className={`flex-col ${styles.link_items}`}>
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
					<div className={styles.links_column}>
						<h2 className={`${styles.heading}`}>Ordering</h2>
						<div className={`flex-col ${styles.link_items}`}>
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
				<div className={`${styles.links_half} flex-jbetween`}>
					{/* <div className={styles.links_column}>
						<div className={`flex-col ${styles.link_items}`}>
							<h2 className={`${styles.heading}`}>
								Social Media
							</h2>
							<a
								href={facebookUrl}
								target="_blank"
								rel="noreferrer"
								className={`white-link `}
							>
								Facebook
							</a>
						</div>
					</div> */}
					<div className={styles.links_column}>
						<h2 className={`${styles.heading}`}>Keep In Touch</h2>
						<div className={`flex-col ${styles.link_items}`}>
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
								className={`white-link `}
							>
								Facebook
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className={`flex-jcenter-acenter ${styles.section}`}>
				<div className={styles.back_to_top}>
					<LinkScrollUp className="btn btn--primary">
						Back To The Top
					</LinkScrollUp>
				</div>
			</section>

			{/* <section className={`flex-jcenter-acenter ${styles.section} ${styles.logo_surround}`}> */}
			<section className={`flex-jcenter-acenter ${styles.section}`}>
				{/* <div className={styles.logo_surround}> */}
				<LogoA1Component
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
					className={styles.banner_2}
				/>
				{/* </div> */}
				{/* <LogoComponent fill="white" className={styles.banner} /> */}
			</section>

			<section className={`flex-col-acenter ${styles.social_media}`}>
				<div
					className={`flex-jaround-acenter ${styles.social_media_wrap}`}
				>
					<LinkScrollUp
						path="/"
						className={`flex ${styles.social_name}`}
					>
						The Butcher Shoppe
					</LinkScrollUp>

					<div
						className={`flex-acenter-jcenter gap-1 ${styles.social_icons}`}
					>
						<h4>Find Us On:</h4>
						<a
							className={`white-link ${styles.social_small_font}`}
							href={facebookUrl}
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</a>
					</div>
					<small
						className={`${styles.website_rights} ${styles.social_small_font}`}
					>
						C 2022
					</small>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
