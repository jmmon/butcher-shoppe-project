import React, { Suspense, lazy as Lazy } from "react";
import "./FooterSuspenseContainer.css";


function FooterSuspenseContainer({
	title,
	lazyPromise,
	loadingName,
	linkTarget,
	...options
}) {
	const Content = Lazy(() => lazyPromise);

	return (
		<div className="footer-box-container" id={linkTarget}>
			<h2 className="footer--heading">{title}</h2>

			<Suspense
				fallback={
					<div className="footer--loading-fallback">
						Loading {loadingName}...
					</div>
				}
			>
				<Content {...options} />
			</Suspense>
		</div>
	);
}

export default FooterSuspenseContainer;
