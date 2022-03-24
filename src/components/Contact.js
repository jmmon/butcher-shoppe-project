import React, {useState, useRef} from 'react'
import './Contact.css'

import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();
	const [input, setInput] = useState({
		contact__name: '',
		contact__email: '',
		contact__textbox: '', 
	});


	const handleChange=(e)=>{
		const {name, value} = e.target;

		setInput(prevInput => {
			return {
				...prevInput,
				[name]: value
			};
		});
	}

	const submitHandler = (e) => {
		e.preventDefault();
		console.log('contact form submit button clicked!');
		console.log(input);

		form.current.contact__number.value = Math.random() * 100000 | 0;

		emailjs.sendForm('default_service', 'contact_form', form.current, "s_lsMHoKQ1eYJ_my7")
			.then(() => {console.log('Successfully sent email!')})
			.catch((err) => {console.log('Failed:', err)});

		// fetch('http://localhost:3002/contact', {
		// 	method: 'POST',
		// 	body: JSON.stringify(input),
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	}, 
		// }).then(response => {
		// 	//console.log('response', response);
		// 	if (response.status === 200) {
		// 		console.log('Message Sent:', response.statusText);
		// 		setInput(prevInput => {
		// 			return {
		// 				...prevInput,
		// 				contact__name: '',
		// 				contact__email: '',
		// 				contact__textbox: '',
		// 			};
		// 		});
		// 	} else {
		// 		console.log('Message Failed:', response.status);
		// 		console.log(response.statusText);
		// 	}
		// })
	}

	return (
		<div className="contact__container">
			<h1 className="contact__title">Contact Us!</h1>
			<form className="contact__form" ref={form}>
				<input type="hidden" name="contact__number" />
				<div className="input__container">
					<label className="contact__name__label" htmlFor="contact__name">Name</label>
					<input type="text" className="contact__name__input" name="contact__name" placeholder="Your name" value={input.contact__name} onChange={handleChange}></input>
				</div>
				<div className="input__container">
					<label className="contact__email__label" htmlFor="contact__email">Email</label>
					<input type="text" className="contact__email__input" name="contact__email" placeholder="Your email" value={input.contact__email} onChange={handleChange}></input>
				</div>
				<div className="contact__textbox">
					<label htmlFor="contact__textbox" className="contact__textbox__label">How can we help you?</label>
					<textarea type="text" className="contact__textbox__input" name="contact__textbox" placeholder="Type here..." onChange={handleChange} value={input.contact__textbox} />
				</div>
				<button type="submit" className="contact__form__submit btn" onClick={submitHandler}>Send</button>
			</form>
		</div>
	)
}

export default Contact