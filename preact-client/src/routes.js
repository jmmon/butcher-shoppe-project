import React, {lazy} from 'react'

const ReactLazyPreload = (importStatement) => {
	const Component = lazy(importStatement);
	Component.preload = importStatement;
	return Component;
};

const Services = ReactLazyPreload(() => import("pages/Services/Services"));
const Faq = ReactLazyPreload(() => import("pages/Faq/Faq"));
const Order = ReactLazyPreload(() => import("pages/Order/Order"));
const HowToOrder = ReactLazyPreload(() => import("pages/HowToOrder/HowToOrder"));
const Newsletter = ReactLazyPreload(() => import("pages/Newsletter/Newsletter"));
const Unsubscribe = ReactLazyPreload(() => import("pages/Newsletter/Unsubscribe"));
const MeetTheTeam = ReactLazyPreload(() => import("pages/MeetTheTeam/MeetTheTeam"));
const Membership = ReactLazyPreload(() => import("pages/Membership/Membership"));

const routes = [
	{path: "/newsletter/subscribe", exact: true, component: Newsletter,},
	{path: "/newsletter/unsubscribe", exact: true, component: Unsubscribe,},
	// {path: "/newsletter/subscribe/confirm/:id", exact: true, component: SubscribeConfirm, params: {isSubscribePage: true}},
	// {path: "/newsletter/unsubscribe/confirm/:id", exact: true, component: SubscribeConfirm,},
	{path: "/services", exact: true, component: Services,},
	{path: "/faq", exact: true, component: Faq,},
	{path: "/how-to-order", exact: true, component: HowToOrder,},
	{path: "/order", exact: true, component: Order,},
	{path: "/meet-the-team", exact: true, component: MeetTheTeam,},
	{path: "/membership", exact: true, component: Membership,},
];

export default routes;