import React from 'react'
import './Contact.css'

function Contact() {

	return (
		<div className="contact__container">
			<h1 className="contact__title">Contact Us!</h1>
			<form className="contact__form">
				<div className="contact__name">
					<label className="contact__name__label" htmlFor="contact__name">Name</label>
					<input type="text" className="contact__name__input" name="contact__name" placeholder="Your name"></input>
				</div>
				<div className="contact__email">
					<label className="contact__email__label" htmlFor="contact__email">Email</label>
					<input type="text" className="contact__email__input" name="contact__email" placeholder="Your email"></input>
				</div>
				<div className="contact__textbox">
					<textarea type="text" className="contact__textbox__input" name="contact__textbox" placeholder="How can we help you?"></textarea>
				</div>
				<button type="submit" className="contact__form__submit btn">Send</button>
			</form>
		</div>
	)
}

export default Contact