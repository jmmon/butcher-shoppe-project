import React, { Suspense, lazy as Lazy } from "react";
import Styles from "./FooterSuspenseContainer.module.css";


function FooterSuspenseContainer({
	title,
	lazyPromise,
	loadingName,
	linkTarget,
	...options
}) {
	const Content = Lazy(() => lazyPromise);

	return (
		<div className={Styles.container} id={linkTarget}>
			<h2 className={`text-center ${Styles.heading}`}>{title}</h2>

			<Suspense
				fallback={
					<div className={`flex-jcenter-acenter text-white ${Styles.fallback}`}>
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
