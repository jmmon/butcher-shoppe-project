import { Suspense, lazy as Lazy } from "react";
import { Link } from "react-router-dom";
// import Button from './Button'
import "./Footer.css";

const MapPromise = import("../Map/Map.js");
const Map = Lazy(() => MapPromise);

const ContactPromise = import("../Contact/Contact.js");
const Contact = Lazy(() => ContactPromise);

const LogoComponentPromise = import("../../assets/logo/LogoComponent.js");
const LogoComponent = Lazy(() => LogoComponentPromise);

function Footer() {
	return (
		<div className="footer-container" id="footer-container">
			{/* <section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join our newsletter to receive periodic updates from your Northport Butcher Shoppe!
				</p>
				<p className="footer-subscription-text">
					You can unsubscripe at any time.
				</p>
				<div className="input-areas">
					<form className="footer-email-form">
						<input type="email" name="email" placeholder="Your Email" className="footer-input" />
						<Button buttonStyle="btn--outline" url='/newsletter'>Subscribe</Button>
					</form>
				</div>
			</section> */}

			<section className="footer-contact-map-wrapper">
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

			<section className="footer-links" id="more-links">
				{/* <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>About Us</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Feedback</Link>
          </div>
        </div> */}
				<div className="footer-link-wrapper">
					<div className="footer-link-items">
						<h2>Order Forms</h2>
						<Link to="/beef-form">Beef Order Form</Link>
						{/* <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
					</div>
					<div className="footer-link-items">
						<h2>Social Media</h2>
						<p>Coming soon!</p>
						{/* <Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link> */}
					</div>
				</div>
			</section>

			<Suspense
				fallback={
					<div className="footer--loading-fallback">
						Loading Banner...
					</div>
				}
			>
				<LogoComponent fill="white" className="footer-banner" />
			</Suspense>

			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							The Butcher Shoppe
						</Link>
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
						<Link
							className="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube"></i>
						</Link>
						<Link
							className="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter"></i>
						</Link>
						<Link
							className="social-icon-link linkedin"
							to="/"
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
