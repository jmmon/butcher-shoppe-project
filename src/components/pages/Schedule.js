import React, {useState} from 'react'
import '../../App.css'
import SchedulerInput from '../SchedulerInput';
import './Schedule.css'

function Schedule() {

	return (
		<div className="schedule__container">
			<h1 className="schedule">Schedule</h1>
			<p>Ready to move forward? Schedule a phone call and we will discuss which cuts you would like, prices, timeframes, and answer any other questions you might have.</p>

			<SchedulerInput />
		</div>
	)
}

export default Schedule