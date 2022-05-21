const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let contact_form__transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	//secure: false, // true for port 465, false for other ports?
	secure: true,
	auth: {
		user: process.env.CONTACT_EMAIL_USERNAME,
		pass: process.env.CONTACT_EMAIL_PASSWORD,
	},
});

router.route("/contact").get((req, res) => {
	res.send("Contact get works!");
});

router.route("/contact").post((req, res) => {
	console.log("contact post route working:");
	console.log("req.body:", req.body);
	const contact__name = req.body.contact__name;
	const contact__number = req.body.contact__number;
	const contact__userEmail = req.body.contact__email;
	const text = req.body.contact__textarea;

	console.log(
		"name",
		contact__name,
		"contact number",
		contact__number,
		"email",
		contact__userEmail,
		"text",
		text
	);

	if (!(contact__name && contact__number && contact__userEmail && text)) {
		res.status(400).send("Missing info!");
	} else {
		Promise.all([
			contact_form__transporter.sendMail({
				from: `"Contact_Form(Internal)" <${process.env.CONTACT_EMAIL_USERNAME}>`, // sender address
				to: `"Northport Butcher Shoppe Info" <${process.env.INFO_EMAIL_USERNAME}>`, // string list of receiver(s)
				replyTo: `"${contact__name}" <${contact__userEmail}>`,
				subject: `New message from ${contact__name} - Contact #${contact__number}`, // subject line
				text: `Hello, Northport Butcher Shoppe,\n\nYou received a new mesage from ${contact__name}:\n\n"\n${text}\n"\n\n(Replies get sent to ${contact__name} at ${contact__userEmail})`, // plain text body
				html: `<h1>Hello, Northport Butcher Shoppe,</h1><br><h3>You received a new mesage from ${contact__name}:</h3><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies get sent to ${contact__name} at ${contact__userEmail})</i>`, //html version of the message
			}),
			contact_form__transporter.sendMail({
				from: `"Northport Butcher Shoppe Contact Form" <${process.env.CONTACT_EMAIL_USERNAME}>`, // sender address
				to: `"${contact__name}" <${contact__userEmail}>`, // string list of receiver(s)
				replyTo: `"Northport Butcher Shoppe Info" <${process.env.INFO_EMAIL_USERNAME}>`,
				subject: `Northport Butcher Shoppe Message from ${contact__name} - Contact #${contact__number}`, // subject line
				text: `Hello ${contact__name},\n\nThank you for reaching out to us at the Northport Butcher Shoppe!\nWe will get back to you as soon as we are able.\nHere's a copy of the message you sent us:\n\n"\n${text}\n"\n\n(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})`, // plain text body
				html: `<h1>Hello ${contact__name},</h1><h3>Thank you for reaching out to us at the Northport Butcher Shoppe!<br>We will get back to you as soon as we are able.</h3><br><i>Here's a copy of the message you sent us:</i><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})</i>`,
			}),
		])
			.then(() => {
				console.log("Finished sending both emails!");
				res.status(200).send("Contact mail sent!");
			})
			.catch((e) => {
				console.log("Error Sending email:", e);
				res.status(500).send("Mail NOT sent:", e);
			});
	}
});

module.exports = router;
