import React from "react";
import { Helmet } from "react-helmet";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";

function PageLayout({
	separate = false,
	helmet = null,
	title = null,
	children,
	bottomNav = null,
}) {
	return (
		<>
		<Helmet>
			{helmet}
		</Helmet>
			<main>
				{title}
				<WhitePageBackground separate={separate}>
					{children}
				</WhitePageBackground>
				{bottomNav}
			</main>
		</>
	);
}

export default PageLayout;
