import React from 'react'

import Styles from "./Notification.module.css";

export default function Notification({notificationState}) {
	return (
		<p
			className={`${Styles.notification} ${
				notificationState.error
					? `${Styles.show} ${Styles.error}`
					: notificationState.data
					? `${Styles.show} ${Styles.success}`
					: ""
			}`}
		>
			{notificationState.data
				? "Order Submitted! A copy will be sent to your provided email address."
				: notificationState.error
				? `Error: ${notificationState.error.message}`
				: ""}
		</p>
	)
}