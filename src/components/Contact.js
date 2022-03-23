import React, {useState} from 'react'
import './Contact.css'

function Contact() {
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
		fetch('http://localhost:3002/contact', {
			method: 'POST',
			body: JSON.stringify(input),
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}, 
		}).then(response => {
			if (response.status === 'success') {
				alert('Message Sent');
				document.getElementById('contact__form').resetForm();
			} else if (response.status === 'fail') {
				alert('Message Failed');
			}
		})
	}

	return (
		<div className="contact__container">
			<h1 className="contact__title">Contact Us!</h1>
			<form className="contact__form">
				<div className="input__container">
					<label className="contact__name__label" htmlFor="contact__name">Name</label>
					<input type="text" className="contact__name__input" name="contact__name" placeholder="Your name" value={input.name} onChange={handleChange}></input>
				</div>
				<div className="input__container">
					<label className="contact__email__label" htmlFor="contact__email">Email</label>
					<input type="text" className="contact__email__input" name="contact__email" placeholder="Your email" value={input.name} onChange={handleChange}></input>
				</div>
				<div className="contact__textbox">
					<textarea type="text" className="contact__textbox__input" name="contact__textbox" placeholder="How can we help you?" onChange={handleChange} >{input.name}</textarea>
				</div>
				<button type="submit" className="contact__form__submit btn" onClick={submitHandler}>Send</button>
			</form>
		</div>
	)
}

export default Contact