import React, {lazy} from 'react'

const ReactLazyPreload = (importStatement) => {
	const Component = lazy(importStatement);
	Component.preload = importStatement;
	return Component;
};
// const SubscribeConfirm = lazy(() =>
// 	import("pages/Newsletter/Confirm/SubscribeConfirm")
// );
// const UnsubscribeConfirm = lazy(() =>
// 	import("pages/Newsletter/Confirm/UnsubscribeConfirm")
// );
const Home = ReactLazyPreload(() => import("pages/Home/Home"));
const Services = ReactLazyPreload(() => import("pages/Services/Services"));
const Faq = ReactLazyPreload(() => import("pages/Faq/Faq"));
const Order = ReactLazyPreload(() => import("pages/Order/Order"));
const HowToOrder = ReactLazyPreload(() => import("pages/HowToOrder/HowToOrder"));
const Newsletter = ReactLazyPreload(() => import("pages/Newsletter/Newsletter"));
const Unsubscribe = ReactLazyPreload(() => import("pages/Newsletter/Unsubscribe"));
const MeetTheTeam = ReactLazyPreload(() => import("pages/MeetTheTeam/MeetTheTeam"));
const Membership = ReactLazyPreload(() => import("pages/Membership/Membership"));

const routes = [
	{path: "/", exact: true, component: Home,},

	{path: "/newsletter/subscribe", exact: true, component: Newsletter,},
	{path: "/newsletter/unsubscribe", exact: true, component: Unsubscribe,},
	{path: "/services", exact: true, component: Services,},
	{path: "/faq", exact: true, component: Faq,},
	{path: "/how-to-order", exact: true, component: HowToOrder,},
	{path: "/order", exact: true, component: Order,},
	{path: "/meet-the-team", exact: true, component: MeetTheTeam,},
	{path: "/membership", exact: true, component: Membership,},
	// {path: "/newsletter/subscribe/confirm/:confirmationId", exact: true, component: SubscribeConfirm,},
	// {path: "/newsletter/unsubscribe/confirm/:confirmationId", exact: true, component: UnsubscribeConfirm,},
];

export default routes;