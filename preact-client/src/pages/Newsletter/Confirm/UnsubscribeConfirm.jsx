import React from 'react'
import SubscribeConfirm from './SubscribeConfirm'

export default function UnsubscribeConfirm({...props}) {
	return (
		<SubscribeConfirm isSubscribePage={false} {...props}/>
	)
}