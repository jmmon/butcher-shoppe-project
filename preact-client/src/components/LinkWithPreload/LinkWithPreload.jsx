import React from 'react'
import {Link} from 'wouter';
import preloadRouteComponent from 'utils/preloadRouteComponent';

export default function LinkWithPreload({href, ...rest}) {
	return (
		<Link
			href={href}
			onMouseEnter={() => preloadRouteComponent(href)}
			{...rest}
		/>
	)
}