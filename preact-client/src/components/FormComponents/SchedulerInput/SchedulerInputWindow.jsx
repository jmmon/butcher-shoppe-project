import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";
import { useFormContext } from "react-hook-form";

const DateTimePicker = ({
	title = "",
}) => {
	const {
		setValue,
	} = useFormContext();

	const name = "dates.alternate";

	const today = new Date();
	const lastAvailableDate = new Date().setMonth(today.getMonth() + 6);

	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(today);

	// const isWeekday = (date) => {
	// 	const day = date.getDay(date);
	// 	return day !== 0;
	// };

	// let timer = null;

	const onChange = (dates) => {
	  const [start, end] = dates;
		setStartDate(start);
		setEndDate(end);
		setValue(name, {start, end});
	};

	// initial state! otherwise the form context does not have an initial value;; should probably be set elsewhere...
	useEffect(() => {
		setValue(name, {start: today, end: today});
	}, []);

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
					startDate={startDate}
					endDate={endDate}
					// filterDate={isWeekday}
					minDate={today}
					maxDate={lastAvailableDate}

					showDisabledMonthNavigation
					// dateFormat="MMMM d, yyyy"
					selectsRange
					inline
					selected={startDate}
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
