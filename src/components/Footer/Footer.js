import React, { Suspense, lazy as Lazy, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../Button/Button";
import axios from "axios";
import "./Footer.css";
import Subscribe from "../Subscribe.js/Subscribe";
import ScrollToTop from "../../utils/ScrollToTop";

const MapPromise = import("../Map/Map.js");
const Map = Lazy(() => MapPromise);

const ContactPromise = import("../Contact/Contact.js");
const Contact = Lazy(() => ContactPromise);

const LogoComponentPromise = import("../../assets/logo/LogoComponent.js");
const LogoComponent = Lazy(() => LogoComponentPromise);

function Footer({ simple = false }) {
	const { pathname } = useLocation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<div className="footer-container" id="footer-container">
			<section className="footer-subscription">
				<h2 className="footer-subscription-heading">
					Join our{" "}
					<Link className="footer-subscribe-link" to="/newsletter/">
						newsletter
					</Link>{" "}
					to receive periodic updates!
				</h2>
				<p className="footer-subscription-text">
					You can{" "}
					{pathname === "/newsletter/unsubscribe" ? (
						<span
							className="footer-subscribe-link"
							onClick={scrollToTop}
						>
							unsubscribe
						</span>
					) : (
						<Link
							className="footer-subscribe-link"
							to="/newsletter/unsubscribe"
						>
							unsubscribe
						</Link>
					)}{" "}
					at any time.
				</p>

				<Subscribe />
			</section>

			<section className="footer-contact-map-container">
				<div
					className="footer-contact-container"
					id="contact-link-target"
				>
					<h2 className="footer-contact-heading">Contact Us!</h2>

					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Contact Box...
							</div>
						}
					>
						<Contact />
					</Suspense>
				</div>

				<div className="footer-map-container" id="map-link-target">
					<h2 className="footer-map-heading">
						Find us in downtown Northport!
					</h2>

					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Map...
							</div>
						}
					>
						<Map
							placeName={
								"420 Center Ave, Northport, WA 99157, USA"
							}
							zoomLevel={15}
						/>
					</Suspense>
				</div>
			</section>

			{!simple && (
				<section className="footer-links" id="more-links">
					{/* <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Testimonials</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Feedback</Link>
          </div>
        </div> */}
					<div className="footer-link-wrapper">
						<div className="footer-link-items">
							<h2>Order Forms</h2>
							<Link to="/beef-form">Beef Order Form</Link>
						</div>
						<div className="footer-link-items">
							<h2>Social Media</h2>
							<p>Coming soon!</p>
							{/* <Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>*/}
						</div>
					</div>
				</section>
			)}
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
						<Link to="/" className="social-logo">
							The Butcher Shoppe
						</Link>
					</div>

					<small className="website-rights">C 2022</small>

					{!simple && (
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
					)}
				</div>
			</section>
		</div>
	);
}

export default Footer;
