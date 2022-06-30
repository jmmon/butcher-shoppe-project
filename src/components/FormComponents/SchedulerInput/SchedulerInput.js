import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
<<<<<<< HEAD
=======
import { CalendarContainer } from "react-datepicker";
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5
import { useFormContext } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";

const DateTimePicker = ({ 
<<<<<<< HEAD
	title = '', 
}) => {
	const {
		formState: { errors },
		setValue,
	} = useFormContext();

	const name = "date.preferred";
=======
	selectHandler, 
	title = '', 
// register
}) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const name = "preferred";
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5

	// let thisError = errors;
	// name.split(".").forEach((key) => (thisError = thisError?.[key]));

	const today = new Date();
	const lastAvailableDate = new Date().setMonth(today.getMonth()+6);

	const [startDate, setStartDate] = useState(today);
	
	const isWeekday = (date) => {
		const day = date.getDay(date);
		return day !== 0;
	};

<<<<<<< HEAD
	const onChange = (date) => {
		setStartDate(date);
		setValue(name, date);
	};
=======
	useEffect(() => {
		register({name: "preferred", required: true})
	}, [register])
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5

	// useEffect(() => {
	// 	register({name: "preferred", required: true})
	// }, [register])

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
<<<<<<< HEAD
					onChange={onChange}
=======
					onChange={(date) => setStartDate(date)}
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5
					// filterDate={isWeekday}
					minDate={startDate}
					maxDate={lastAvailableDate}
					showDisabledMonthNavigation
<<<<<<< HEAD
					// dateFormat="MMMM d, yyyy"
=======
					dateFormat="MMMM d, yyyy"
>>>>>>> 650ca68fb440ac8ace2c8a0dabccd281d517f8a5
					inline
				/>
			</div>
		</>
	);
};

export default DateTimePicker;
