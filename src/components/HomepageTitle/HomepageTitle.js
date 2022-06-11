import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import bgImage from "assets/images/image-1-117.jpg";

function HomepageTitle({
	simple = false,
	title,
	subtitle,
	position = "25% 40%",
}) {
	return (
			<section
				className="page-title homepage-title panel-shadow--dark inset-box-shadow"
				style={{
					background: `url(${bgImage}) center/cover no-repeat`,
					backgroundPosition: `${position}`,
					// backgroundBlendMode: "multiply",
					// opacity: "0.5",
					// backgroundImage: `url(${bgImage}), url(${Logo})`,
					// // backgroundOrigin: `center, center`,
					// backgroundPosition: `${position || "25% 40%"}, center`,
					// backgroundSize: `cover, cover`,
					// backgroundRepeat: `no-repeat, no-repeat`,
					// backgroundBlendMode: "multiply",
				}}
			>
				{/* <div
					className=""
					style={{
						height: "clamp(20vw, 20em, 60vw)",
						width: "100%",
						opacity: "0.5",
						fill: "white",
						position: "absolute",
						background: `url(${Logo}) center center/cover no-repeat`,
						backgroundPosition: "center center/cover",
						mixBlendMode: "multiply",
						zIndex: "999",
					}}
				></div> */}
				<h1
					className={`text-white homepage-title--heading card--heading text-shadow--lg card--heading-margin`}
				>
					{title}
				</h1>

				<p className="text-white homepage-title--subtitle text-shadow--sm">
					{subtitle}
				</p>
				{!simple && (
					<div className="hero-btns">
						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
							url="/services"
						>
							Services
						</Button>

						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
							url="/how-to-order"
						>
							How to Order
						</Button>
					</div>
				)}
		</section>
	);
}

// function HomepageTitle({ simple = false, title, subtitle, position }) {
// 	return (
// 		<PageTitle title={title} subtitle={subtitle}>
// 			<div className="hero-btns">
// 				<Button
// 					className="btns"
// 					buttonStyle="btn--outline"
// 					buttonSize="btn--large"
// 					url="/services"
// 				>
// 					Services
// 				</Button>

// 				<Button
// 					className="btns"
// 					buttonStyle="btn--outline"
// 					buttonSize="btn--large"
// 					url="/how-to-order"
// 				>
// 					How to Order
// 				</Button>
// 			</div>
// 		</PageTitle>
// 		// <section className="panel-shadow--dark">
// 		// 	<div
// 		// 		className="page-title homepage-title inset-box-shadow"
// 		// 		style={{
// 		// 			background: `url(${bgImage}) center center/cover no-repeat`,
// 		// 			backgroundPosition: `${position || "25% 40%"}`,
// 		// 		}}
// 		// 	>
// 		// 		<h1 className="homepage-title--heading card--heading text-shadow--lg card--heading-margin">
// 		// 			{title}
// 		// 		</h1>

// 		// 		<p className="homepage-title--subheading">{subtitle}</p>
// 		// 		{!simple && (

// 		// 		)}
// 		// 	</div>
// 		// </section>
// 	);
// }

export default HomepageTitle;
