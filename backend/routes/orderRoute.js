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

// const formatOrderContent = (data) => {
// 	const fullName = `${data.buyer.name.first} ${data.buyer.name.last}`;
// 	const address = data.buyer.address;
// 	const contact = {
// 		phone: data.buyer.phone_number, 
// 		email: data.buyer.email_address
// 	};
// 	const animals = data.animals.map(animalData => `${animalData.type}: ${animalData.count}`);
// 	const dates = data.dates;
// 	const orderNotes = data.order_notes;

// 	const contactInfoFormatted = `\x20-\x20Contact Info:\n\nName: ${fullName}\nPhone: ${contact.phone}\nEmail: ${contact.email}`;
// 	const addressInfoFormatted = `\x20-\x20Address:\n\n${address.line_1.toUpperCase()}${address.line_2 !== '' ? `\n${address.line_2.toUpperCase()}` : ""}\n${address.city.toUpperCase()}, ${address.state.toUpperCase()} ${address.zip_code}`;
// 	const googleMapsAddressString = `https://maps.google.com/?q=${address.line_1},+${address.line_2 !== '' ? address.line_2 : ''},+${address.city},+${address.state},+${address.zip_code}`.replaceAll(' ', "+");
// 	const animalsInfoFormatted = `\x20-\x20Animals scheduled for slaughter:\n${animals.map(animalString => `\n${animalString.toUpperCase()}`)}`;
// 	const datesFormatted = `\x20-\x20Dates:\n\nPreferred Date: ${dates.preferred}\nAlternate Date${dates.alternate.start === dates.alternate.end ? `: ${dates.alternate.start}` : ` Window: \n\x20from: ${dates.alternate.start}\n\x20to: ${dates.alternate.end}`}`;
// 	const orderNotesFormatted = `\x20-\x20Order Notes:\n${orderNotes}`;

// 	return `${contactInfoFormatted}\n\n\n${addressInfoFormatted}\n\n${googleMapsAddressString}\n\n\n${animalsInfoFormatted}\n\n\n${datesFormatted}\n\n\n${orderNotesFormatted}`;
// }

router.route("/order").get((req, res) => {
	res.send("Order get works!");
});

router.route("/order").post((req, res) => {
	console.log("order post route working:");
	const fullName = `${req.body.buyer.name.first} ${req.body.buyer.name.last}`;
	const address = req.body.buyer.address;
	const contact = {
		phone: req.body.buyer.phone_number, 
		email: req.body.buyer.email_address
	};
	const animals = req.body.animals.map(animalData => `${animalData.type}: ${animalData.count}`);
	const dates = req.body.dates;
	const orderNotes = req.body.order_notes;
	const orderNumber = req.body.order_number;

	// console.log(
	// 	"name",
	// 	fullName,
	// 	"\nbuyer info:",
	// 	"\ncontact:",
	// 	contact,
	// 	"\naddress:",
	// 	address,
	// 	"\nanimals",
	// 	animals,
	// 	"\ndates",
	// 	dates,
	// 	"\norder number",
	// 	orderNumber,
	// 	"\norder notes",
	// 	orderNotes
	// );

	if (!req.body) {
		res.status(400).send("Missing info!");
	} else {



		const contactInfoFormatted = `\x20-\x20Contact Info:\n\nName: ${fullName}\nPhone: ${contact.phone}\nEmail: ${contact.email}`;
		const addressInfoFormatted = `\x20-\x20Address:\n\n${address.line_1.toUpperCase()}${address.line_2 !== '' ? `\n${address.line_2.toUpperCase()}` : ""}\n${address.city.toUpperCase()}, ${address.state.toUpperCase()} ${address.zip_code}`;
		const googleMapsAddressString = `https://maps.google.com/?q=${address.line_1},+${address.line_2 !== '' ? address.line_2 : ''},+${address.city},+${address.state},+${address.zip_code}`.replaceAll(' ', "+");
		const animalsInfoFormatted = `\x20-\x20Animals scheduled for slaughter:\n${animals.map(animalString => `\n${animalString.toUpperCase()}`)}`;
		const datesFormatted = `\x20-\x20Dates:\n\nPreferred Date:\n-\x20${dates.preferred}\nAlternate Date${dates.alternate.start === dates.alternate.end ? `:\n-\x20${dates.alternate.start}` : ` Window:\nStart - ${dates.alternate.start}\nEnd - ${dates.alternate.end}`}`;
		const orderNotesFormatted = `\x20-\x20Order Notes:\n${orderNotes}`;


		const orderContentFormatted = `${contactInfoFormatted}\n\n\n${addressInfoFormatted}\n\n${googleMapsAddressString}\n\n\n${animalsInfoFormatted}\n\n\n${datesFormatted}\n\n\n${orderNotesFormatted}`;
		const orderContentHTML = orderContentFormatted.replaceAll('\n', '<br>');
	

		const textBodyHeader_toUs = `You Received A New Order:\n`;
		const textBodyFooter_toUs = `(Replies get sent to ${fullName} at ${contact.email})`;

		const textBodyHeader_toThem = `We Have Received Your Order:\n`;
		const textBodyFooter_toThem = `Have any questions? Reply to this email and we will get back to you!`;

		Promise.all([
			// to us
			order_form__transporter.sendMail({
				from: `"Orders - The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,
				to: `"Info - The Butcher Shoppe" <${process.env.INFO_EMAIL_USERNAME}>`,
				replyTo: `"${fullName}" <${buyer.email_address}>`,
				subject: `NEW ORDER from ${fullName} - Order #${orderNumber}`,
				text: `${textBodyHeader_toUs}\n${orderContentFormatted}\n\n${textBodyFooter_toUs}`,
				html: `<h2>${textBodyHeader_toUs}</h2><br>${orderContentHTML}<br><br><i>${textBodyFooter_toUs}</i>`,
			}),

			// to order archive
			order_form__transporter.sendMail({
				from: `"Orders - The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,
				to: `"Orders - Archive - The Butcher Shoppe" <${process.env.ORDER_ARCHIVE_EMAIL_USERNAME}>`,
				replyTo: `"${fullName}" <${buyer.email_address}>`,
				subject: `NEW ORDER from ${fullName} - Order #${orderNumber}`,
				text: `${textBodyHeader_toUs}\n${orderContentFormatted}\n\n${textBodyFooter_toUs}`,
				html: `<h2>${textBodyHeader_toUs}</h2><br>${orderContentHTML}<br><br><i>${textBodyFooter_toUs}</i>`,
			}),

			// to them
			order_form__transporter.sendMail({
				from: `"Orders - The Butcher Shoppe" <${process.env.NOREPLY_EMAIL_USERNAME}>`,
				to: `"${fullName}" <${buyer.email_address}>`,
				replyTo: `"Northport Butcher Shoppe Info" <${process.env.INFO_EMAIL_USERNAME}>`,
				subject: `ORDER RECIEVED - Order #${orderNumber}`,
				text: `${textBodyHeader_toThem}\n${orderContentFormatted}\n\n${textBodyFooter_toThem}`,
				html: `<h2>${textBodyHeader_toThem}</h2><br>${orderContentHTML}<br><br><i>${textBodyFooter_toThem}</i>`,
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
