import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import { useFormContext } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";

const DateTimePicker = ({ 
	selectHandler, 
	title = '', 
// register
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const name = "preferred";

	// let thisError = errors;
	// name.split(".").forEach((key) => (thisError = thisError?.[key]));

	const today = new Date();
	const lastAvailableDate = new Date().setMonth(today.getMonth()+6);

	const [startDate, setStartDate] = useState(today);
	
	const isWeekday = (date) => {
		const day = date.getDay(date);
		return day !== 0;
	};

	useEffect(() => {
		register({name: "preferred", required: true})
	}, [register])

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
					onChange={(date) => setStartDate(date)}
					// filterDate={isWeekday}
					minDate={startDate}
					maxDate={lastAvailableDate}
					showDisabledMonthNavigation
					dateFormat="MMMM d, yyyy"
					inline
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
