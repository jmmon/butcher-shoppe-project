// import React, { useState } from "react";
// import * as React from 'preact';

import { useState } from "preact/compat";

import DatePicker from "react-datepicker";
import { useFormContext } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";


const DateTimePicker = ({ title = "" }) => {
	const {
		setValue,
	} = useFormContext();

	const name = "dates.preferred";

	// let thisError = errors;
	// name.split(".").forEach((key) => (thisError = thisError?.[key]));

	const today = new Date();
	const lastAvailableDate = new Date().setMonth(today.getMonth() + 6);

	const [startDate, setStartDate] = useState(today);

	// const isWeekday = (date) => {
	// 	const day = date.getDay(date);
	// 	return day !== 0;
	// };

	const onChange = (date) => {
		setStartDate(date);
		setValue(name, date);
	};

	return (
		<>
			<div className="flex-col-jcenter gap-05 input-container">
				<label
					htmlFor="date-time-picker"
					// className="date-time-picker"
					className="flex-jcenter"
				>
					{title}
				</label>
				<DatePicker
					className="date-time-picker scheduler--input"
					name={name}
					onChange={onChange}
					// filterDate={isWeekday}
					
					minDate={today}
					maxDate={lastAvailableDate}

					showDisabledMonthNavigation
					// dateFormat="MMMM d, yyyy"
					inline
					selected={startDate}
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
