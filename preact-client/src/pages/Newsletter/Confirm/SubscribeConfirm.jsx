import React from 'react'
import Confirm from './Confirm'

export default function SubscribeConfirm({path, setVisitedRoutes}) {
	React.useEffect(() => {
		setVisitedRoutes((prev) => ([...prev, path]));
	},[])
	return <Confirm />
}