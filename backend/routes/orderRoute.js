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
		const contactInfo = `\x20-\x20Contact Info:\n\nName: ${fullName}\nPhone: ${contact.phone}\nEmail: ${contact.email}`;

		const addressInfo = `\x20-\x20Address:\n\n${address.line_1.toUpperCase()}${address.line_2 !== '' ? `\n${address.line_2.toUpperCase()}` : ""}\n${address.city.toUpperCase()}, ${address.state.toUpperCase()} ${address.zip_code}`;

		
		//google maps string for the email address:
		//https://maps.google.com/?q=4254 Wilcox Rd, Northport, Washington, 99157

		//formats to:
		//https://www.google.com/maps?q=4254+Wilcox+Rd,+Northport,+Washington,+99157

		const googleMapsAddressString = `https://maps.google.com/?q=${address.line_1},+${address.line_2 !== '' ? address.line_2 : ''},+${address.city},+${address.state},+${address.zip_code}`.replaceAll(' ', "+");

		const animalsString = animals.map(animalString => `\n${animalString.toUpperCase()}`);

		const animalsInfo = `\x20-\x20Animals scheduled for slaughter:\n${animalsString}\n`;


		const datesInfo = `\x20-\x20Dates:\n\nPreferred Date: ${dates.preferred}\nAlternate Date${dates.alternate.start === dates.alternate.end ? `: ${dates.alternate.start}` : ` Window: \n\x20from: ${dates.alternate.start}\n\x20to: ${dates.alternate.end}`}`;
	

		const textBodyHeader_toUs = `You Received A New Order:\n`;
		const textBodyFooter_toUs = `(Replies get sent to ${fullName} at ${contact.email})`;

		const textBodyHeader_toThem = `We Have Received Your Order:\n`;
		const textBodyFooter_toThem = `Have any questions? Reply to this email and we will get back to you!`;

		Promise.all([
			// to us
			order_form__transporter.sendMail({
				from: `"Orders @ The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,
				to: `"Northport Butcher Shoppe Info" <${process.env.INFO_EMAIL_USERNAME}>`,
				// to: process.env.NOREPLY_EMAIL_USERNAME,

				replyTo: `"${fullName}" <${buyer.email_address}>`,

				subject: `NEW ORDER from ${fullName} - Order #${orderNumber}`,

				text: `${textBodyHeader_toUs}\n${contactInfo}\n\n\n${addressInfo}\n\n${googleMapsAddressString}\n\n\n${animalsInfo}\n\n${datesInfo}\n\n${textBodyFooter_toUs}`,

				html: `<h2>${textBodyHeader_toUs}</h2><br>${contactInfo.replaceAll('\n', '<br>')}<br><br><br>${addressInfo.replaceAll('\n', '<br>')}<br><br><a href=${googleMapsAddressString}>Google Maps</a><br><br><br>${animalsInfo.replaceAll('\n', '<br>')}<br><br>${datesInfo.replaceAll('\n', '<br>')}<br><br><i>${textBodyFooter_toUs}</i>`,
			}),

			order_form__transporter.sendMail({
				from: `"Orders @ The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,
				to: `"Order Archive" <${process.env.ORDER_ARCHIVE_EMAIL_USERNAME}>`,
				// to: process.env.NOREPLY_EMAIL_USERNAME,

				replyTo: `"${fullName}" <${buyer.email_address}>`,

				subject: `NEW ORDER from ${fullName} - Order #${orderNumber}`,

				text: `${textBodyHeader_toUs}\n${contactInfo}\n\n\n${addressInfo}\n\n${googleMapsAddressString}\n\n\n${animalsInfo}\n\n${datesInfo}\n\n${textBodyFooter_toUs}`,

				html: `<h2>${textBodyHeader_toUs}</h2><br>${contactInfo.replaceAll('\n', '<br>')}<br><br><br>${addressInfo.replaceAll('\n', '<br>')}<br><br><a href=${googleMapsAddressString}>Google Maps</a><br><br><br>${animalsInfo.replaceAll('\n', '<br>')}<br><br>${datesInfo.replaceAll('\n', '<br>')}<br><br><i>${textBodyFooter_toUs}</i>`,
			}),

			// to them
			order_form__transporter.sendMail({
				from: `"Orders - The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,

				to: `"${fullName}" <${buyer.email_address}>`,

				replyTo: `"Northport Butcher Shoppe Info" <${process.env.SUPPORT_EMAIL_USERNAME}>`,

				subject: `ORDER RECIEVED - Order #${orderNumber}`,

				text: `${textBodyHeader_toThem}\n${contactInfo}\n\n\n${addressInfo}\n\n${googleMapsAddressString}\n\n\n${animalsInfo}\n\n${datesInfo}\n\n${textBodyFooter_toThem}`,

				html: `<h2>${textBodyHeader_toThem}</h2><br>${contactInfo.replaceAll('\n', '<br>')}<br><br><br>${addressInfo.replaceAll('\n', '<br>')}<br><br><a href=${googleMapsAddressString}>Google Maps</a><br><br><br>${animalsInfo.replaceAll('\n', '<br>')}<br><br>${datesInfo.replaceAll('\n', '<br>')}<br><br><i>${textBodyFooter_toThem}</i>`,
			}),
		])
			.then(() => {
				console.log("Finished sending emails!");
				res.status(200).send("Contact mail sent!");
			})
			.catch((e) => {
				console.log("Error Sending email:", e);
				res.status(500).send("Mail NOT sent:", e);
			});
	}
});

module.exports = router;
