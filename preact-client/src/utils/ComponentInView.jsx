//import React from "react";
//import { useInView } from "react-intersection-observer";

//const OPTIONS = {
	//root: null,
	//threshold: 0, // default
	//fallbackInView: true,
	//triggerOnce: true,
	//rootMargin: "100px",
//};

//export const ComponentInView = ({
	//marginPx,
	//triggerOnce,
	//trackVisibility,
	//children,
//}) => {
	//const options = {
		//...OPTIONS,
		//rootMargin: marginPx ?? OPTIONS.rootMargin,
		//triggerOnce: triggerOnce ?? OPTIONS.triggerOnce,
		//trackVisibility: trackVisibility ?? false,
	//};

	//const { ref, inView } = useInView(options);

	//// React.useEffect(() => {
	//// 	console.log({inView, marginPx: options.rootMargin, component: children?.type?.name, owner: children?._owner?.type?.name});
	//// }, [inView]);
	//return <div ref={ref}>{inView && children}</div>;
//};
