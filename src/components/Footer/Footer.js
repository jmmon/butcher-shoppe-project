import { Suspense, lazy as Lazy, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Subscribe from "../Subscribe.js/Subscribe";
import FooterSuspenseContainer from "./FooterSuspenseContainer";
import LinkScrollUp from "../LinkScrollUp/LinkScrollUp";
import Button from "../Button/Button";

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
			<section className="footer-section">
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

			<section className="footer-contact-map-container footer-section">
				{contactMemo}
				{mapMemo}
			</section>

			<section className="footer-section footer-links" id="more-links">
				<div className="footer-links-container">
					<div className="footer-link-wrapper">
						<div className="footer-link-items-wrapper">
							<h2 className="footer--heading">The Shoppe</h2>
							<div className="footer-link-items">
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
						<div className="footer-link-items-wrapper">
							<h2 className="footer--heading">Ordering</h2>
							<div className="footer-link-items">
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
					<div className="footer-link-wrapper">
						<div className="footer-link-items-wrapper">
							<h2 className="footer--heading">Keep In Touch</h2>
							<div className="footer-link-items">
								<LinkScrollUp path="/newsletter">
									Subscribe to our Newsletter
								</LinkScrollUp>
								<LinkScrollUp path="/newsletter/unsubscribe">
									Unsubscribe
								</LinkScrollUp>
							</div>
						</div>
						<div className="footer-link-items-wrapper">
							<div className="footer-link-items">
								<h2 className="footer--heading">
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
				<div className="footer-back-to-top">
					<Button onClick={() => window.scrollTo(0, 0)}>
						Back To The Top
					</Button>
				</div>
			</section>

			<section className="footer-section">
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
							<i className="fab fa-facebook-f"> TODO</i>
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"> TODO</i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
