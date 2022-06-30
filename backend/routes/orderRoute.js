const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let order_form__transporter = nodemailer.createTransport({
	host: process.env.EMAIL_HOST,
	port: process.env.EMAIL_PORT,
	//secure: false, // true for port 465, false for other ports?
	secure: true,
	auth: {
		user: process.env.NOREPLY_EMAIL_USERNAME,
		pass: process.env.NOREPLY_EMAIL_PASSWORD,
	},
});

router.route("/order").get((req, res) => {
	res.send("Order get works!");
});

router.route("/order").post((req, res) => {
	console.log("order post route working:");
	// console.log("req.body:", req.body);

	//req.body.buyer...
	//req.body.animals...
	//req.body.date...

	const buyer = req.body.buyer;
	const fullName = `${buyer.name.first} ${buyer.name.last}`;
	const address = buyer.address;
	const contact = {phone: buyer.phone_number, email: buyer.email_address};
	// const animals = {}
	// req.body.animals.forEach((animalData => animals[animalData.type] = animalData.count));
	const animals = req.body.animals.map(animalData => `${animalData.type}: ${animalData.count}`);
	const dates = req.body.dates;
	const orderNumber = req.body.order_number;

	console.log(
		"name",
		fullName,
		"\nbuyer info:",
		"\ncontact:",
		contact,
		"\naddress:",
		address,
		"\nanimals",
		animals,
		"\ndates",
		dates,
		"\norder number",
		orderNumber
	);

	if (!req.body) {
		res.status(400).send("Missing info!");
	} else {

		const buyerAddressFormatted = `${address.line_1.toUpperCase()}${address.line_2 !== '' ? `\n${address.line_2.toUpperCase()}` : ""}\n${address.city.toUpperCase()}, ${address.state.toUpperCase()} ${address.zip_code}`;

		
		//google maps string for the email address:
		//https://maps.google.com/?q=4254 Wilcox Rd, Northport, Washington, 99157

		//formats to:
		//https://www.google.com/maps?q=4254+Wilcox+Rd,+Northport,+Washington,+99157

		const googleMapsAddressString = `${address.line_1},+${address.line_2 !== '' ? address.line_2 : ''},+${address.city},+${address.state},+${address.zip_code}`.replaceAll(' ', "+");
		const googleLink = `https://maps.google.com/?q=${googleMapsAddressString}`;

		const buyerInfoFormatted =  `\x20-\x20Contact Info:\n\nName: ${fullName.toUpperCase()}\nPhone: ${contact.phone}\nEmail: ${contact.email}\n\n\x20-\x20Address:\n\n${buyerAddressFormatted}\n\n${googleLink}`;


		const animalsString = animals.map(animalString => `\n${animalString.toUpperCase()}`);

		const buyerAnimalsFormatted = `\x20-\x20Animals scheduling for slaughter:\n${animalsString}\n`;

		const textBodyHeader = `You Received A New Order:\n`;

		const textBodyFooter = `\n\n(Replies get sent to ${fullName} at ${contact.email})`;

		const orderDates = `Preferred Date: ${dates.preferred}\n\nAlternate Date${dates.alternate.start === dates.alternate.end ? `: ${dates.alternate.start}` : ` Window: \n\x20from: ${dates.alternate.start}\n\x20to: ${dates.alternate.end}`}`;

		const orderInfo = `${buyerInfoFormatted}\n\n${buyerAnimalsFormatted}\n\n${orderDates}`;

		console.log('---EMAIL TO US EXAMPLE---\n', textBodyHeader);
		console.log(orderInfo);
		console.log(textBodyFooter);

		try {
			console.log("should send emails");
		} catch (e) {
			console.log("Error Sending email:", e);
			res.status(500).send("Server Error Submitting Order:", e);
		} finally {
			console.log("Finished sending both emails!");
			res.status(200).send("Order submitted!");
		}

		// Promise.all([
		// 	// to us
		// 	order_form__transporter.sendMail({
		// 		from: `"Order Form (Internal)" <${process.env.NOREPLY_EMAIL_USERNAME}>`, // sender address
		// 		// to: `"Northport Butcher Shoppe Info" <${process.env.INFO_EMAIL_USERNAME}>`, // string list of receiver(s)
		// 		to: NOREPLY_EMAIL_USERNAME,
		// 		replyTo: `"${fullName}" <${buyer.email_address}>`,
		// 		subject: `NEW ORDER from ${fullName} - Order #${orderNumber}`, // subject line
		// 		text: `Hello, Northport Butcher Shoppe,\n\nNEW ORDER RECEIVED:\n\nFrom ${fullName}:\n\n"\n${text}\n"\n\n(Replies get sent to ${contact__name} at ${contact__userEmail})`, // plain text body
		// 		html: `<h1>Hello, Northport Butcher Shoppe,</h1><br><h3>You received a new mesage from ${contact__name}:</h3><p><i>"</i><br>${text}<br><i>"</i></p><br><i>(Replies get sent to ${contact__name} at ${contact__userEmail})</i>`, //html version of the message
		// 	}),
		// 	// to them
		// 	order_form__transporter.sendMail({
		// 		from: `"Northport Butcher Shoppe Contact Form" <${process.env.CONTACT_EMAIL_USERNAME}>`, // sender address
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
