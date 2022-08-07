import React from 'react'
import styles from "./DateSelector.module.css";

import SectionContainer from 'components/SectionContainer/SectionContainer';
import OrderFormSectionSubheading from 'components/FormComponents/OrderFormSectionSubheading/OrderFormSectionSubheading';
import SchedulerInput from 'components/FormComponents/SchedulerInput/SchedulerInput';
import SchedulerInputWindow from 'components/FormComponents/SchedulerInput/SchedulerInputWindow';

export default function DateSelector() {
	return (
		<SectionContainer title="Schedule A Date">
			<OrderFormSectionSubheading>
				Pick a Preferred Date, and you may choose an
				Alternate Date or Alternate Start and End
				Date Window
			</OrderFormSectionSubheading>
			<div
				className={`flex-jcenter-astart-wrap gap-4 ${styles.date}`}
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