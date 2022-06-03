import "./PageTitle.css";

function PageTitle({ title, bgImage, position, smaller, subtitle, children }) {
	return (
		<section className="panel-shadow--dark">
			<div
				className="page-title inset-box-shadow--dark"
				style={{
					background: `url(${bgImage}) center center/cover no-repeat`,
					backgroundPosition: `${position || "50% 50%"}`,
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
			</div>
		</section>
	);
}

export default PageTitle;
