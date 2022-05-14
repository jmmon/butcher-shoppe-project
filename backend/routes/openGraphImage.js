const express = require("express");
const router = express.Router();

router.route("/assets/opengraph/").get((req, res) => {
	ScheduledDate.find().then((scheduledDates) => {
		res.json(scheduledDates);
		console.log("scheduledDates:", scheduledDates);
	});
});

module.exports = router;
