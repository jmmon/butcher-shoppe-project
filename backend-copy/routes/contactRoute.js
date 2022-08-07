const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let noReplyEmailTransporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	//secure: false, // true for port 465, false for other ports?
	secure: true,
	auth: {
		user: process.env.NOREPLY_EMAIL_USERNAME,
		pass: process.env.NOREPLY_EMAIL_PASSWORD,
	},
});


const contactAddress = {
	name: "Contact - The Butcher Shoppe",
	address: process.env.NOREPLY_EMAIL_USERNAME
};
const infoAtSupportAddress = {
	name:  "Info - The Butcher Shoppe",
	address: process.env.SUPPORT_EMAIL_USERNAME
};
const infoAddress = {
	name: "Info - The Butcher Shoppe",
	address: process.env.INFO_EMAIL_USERNAME
};

// router.route("/contact").get((req, res) => {
// 	res.send("Contact get works!");
// });

router.route("/contact").post((req, res) => {
	console.log("contact post route working:");
	console.log("req.body:", req.body);
	const contact__name = req.body.contact__name;
	const contact__number = req.body.contact__number;
	const contact__topic = req.body.contact__topic;
	const contact__userEmail = req.body.contact__email;
	const text = req.body.contact__textarea;

	console.log(
		"name",
		contact__name,
		"contact number",
		contact__number,
		"topic",
		contact__topic,
		"email",
		contact__userEmail,
		"text",
		text
	);

	if (!(contact__name && contact__number && contact__userEmail && text)) {
		res.status(400).send({message: "Missing info!"});
	} else {
		const fullTopic = contact__topic.includes("pricing")
			? "Pricing Question"
			: contact__topic.includes("orders")
			? "Orders Question"
			: contact__topic.includes("support")
			? "Support Question"
			: "General Question";



		const customerAddress = {
			name: contact__name,
			address: contact__userEmail
		};

		Promise.all([
			// SUPPORT to us
			noReplyEmailTransporter.sendMail({
				from: contactAddress, // sender address
				to: infoAtSupportAddress, // string list of receiver(s)
				replyTo: customerAddress,

				subject: `New Contact Message from ${contact__name} - ${fullTopic} - Contact #${contact__number}`, // subject line
				text: `Hello, Northport Butcher Shoppe,\n\nYou received a new support message from ${contact__name}:\n\n"\n${text}\n"\n\n(Replies get sent to ${contact__name} at ${contact__userEmail})`, // plain text body
				html: `<h1>Hello, Northport Butcher Shoppe,</h1><br><h3>You received a new mesage from ${contact__name}:</h3><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies get sent to ${contact__name} at ${contact__userEmail})</i>`, //html version of the message
			}),
			// to us
			noReplyEmailTransporter.sendMail({
				from: contactAddress, // sender address
				to: infoAddress, // string list of receiver(s)
				replyTo: customerAddress,

				subject: `New Contact Message from ${contact__name} - ${fullTopic} - Contact #${contact__number}`, // subject line
				text: `Hello, Northport Butcher Shoppe,\n\nYou received a new message from ${contact__name}:\n\n"\n${text}\n"\n\n(Replies get sent to ${contact__name} at ${contact__userEmail})`, // plain text body
				html: `<h1>Hello, Northport Butcher Shoppe,</h1><br><h3>You received a new mesage from ${contact__name}:</h3><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies get sent to ${contact__name} at ${contact__userEmail})</i>`, //html version of the message
			}),
			// to them
			noReplyEmailTransporter.sendMail({
				from: contactAddress, // sender address
				to: customerAddress, // string list of receiver(s)
				replyTo: infoAddress,

				subject: `Contact - ${fullTopic} - The Northport Butcher Shoppe - Contact #${contact__number}`, // subject line
				text: `Hello ${contact__name},\n\nThank you for reaching out to us at the Northport Butcher Shoppe!\nWe will get back to you as soon as we are able.\nHere's a copy of the message you sent us:\n\n"\n${text}\n"\n\n(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})`, // plain text body
				html: `<h1>Hello ${contact__name},</h1><h3>Thank you for reaching out to us at the Northport Butcher Shoppe!<br>We will get back to you as soon as we are able.</h3><br><i>Here's a copy of the message you sent us:</i><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})</i>`,
			}),
		])
			.then(() => {
				console.log("Finished sending both emails!");
				res.status(200).send({message: "Contact mail sent!"});
			})
			.catch((e) => {
				console.log("Error Sending email:", e);

				// Error (Support) to us
				noReplyEmailTransporter.sendMail({
					from: contactAddress, // sender address
					to: infoAtSupportAddress, // string list of receiver(s)
					replyTo: customerAddress,

					subject: `ERROR with contact box: "New Contact Message from ${contact__name} - ${fullTopic} - Contact #${contact__number}"`, // subject line
					text: `Error sending contact email!\nError info:\n${e}\n\nOriginal email message:\n"Hello, Northport Butcher Shoppe,\n\nYou received a new support message from ${contact__name}:\n\n"\n${text}\n"\n\n(Replies get sent to ${contact__name} at ${contact__userEmail})"`, // plain text body
					html: `<h2>ERROR sending contact email!</h2><br><h3>Error Info:</h3><br><pre><code>${e}</code></pre><br><br><span>Original email message:</span><br>"<h1>Hello, Northport Butcher Shoppe,</h1><br><h3>You received a new mesage from ${contact__name}:</h3><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies get sent to ${contact__name} at ${contact__userEmail})</i>"`, //html version of the message
				}),
					res.status(500).send({message: "Mail NOT sent:", error: e});
			});
		// const fullTopic = "Support Question";

		// Promise.all([

		// 	// SUPPORT to them
		// 	noReplyEmailTransporter.sendMail({
		// 		from: `"Northport Butcher Shoppe Contact Form" <${process.env.NOREPLY_EMAIL_USERNAME}>`, // sender address
		// 		to: `"${contact__name}" <${contact__userEmail}>`, // string list of receiver(s)
		// 		replyTo: `"Northport Butcher Shoppe Info" <${process.env.SUPPORT_EMAIL_USERNAME}>`,
		// 		subject: `Contact - ${fullTopic} - The Northport Butcher Shoppe - Contact #${contact__number}`, // subject line
		// 		text: `Hello ${contact__name},\n\nThank you for reaching out to us at the Northport Butcher Shoppe!\nWe will get back to you as soon as we are able.\nHere's a copy of the message you sent us:\n\n"\n${text}\n"\n\n(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})`, // plain text body
		// 		html: `<h1>Hello ${contact__name},</h1><h3>Thank you for reaching out to us at the Northport Butcher Shoppe!<br>We will get back to you as soon as we are able.</h3><br><i>Here's a copy of the message you sent us:</i><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies to this email get sent to ${process.env.INFO_EMAIL_USERNAME})</i>`,
		// 	}),
		// ])
		// 	.then(() => {
		// 		console.log("Finished sending both emails!");
		// 		res.status(200).send("Contact mail sent!");
		// 	})
		// 	.catch((e) => {
		// 		console.log("Error Sending email:", e);
		// 		res.status(500).send("Mail NOT sent:", e);
		// 	});
	}
});

module.exports = router;