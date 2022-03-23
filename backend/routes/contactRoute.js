const express = require('express');
const router = express.Router();

router.route('/contact').post((req, res) => {
	console.log('contact post route working:');
	const name = req.body.contact__name;
	const email = req.body.contact__email;
	const text = req.body.contact__textbox;

	console.log('name', name, 'email', email, 'text', text);

	// TODO: send email
});

module.exports = router;