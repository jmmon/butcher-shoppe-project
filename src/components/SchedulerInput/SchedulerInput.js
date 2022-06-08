import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarContainer } from "react-datepicker";
import PhoneInput from "react-phone-number-input/input";

import "react-datepicker/dist/react-datepicker.css";
import "./SchedulerInput.css";
// import Button from "./Button.js";

const DateTimePicker = ({ selectHandler }) => {
	const today = new Date();

	const [startDate, setStartDate] = useState(today);
	const [phone, setPhone] = useState("");
	// const [inputName, setInputName] = useState();
	const [input, setInput] = useState({
		name: "",
		// phone: "",
	});

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

	const handleChange = (e) => {
		//console.log('e.target', e.target);
		const { name, value } = e.target; //grab name and value properties of html input element

		setInput((prevInput) => {
			//set input element to (prevInput + newInput)
			return {
				...prevInput,
				[name]: value, //set the "title" or "content" to this value
			};
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("submit button clicked");
		console.log("Submitted customer info:", input.name, phone, startDate);
	};

	return (
		<div className="form-container panel-shadow--dark card">
			<form className="scheduler-form">
				<h3 className="scheduler--heading">What works best?</h3>
				<div className="date input-container">
					<label
						htmlFor="date-time-picker"
						className="date-time-picker scheduler--label"
					>
						Select a date and time
					</label>
					<DatePicker
						className="date-time-picker scheduler--input"
						selected={startDate}
						// onChange={handleChange}
						// value={input.startDate}
						onChange={(date) => setStartDate(date)}
						filterDate={isWeekday}
						calendarContainer={MyContainer}
						minDate={today}
						// excludeDates={[today]}
						showTimeSelect
						timeFormat="HH:mm"
						timeIntervals={30}
						timeCaption="time"
						dateFormat="MMMM d, yyyy h:mm aa"
					/>
				</div>
				<div className="name input-container">
					<label htmlFor="name" className="name scheduler--label">
						Your Name
					</label>
					<input
						className="name scheduler--input"
						type="text"
						id="name"
						name="name"
						placeholder="Enter your name"
						onChange={(e) => handleChange(e)}
						value={input.name}
					/>
				</div>
				<div className="phone input-container">
					<label htmlFor="phone" className="phone scheduler--label">
						Your Phone Number
					</label>
					<PhoneInput
						className="scheduler--input"
						id="phone"
						name="phone"
						country="US"
						onChange={setPhone}
						value={phone}
						placeholder="Enter your phone number"
					/>
					{/* <PhoneInput
						className="scheduler--input"
						id="phone"
						name="phone"
						country="US"
						onChange={(e) => console.log(e)} // e == the actual value
						value={input.phone}
						placeholder="Enter your phone number"
					/> */}
				</div>
				<div className="input-container btn-container">
					<button
						className="btn btn--primary--dark"
						onClick={handleSubmit}
					>
						Submit Info
					</button>
				</div>
			</form>
		</div>
	);
};

export default DateTimePicker;
