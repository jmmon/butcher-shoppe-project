const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let subscribe__transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	//secure: false, // true for port 465, false for other ports?
	secure: true,
	auth: {
		user: process.env.NOREPLY_EMAIL_USERNAME,
		pass: process.env.NOREPLY_EMAIL_PASSWORD,
	},
});

router.route("/subscribe").get((req, res) => {
	res.send("subscribe get works!");
});
router.route("/unsubscribe").get((req, res) => {
	res.send("unsubscribe get works!");
});

router.route("/subscribe").post(async (req, res) => {
	// Email to send requests to: newsletter-request@thenorthportbutchershopppe.com

	// Email to send requests from: noreply@thenorthportbutchershopppe.com

	// Use commands in the subject line or body of the message, each command on a different line.
	// put 'end' on line after commands just in case there's a signature or other text below.

	// Commands: (no quotes or brackets!)
	//	subscribe [password] [nodigest|digest] [address=theiremail@example.com]
	//	confirm [confirmation-string]

	// TODO: use noreply@ email to send our commands to our newsletter-request@ email

	console.log("req.body:", req.body);

	console.log("subscribe post route working:");
	const subscribe_userEmail = req.body.email;

	console.log("email to subscribe:", subscribe_userEmail);
	console.log("-----");

	// send us the email from the user
	// (from "userEmail" (from our internal email so as not to access the user's email), to our info@thenorthport)
	if (subscribe_userEmail === undefined) {
		res.status(400).send("email is undefined");
	} else {
		subscribe__transporter
			.sendMail({
				from: `"Subscriber (Internal)" <${process.env.NOREPLY_EMAIL_USERNAME}>`, // sender address
				to: `"Northport Newsletter Subscriber" <${process.env.SUBSCRIBER_EMAIL_USERNAME}>`, // string list of receiver(s)
				subject: `subscribe address=${subscribe_userEmail}`,
			})
			.then((emailRes) => {
				console.log(
					`Subscribe ${subscribe_userEmail} to newsletter successfully sent\nemailRes:\n${JSON.stringify(
						emailRes
					)}`
				);
				res.status(200).send("Subscription request sent!");
			})
			.catch((e) => {
				console.error("Error sending subscribe email:");
				console.error(e);
				res.status(500).send("Subscription request error:", e);
			});
	}
});

router.route("/unsubscribe").post((req, res) => {
	console.log("UNsubscribe post route working:");
	console.log("req.body:", req.body);
	const subscribe_userEmail = req.body.email;

	console.log("email to UNsubscribe:", subscribe_userEmail);
	console.log("-----");

	// send us the email from the user
	// (from "userEmail" (from our internal email so as not to access the user's email), to our info@thenorthport)
	if (subscribe_userEmail === undefined) {
		res.status(400).send("email is undefined");
	} else {
		subscribe__transporter
			.sendMail({
				from: `"Subscriber (Internal)" <${process.env.NOREPLY_EMAIL_USERNAME}>`, // sender address
				to: `"Northport Newsletter Subscriber" <${process.env.SUBSCRIBER_EMAIL_USERNAME}>`, // string list of receiver(s)
				subject: `unsubscribe address=${subscribe_userEmail}`,
			})
			.then((emailRes) => {
				console.log(
					`UNsubscribe ${subscribe_userEmail} to newsletter sent:\nemailRes:\n${JSON.stringify(
						emailRes
					)}`
				);

				res.status(200).send("Unsubscribe request sent!");
			})
			.catch((e) => {
				console.error("Error sending unsubscribe email", e);
				res.status(500).send("Unsubscribe request error:", e);
			});
	}
});

module.exports = router;
