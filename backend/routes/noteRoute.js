const express = require('express');
const router = express.Router();
const ScheduledDate = require('../models/scheduledDatesModel');

router.route("/create").post((req, res) => {
    console.log('create router working');
    const datePicked = req.body.datePicked;
		const name = req.body.name;
		const phoneNumber = req.body.phoneNumber;

    const newScheduledDate = new ScheduledDate({
        date: datePicked,
				name: name,
				phone: phoneNumber,
    })

    newScheduledDate.save();
});

/* date: Date,
person: String,
phone: String,
creationDate: {
		type: Date,
		default: Date.now
}, */


router.route('/getall').get((req, res) => {
    console.log('getall router working')
    ScheduledDate.find()
    .then(scheduledDates => {
        res.json(scheduledDates);
        console.log('scheduledDates:', scheduledDates)
    })

});

module.exports = router;