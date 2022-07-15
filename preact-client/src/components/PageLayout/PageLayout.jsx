import React from "react";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";

export default function PageLayout({
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