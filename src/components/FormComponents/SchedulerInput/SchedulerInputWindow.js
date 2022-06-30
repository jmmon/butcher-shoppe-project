import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";
<<<<<<< HEAD
import { useFormContext } from "react-hook-form";
=======
import { Controller, useFormContext } from "react-hook-form";
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5

const DateTimePicker = ({
	title = "",
}) => {
	const {
		formState: { errors },
		setValue,
	} = useFormContext();

	const name = "date.alternate";

	// let thisError = errors;
	// name.split(".").forEach((key) => (thisError = thisError?.[key]));

	const today = new Date();
	const lastAvailableDate = new Date().setMonth(today.getMonth() + 6);

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	// const isWeekday = (date) => {
	// 	const day = date.getDay(date);
	// 	return day !== 0;
	// };

	let timer = null;

	const onChange = (dates) => {
	  const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setValue(name, {start, end});
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
					startDate={startDate}
					endDate={endDate}
					minDate={today}
					maxDate={lastAvailableDate}
					showDisabledMonthNavigation
					// dateFormat="MMMM d, yyyy"
					selectsRange
					inline
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
