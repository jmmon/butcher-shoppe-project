import React from "react";

import "./PageLayout.css";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";

function PageLayout({separate = false, helmet = null, title = null, children, bottomNav = null}) {
	return (
		<>
			{helmet}
			{title}
			<WhitePageBackground separate={separate}>
				<main>
				{children}
				</main>
			</WhitePageBackground>
			{bottomNav}
		</>
	);
}

export default PageLayout;
