import { Suspense, lazy as Lazy, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../Subscribe.js/Subscribe";
import FooterSuspenseContainer from "./FooterSuspenseContainer";
import LinkScrollUp from "../LinkScrollUp/LinkScrollUp";

const LogoComponentPromise = import("../../assets/logo/LogoComponent.js");
const LogoComponent = Lazy(() => LogoComponentPromise);

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
			className="footer-container panel-shadow--dark"
			id="footer-container"
		>
			<section className="footer-subscription">
				<h2 className="footer--heading">
					Join our{" "}
					<LinkScrollUp
						path="/newsletter"
						cName="footer-link--underline"
					>
						newsletter
					</LinkScrollUp>{" "}
					to receive periodic updates!
				</h2>
				<p className="footer-subscription-text">
					You can{" "}
					<LinkScrollUp
						path="/newsletter/unsubscribe"
						cName="footer-link--underline"
					>
						unsubscribe
					</LinkScrollUp>{" "}
					at any time.
				</p>

				<Subscribe />
			</section>

			<section className="footer-contact-map-container">
				{contactMemo}
				{mapMemo}
			</section>

			<section className="footer-link" id="more-links">
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>The Butcher Shoppe</h2>
						<LinkScrollUp path="/">Home</LinkScrollUp>
						{/* <Link to="/">Home</Link> */}
						<LinkScrollUp path="/meet-the-team">
							Meet The Team
						</LinkScrollUp>
						{/* <Link to="/meet-the-team">Meet The Team</Link> */}
						<LinkScrollUp path="/services">Services</LinkScrollUp>
						<LinkScrollUp path="/faq">FAQ</LinkScrollUp>
					</div>
					<div className="footer-link-items">
						<h2>Ordering</h2>
						<LinkScrollUp path="/prices">Prices</LinkScrollUp>
						<LinkScrollUp path="/how-to-order">
							How To Order
						</LinkScrollUp>
						<LinkScrollUp path="/schedule">
							Schedule Your Order
						</LinkScrollUp>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Keep In Touch</h2>
						<LinkScrollUp path="/newsletter">
							Subscribe to our Newsletter
						</LinkScrollUp>
						<LinkScrollUp path="/newsletter/unsubscribe">
							Unsubscribe
						</LinkScrollUp>
					</div>
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<LinkScrollUp path="/">TODO: Instagram</LinkScrollUp>
						<LinkScrollUp path="/">TODO: Facebook</LinkScrollUp>
					</div>
				</div>
			</section>

			<section>
				<Suspense
					fallback={
						<div className="footer--loading-fallback">
							Loading Banner...
						</div>
					}
				>
					<LogoComponent fill="white" className="footer-banner" />
				</Suspense>
			</section>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<LinkScrollUp path="/" className="social-logo">
							The Butcher Shoppe
						</LinkScrollUp>
					</div>

					<small className="website-rights">C 2022</small>

					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</Link>
						{/* <Link
								className="social-icon-link youtube"
								to="/"
								target="_blank"
								aria-label="Youtube"
							>
								<i className="fab fa-youtube"></i>
							</Link> */}
						{/* <Link
								className="social-icon-link twitter"
								to="/"
								target="_blank"
								aria-label="Twitter"
							>
								<i className="fab fa-twitter"></i>
							</Link> */}
						{/* <Link
								className="social-icon-link linkedin"
								to="/"
								target="_blank"
								aria-label="LinkedIn"
							>
								<i className="fab fa-linkedin"></i>
							</Link> */}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
