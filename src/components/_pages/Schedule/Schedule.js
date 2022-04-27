import React, { useState } from "react";
import "../../../App.css";
import PageTitle from "../../PageTitle/PageTitle";
import SchedulerInput from "../../SchedulerInput/SchedulerInput";
import "./Schedule.css";

import bgTitle from "../../../assets/images/image-1-116.jpg";

function Schedule() {
	return (
		<>
			<PageTitle heading="SCHEDULE" bgImage={bgTitle} />
			<div className="panel-container">
				<div className="schedule__container panel--shadow card">
					<div className="schedule-item__container">
						<div className="schedule--text__container panel--shadow card">
							<h3 className="schedule--text__title">
								Ready to move forward?
							</h3>
							<p className="schedule--text">
								Schedule a phone call and we will discuss which
								cuts you would like, prices, timeframes, and
								answer any other questions you might have.
							</p>
						</div>
					</div>

					<div className="schedule-item__container">
						<SchedulerInput />
					</div>
				</div>
			</div>
		</>
	);
}

export default Schedule;
