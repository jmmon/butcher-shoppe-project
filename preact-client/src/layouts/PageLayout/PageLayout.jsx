import React from "react";

import WhitePageBackground from "layouts/WhitePageBackground/WhitePageBackground";
import { Helmet } from "react-helmet";
import { ComponentInView } from "utils/ComponentInView";
import CONSTANTS from "utils/CONSTANTS";

export default function PageLayout({
	separate = false,
	helmet = null,
	title = null,
	children,
	bottomNav = null,
}) {
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

				<ComponentInView marginPx={CONSTANTS.OFFSET.SECOND}>{bottomNav}</ComponentInView>
			</main>
		</>
	);
}
