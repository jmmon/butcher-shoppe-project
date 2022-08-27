import React from "react";
import { useInView } from "react-intersection-observer";

import WhitePageBackground from "layouts/WhitePageBackground/WhitePageBackground";
import { Helmet } from "react-helmet";

const options = {
	root: null,
	rootMargin: "200px",
	threshold: 0, // default
	triggerOnce: true,
	fallbackInView: true,
};

export default function PageLayout({
	separate = false,
	helmet = null,
	title = null,
	children,
	bottomNav = null,
}) {
	const { ref, inView } = useInView(options);
	return (
		<>
			{helmet === null ? (
				<Helmet>
					<title>
						The Butcher Shoppe: Mobile Slaughter Truck | Northport,
						WA
					</title>
					<meta
						name="description"
						content="Serving the tri-county area in northeast Washington, The Butcher Shoppe's Mobile Slaughter Truck brings our dispatch service to you! Check out our newsletter!"
					/>
				</Helmet>
			) : (
				helmet
			)}

			<main>
				{title}
				<WhitePageBackground separate={separate}>
					{children}
				</WhitePageBackground>
				<div ref={ref}>{inView && bottomNav}</div>
			</main>
		</>
	);
}
