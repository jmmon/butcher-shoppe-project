const mongoose = require('mongoose');

const ScheduledDatesSchema = {
    date: Date,
		name: String,
		phone: String,
    creationDate: {
        type: Date,
        default: Date.now
    },
};

const ScheduledDates = mongoose.model("ScheduledDates", ScheduledDatesSchema);

module.exports = ScheduledDates;