import React from "react";
import "./PageTitle.css";

function PageTitle({ heading, bgImage, position, smaller }) {
	return (
		<div className="panel--shadow">
			<section
				className="page-title"
				style={{
					backgroundImage: `url(${bgImage})`,
					backgroundPosition: `${position || "50% 50%"}`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="page-title--container">
					<h1
						className={
							smaller === "true" || smaller === true
								? "page-title--heading smaller"
								: "page-title--heading"
						}
					>
						{heading}
					</h1>
				</div>
			</section>
		</div>
	);
}

export default PageTitle;
