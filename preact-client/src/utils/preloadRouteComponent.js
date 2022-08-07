import React from 'react';
import routes from "../routes";

const findComponentForRoute = (path, routes) => {
	const matchingRoute = routes.find((route) => route.path === path);
	return matchingRoute ? matchingRoute.component : null;
}

const preloadRouteComponent = (path) => {
	const component = findComponentForRoute(path, routes);
	if (component && component.preload) {
		component.preload();
	}
}

export default preloadRouteComponent;