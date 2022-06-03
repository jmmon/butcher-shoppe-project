import React, { useState } from "react";
import "../../../App.css";
import PageTitle from "../../PageTitle/PageTitle";
import SchedulerInput from "../../SchedulerInput/SchedulerInput";
import "./Schedule.css";

import bgTitle from "../../../assets/images/image-1-116.jpg";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground";

function Schedule() {
	return (
		<>
			<PageTitle title="SCHEDULE" bgImage={bgTitle} />
			<WhitePageBackground>
				<div className="grid--col-md">
					<div className="card--width">
						<div className="schedule__container panel-shadow--dark card">
							<div className="schedule-item__container">
								<div className="schedule--text__container panel-shadow--dark card">
									<h3 className="schedule--text__title">
										Ready to move forward?
									</h3>
									<p className="schedule--text">
										Schedule a phone call and we will
										discuss which cuts you would like,
										prices, timeframes, and answer any other
										questions you might have.
									</p>
								</div>
							</div>

							<div className="schedule-item__container">
								<SchedulerInput />
							</div>
						</div>
					</div>
				</div>
			</WhitePageBackground>
		</>
	);
}

export default Schedule;
