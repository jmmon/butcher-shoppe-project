import React from "react";
import "./PageTitle.css";

function PageTitle({
	title,
	bgImage,
	position = "50% 50%",
	smaller = false,
	subtitle = null,
	children = null,
}) {
	return (
		<section
			className="flex-col-center page-title--height panel-shadow--dark inset-box-shadow--dark"
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
	);
}

export default PageTitle;
