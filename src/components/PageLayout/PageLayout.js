import React from "react";

import "./PageLayout.css";

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
			{helmet}
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
