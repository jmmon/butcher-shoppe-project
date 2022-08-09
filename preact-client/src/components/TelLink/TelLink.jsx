import React from 'react'
import CONSTANTS from "utils/CONSTANTS";

export default function TelLink({className = '', children}) {
	return (
		<a className={className} href={CONSTANTS.PHONE_NUMBER_LINK}>		
			{children}
		</a>	
	)
}