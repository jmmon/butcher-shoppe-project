// import React from 'react'
import * as React from 'preact';

import Styles from "./DateSelector.module.css";

import SectionContainer from '../../../SectionContainer/SectionContainer';
import OrderFormSectionSubheading from '../../../FormComponents/OrderFormSectionSubheading/OrderFormSectionSubheading';
import SchedulerInput from '../../../FormComponents/SchedulerInput/SchedulerInput';
import SchedulerInputWindow from '../../../FormComponents/SchedulerInput/SchedulerInputWindow';

export default function DateSelector() {
	return (
		<SectionContainer title="Schedule A Date">
			<OrderFormSectionSubheading>
				Pick a Preferred Date, and you may choose an
				Alternate Date or Alternate Start and End
				Date Window
			</OrderFormSectionSubheading>
			<div
				className={`flex-jcenter-astart-wrap gap-4 ${Styles.date}`}
			>
				<SchedulerInput
					title="Preferred Date:"
				/>
				<SchedulerInputWindow
					title="Alternate Date or Date Window:"
				/>
			</div>
		</SectionContainer>
	)
}