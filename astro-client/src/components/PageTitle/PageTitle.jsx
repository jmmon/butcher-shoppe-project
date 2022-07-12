//import React from "react";
import * as React from "preact";
import Styles from "./PageTitle.module.css";

function PageTitle({
	title = "Loading...",
	bgImage = null,
	position = "50% 50%",
	smaller = false,
	subtitle = null,
	children = null,
}) {
	return (
		<div className={`panel-shadow--dark ${Styles.container}`}>
			<section
				className={`${Styles.image} flex-col-acenter-jcenter ${Styles.title__height}  inset-box-shadow--dark `}
				style={{
					background: `url(${bgImage}) center center/cover no-repeat`,
					backgroundPosition: `${position}`,
				}}
			>
				<div className={Styles.title__container}>
					<h1
						className={`text-shadow--lg ${Styles.title__heading} ${
							smaller === "true" || smaller === true
								? Styles.smaller
								: ""
						}`}
					>
						{title}
					</h1>
					{subtitle && <p>{subtitle}</p>}
					{children}
				</div>
			</section>
		</div>
	);
}

export default PageTitle;
