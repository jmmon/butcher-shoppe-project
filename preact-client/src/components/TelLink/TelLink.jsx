import React from 'react'

export default function TelLink({className = '', children}) {
	return (
		<a className={className} href="tel:15096406766">{children}</a>
	)
}
