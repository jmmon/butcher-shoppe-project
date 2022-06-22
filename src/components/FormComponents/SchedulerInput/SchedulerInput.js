import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";
// import Button from "./Button.js";

const DateTimePicker = ({ selectHandler }) => {
	const today = new Date();
	const endDate = new Date().setMonth(today.getMonth()+6);

	const [startDate, setStartDate] = useState(today);
	const isWeekday = (date) => {
		const day = date.getDay(date);
		return day !== 0;
	};

	const MyContainer = ({ className, children }) => {
		return (
			<div className="date-time-picker--container">
				<CalendarContainer className={className}>
					<div style={{ background: "#eee", fontSize: "20px" }}>
						Pick a date for your call:
					</div>
					<div style={{ position: "relative" }}>{children}</div>
				</CalendarContainer>
			</div>
		);
	};

	return (
		<>
			<h3 className="scheduler--heading">What works best?</h3>
			<div className="input-container">
				<label
					htmlFor="date-time-picker"
					className="date-time-picker"
				>
					Select a date and time
				</label>
				<DatePicker
					className="date-time-picker scheduler--input"
					selected={startDate}

					onChange={(date) => setStartDate(date)}
					filterDate={isWeekday}
					// calendarContainer={MyContainer}
					minDate={today}
					maxDate={endDate}
					showDisabledMonthNavigation
					showTimeSelect
					timeFormat="HH:mm"
					timeIntervals={30}
					timeCaption="time"
					dateFormat="MMMM d, yyyy h:mm aa"
					inline
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
