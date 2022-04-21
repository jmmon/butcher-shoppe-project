import React, {useState} from 'react'
import '../../App.css'
import PageTitle from '../PageTitle';
import SchedulerInput from '../SchedulerInput';
import './Schedule.css'

import bgTitle from "../../assets/images/image-1-116.jpg"

function Schedule() {
	return (
		<>
		<PageTitle heading="SCHEDULE" bgImage={bgTitle}/>
		<div className="schedule__container panel--shadow card">
			{/* <h1 className="schedule-heading">Schedule</h1> */}
			<p>Ready to move forward? Schedule a phone call and we will discuss which cuts you would like, prices, timeframes, and answer any other questions you might have.</p>

			<SchedulerInput />
		</div>
		</>
	)
}

export default Schedule