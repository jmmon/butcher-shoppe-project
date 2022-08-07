import React from "react";
import Styles from "./PageTitle.module.css"

function PageTitle({
	title = "",
	bgImage = null,
	position = "50% 50%",
	smaller = false,
	subtitle = null,
	children = null,
}) {
	return (
		<section className={`panel-shadow--dark ${Styles.container}`}>
			<div
				className={`${Styles.image} flex-col-acenter-jcenter inset-box-shadow--dark ${Styles.padding}`}
				style={{
					background: `url(${bgImage}) center center/cover no-repeat`,
					backgroundPosition: `${position}`,
				}}
			>
				<div className={`flex ${Styles.title_container}`}>
					<h1
						className={`flex-acenter-jcenter text-white text-center text-shadow--lg ${Styles.title} ${smaller === "true" || smaller === true ? Styles.smaller : ""}`}
					>
						{title}
					</h1>
					
					{/* no subtitle used in website? */}
					{subtitle && <p className={Styles.subtitle}>{subtitle}</p>}

					{children}
				</div>
			</div>
		</section>
	);
}

export default PageTitle;
