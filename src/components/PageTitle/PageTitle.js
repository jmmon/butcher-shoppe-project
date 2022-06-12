import React from "react";
import "./PageTitle.css";
import styles from "./PageTitle.module.css"

function PageTitle({
	title,
	bgImage,
	position = "50% 50%",
	smaller = false,
	subtitle = null,
	children = null,
}) {
	return (
		<div className={`panel-shadow--dark ${styles.container}`}>

		<section
			className={`${styles.image} flex-col-acenter-jcenter page-title--height  inset-box-shadow--dark `}
			style={{
				background: `url(${bgImage}) center center/cover no-repeat`,
				backgroundPosition: `${position}`,
			}}
		>
			<div className="page-title--container">
				<h1
					className={
						smaller === "true" || smaller === true
							? "text-shadow--lg page-title--heading smaller"
							: "text-shadow--lg page-title--heading"
					}
				>
					{title}
				</h1>
				{subtitle && <p className="page-subtitle">{subtitle}</p>}
				{children}
			</div>
		</section>
		
		</div>
	);
}

export default PageTitle;
