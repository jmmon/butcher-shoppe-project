import React, { lazy } from "react";
import NotFound from "pages/NotFound/NotFound"
import Home from "pages/Home/Home";

const ReactLazyPreload = (importStatement) => {
	const Component = lazy(importStatement);
	Component.preload = importStatement;
	return Component;
};

const SubscribeConfirm = ReactLazyPreload(() =>
	import("pages/Newsletter/Confirm/SubscribeConfirm")
);
const UnsubscribeConfirm = ReactLazyPreload(() =>
	import("pages/Newsletter/Confirm/UnsubscribeConfirm")
);
//const Services = ReactLazyPreload(() => import("pages/Services/Services"));
//const Faq = ReactLazyPreload(() => import("pages/Faq/Faq"));
//const Order = ReactLazyPreload(() => import("pages/Order/Order"));
//const HowToOrder = ReactLazyPreload(() =>
	//import("pages/HowToOrder/HowToOrder")
//);
const Newsletter = ReactLazyPreload(() =>
	import("pages/Newsletter/Newsletter")
);
const Unsubscribe = ReactLazyPreload(() =>
	import("pages/Newsletter/Unsubscribe")
);
//const MeetTheTeam = ReactLazyPreload(() =>
	//import("pages/MeetTheTeam/MeetTheTeam")
//);
//const Membership = ReactLazyPreload(() =>
	//import("pages/Membership/Membership")
//);
// index = [1, 10] == routes needing prefetched
const routes = [
	{ path: "/", exact: true, component: Home }, // not lazy loaded

	//{ path: "/services", exact: true, component: Services },
	//{ path: "/order", exact: true, component: Order }, 
	{ path: "/newsletter/subscribe", exact: true, component: Newsletter },
	//{ path: "/how-to-order", exact: true, component: HowToOrder },
	//{ path: "/faq", exact: true, component: Faq },
	//{ path: "/meet-the-team", exact: true, component: MeetTheTeam },
	//{ path: "/membership", exact: true, component: Membership },
	{ path: "/newsletter/unsubscribe", exact: true, component: Unsubscribe },
	{
		path: "/newsletter/subscribe/confirm/:confirmationId",
		exact: true,
		component: SubscribeConfirm,
	},
	{
		path: "/newsletter/unsubscribe/confirm/:confirmationId",
		exact: true,
		component: UnsubscribeConfirm,
	},
	{component: NotFound,}, // not lazy loaded
];

export default routes;
