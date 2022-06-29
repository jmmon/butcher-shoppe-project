import React, { useMemo } from "react";
import styles from "./Footer.module.css";

import Subscribe from "components/Subscribe/Subscribe";
import FooterSuspenseContainer from "./FooterSuspenseContainer";
import LinkScrollUp from "components/LinkScrollUp/LinkScrollUp";
import Button from "components/Button/Button";
import LogoComponent from "assets/logo/LogoComponent";

const facebookUrl = "https://www.facebook.com/TheButcherShoppe2022";

const instagramUrl = "https://www.instagram.com/the_butcher_shoppe_/";

function Footer() {
	const contactMemo = useMemo(
		() =>
			FooterSuspenseContainer({
				key: "contact",
				title: "Contact Us!",
				lazyPromise: import("../Contact/Contact.js"),
				loadingName: "Contact Box",
				linkTarget: "contact-link-target",
			}),
		[]
	);

	const mapMemo = useMemo(
		() =>
			FooterSuspenseContainer({
				key: "map",
				title: "Find us in downtown Northport!",
				lazyPromise: import("../Map/Map.js"),
				loadingName: "Map",
				linkTarget: "map-link-target",
				placeName: "420 Center Ave, Northport, WA 99157, USA",
				zoomLevel: 15,
			}),
		[]
	);

	return (
		<div
			className={`flex-col-jcenter panel-shadow--dark ${styles.container}`}
			id="footer-container"
		>
			<section className={`flex-col-jcenter-acenter ${styles.section}`}>
				<h2 className={`${styles.heading} margin-1--bot`}>
					Join our{" "}
					<LinkScrollUp
						path="/newsletter/subscribe"
						className="white-link--underline"
					>
						newsletter
					</LinkScrollUp>{" "}
					to receive periodic updates!
				</h2>
				<p className={styles.subscription_text}>
					You can{" "}
					<LinkScrollUp
						path="/newsletter/unsubscribe"
						className="white-link--underline"
					>
						unsubscribe
					</LinkScrollUp>{" "}
					at any time.
				</p>

				<Subscribe />
			</section>

			<section
				className={`flex-jcenter-acenter-wrap ${styles.section} gap-1`}
			>
				<h2 className={styles.heading}>Give Us A Call: </h2>

				<a
					className={`white-link text-center ${styles.heading} ${styles.phone}`}
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
							<h2 className={`margin-1--bot ${styles.heading}`}>
								The Shoppe
							</h2>
							<div
								className={`flex-col-astart ${styles.link_items}`}
							>
								<LinkScrollUp path="/">Home</LinkScrollUp>
								<LinkScrollUp path="/meet-the-team">
									Meet The Team
								</LinkScrollUp>
								<LinkScrollUp path="/services">
									Services
								</LinkScrollUp>
								<LinkScrollUp path="/faq">FAQ</LinkScrollUp>
							</div>
						</div>
						<div className={styles.links_column}>
							<h2 className={`margin-1--bot ${styles.heading}`}>
								Ordering
							</h2>
							<div
								className={`flex-col-astart ${styles.link_items}`}
							>
								
								<LinkScrollUp path="/how-to-order">
									How To Order
								</LinkScrollUp>
								<LinkScrollUp path="/order">
									Order Form
								</LinkScrollUp>
							</div>
						</div>
					</div>
					<div className={`${styles.links_half} flex`}>
						<div className={styles.links_column}>
							<div
								className={`flex-col-astart ${styles.link_items}`}
							>
								<h2
									className={`margin-1--bot ${styles.heading}`}
								>
									Social Media
								</h2>
								<a
									href={facebookUrl}
									target="_blank"
									className={`white-link `}
								>
									Facebook
								</a>
							</div>
						</div>
						<div className={styles.links_column}>
							<h2 className={`margin-1--bot ${styles.heading}`}>
								Keep In Touch
							</h2>
							<div
								className={`flex-col-astart ${styles.link_items}`}
							>
							<LinkScrollUp path="/newsletter/subscribe">
									Subscribe to our Newsletter
								</LinkScrollUp>
								<LinkScrollUp path="/newsletter/unsubscribe">
									Unsubscribe
								</LinkScrollUp>
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

			<section className={`flex-jcenter-acenter ${styles.section}`}>
				<LogoComponent fill="white" className={styles.banner} />
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
		</div>
	);
}

export default Footer;
