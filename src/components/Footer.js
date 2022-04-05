import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Contact from './Contact';
import './Footer.css'
import Map2 from './Map2.js';

const location = {
	// 48.916323, -117.781973
	address: '420 Center Ave, Northport, WA 99157, USA',
  lat: 48.916323,
  lng: -117.781973,
};

function Footer() {


	return (
		<div className='footer-container' id="footer-container">
			<section className="footer-subscription">
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
			</section>

			<section className="footer-contact-map-wrapper">
				<div className="footer-contact-container">
					<p className="footer-contact-heading">
						Contact Us!
					</p>
					<Contact />
				</div>
				<div className="footer-map-container">
					<p className="footer-map-heading">
						Find us in downtown Northport:
					</p>
					<Map2 
						placeName={"412 Center Ave, Northport, WA 99157, USA"} 
						location={location} 
						zoomLevel={17} 
						/>
				</div>
			</section>
			

			<div className="footer-links" id="more-links">
				<div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            {/* <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Feedback</Link>
            {/* <Link to='/'>Sponsorships</Link> */}
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Order Forms</h2>
            <Link to='/beef-form'>Beef Order Form</Link>
            {/* <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link> */}
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						{/* <Link to='/' className="social-logo">
							TRVL <i className="fab fa-typo3"></i>
						</Link> */}
						<Link to="/" className="social-logo" >
						Northport Butcher Shoppe <i className="fa-solid fa-tractor" />
						</Link>
					</div>

					<small className="website-rights">NPBS C 2022</small>

					<div className="social-icons">
						<Link 
							className="social-icon-link facebook"
							to='/' 
							target="_blank"
							aria-label="Facebook"
						>
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link 
							className="social-icon-link instagram"
							to='/' 
							target="_blank"
							aria-label="Instagram"
						>
							<i className="fab fa-instagram"></i>
						</Link>
						<Link 
							className="social-icon-link youtube"
							to='/' 
							target="_blank"
							aria-label="Youtube"
						>
							<i className="fab fa-youtube"></i>
						</Link>
						<Link 
							className="social-icon-link twitter" 
							to='/' 
							target="_blank"
							aria-label="Twitter"
						>
							<i className="fab fa-twitter"></i>
						</Link>
						<Link 
							className="social-icon-link linkedin"
							to='/' 
							target="_blank"
							aria-label="LinkedIn"
						>
							<i className="fab fa-linkedin"></i>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Footer