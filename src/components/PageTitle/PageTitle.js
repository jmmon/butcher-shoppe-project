import "./PageTitle.css";

function PageTitle({ heading, bgImage, position, smaller, subtitle }) {
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
					{subtitle && <h2 className="page-subtitle">{subtitle}</h2>}
				</div>
			</section>
		</div>
	);
}

export default PageTitle;
