import React, {
	useMemo,
} from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

import Subscribe from "components/Subscribe/Subscribe";
import FooterSuspenseContainer from "./FooterSuspenseContainer";
import LinkScrollUp from "components/LinkScrollUp/LinkScrollUp";
import Button from "components/Button/Button";
import LogoComponent from "assets/logo/LogoComponent"

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
				<h2 className={styles.heading}>
					Join our{" "}
					<LinkScrollUp
						path="/newsletter"
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

			<section className={`flex-jaround-acenter-wrap ${styles.contact_map_container} ${styles.section}`}>
				{contactMemo}
				{mapMemo}
			</section>

			<section
				className={`flex-col-jcenter-acenter ${styles.section} ${styles.links}`}
				id="more-links"
			>
				<div className={`flex-jcenter-wrap ${styles.links_container}`}>
					<div className={`${styles.link_wrapper} flex`}>
						<div className={styles.link_items_wrapper}>
							<h2 className={styles.heading}>The Shoppe</h2>
							<div className={`flex-col-astart ${styles.link_items}`}>
								<LinkScrollUp path="/">Home</LinkScrollUp>
								{/* <Link to="/">Home</Link> */}
								<LinkScrollUp path="/meet-the-team">
									Meet The Team
								</LinkScrollUp>
								{/* <Link to="/meet-the-team">Meet The Team</Link> */}
								<LinkScrollUp path="/services">
									Services
								</LinkScrollUp>
								<LinkScrollUp path="/faq">FAQ</LinkScrollUp>
							</div>
						</div>
						<div className={styles.link_items_wrapper}>
							<h2 className={styles.heading}>Ordering</h2>
							<div className={`flex-col-astart ${styles.link_items}`}>
								<LinkScrollUp path="/prices">
									Prices
								</LinkScrollUp>
								<LinkScrollUp path="/how-to-order">
									How To Order
								</LinkScrollUp>
								<LinkScrollUp path="/order">
									Submit Your Order
								</LinkScrollUp>
							</div>
						</div>
					</div>
					<div className={`${styles.link_wrapper} flex`}>
						<div className={styles.link_items_wrapper}>
							<h2 className={styles.heading}>Keep In Touch</h2>
							<div className={`flex-col-astart ${styles.link_items}`}>
								<LinkScrollUp path="/newsletter">
									Subscribe to our Newsletter
								</LinkScrollUp>
								<LinkScrollUp path="/newsletter/unsubscribe">
									Unsubscribe
								</LinkScrollUp>
							</div>
						</div>
						<div className={styles.link_items_wrapper}>
							<div className={`flex-col-astart ${styles.link_items}`}>
								<h2 className={styles.heading}>
									Social Media
								</h2>
								<LinkScrollUp path="/">
									TODO: Instagram
								</LinkScrollUp>
								<LinkScrollUp path="/">
									TODO: Facebook
								</LinkScrollUp>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.back_to_top}>
					<Button onClick={() => window.scrollTo(0, 0)}>
						Back To The Top
					</Button>
				</div>
			</section>

			<section className={`flex-col-jcenter-acenter ${styles.section}`}>
					<LogoComponent fill="white" className={styles.banner} />
			</section>

			<section className={`flex-col-acenter ${styles.social_media}`}>
				<div className={`flex-jaround-acenter ${styles.social_media_wrap}`}>
					<LinkScrollUp path="/" className={`flex ${styles.social_name}`}>
						The Butcher Shoppe
					</LinkScrollUp>

					<small className={`${styles.website_rights} ${styles.social_small_font}`}>C 2022</small>

					<div className={`flex-acenter-jbetween ${styles.social_icons}`}>
						<Link
							className={`white-link facebook ${styles.social_small_font}`}
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
							{" "}[TODO]
						</Link>
						<Link
							className={`white-link instagram ${styles.social_small_font}`}
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
							{" "}[TODO]
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
