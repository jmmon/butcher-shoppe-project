// import React from "react";
import styles from "./PageTitle.module.css"

function PageTitle({
	title = "Loading...",
	bgImage = null,
	position = "50% 50%",
	smaller = false,
	subtitle = null,
	children = null,
}) {
	return (
		<div className={`panel-shadow--dark ${styles.container}`}>

		<section
			className={`${styles.image} flex-col-acenter-jcenter ${styles.title__height}  inset-box-shadow--dark `}
			style={{
				background: `url(${bgImage}) center center/cover no-repeat`,
				backgroundPosition: `${position}`,
			}}
		>
			<div className={styles.title__container}>
				<h1
					className={
						smaller === "true" || smaller === true
							? `text-shadow--lg ${styles.title__heading} ${styles.smaller}`
							: `text-shadow--lg ${styles.title__heading}`
					}
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
