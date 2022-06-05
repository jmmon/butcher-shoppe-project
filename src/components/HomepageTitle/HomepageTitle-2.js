import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import bgImage from "../../assets/images/image-1-117.jpg";
import PageTitle from "../PageTitle/PageTitle";
import { Slide } from "react-slideshow-image";

function HomepageTitle({ simple = false, title, subtitle, position }) {
	const slideImages = [
		"../../assets/images/image-1-117.jpg",
		"../../assets/images/image-1-117.jpg",
		"../../assets/images/image-1-117.jpg",
	];

	const properties = {
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		arrows: false,
	};
	return (
		<section className="panel-shadow--dark page-title homepage-title inset-box-shadow">
			<Slide {...properties}>
				{slideImages.map((each, index) => (
					<div
						key={index}
						className="each-slide page-title homepage-title inset-box-shadow"
						style={{
							background: `url(${each}) center center/cover no-repeat`,
							backgroundPosition: `${position || "25% 40%"}`,
						}}
					>
						testing
					</div>
				))}
			</Slide>
			<div
				className="homepage--text-container"
				// className="page-title homepage-title inset-box-shadow"
				// style={{
				// 	background: `url(${bgImage}) center center/cover no-repeat`,
				// 	backgroundPosition: `${position || "25% 40%"}`,
				// }}
			>
				<h1
					className={`white-font homepage-title--heading card--heading text-shadow--lg card--heading-margin`}
				>
					{title}
				</h1>

				<p className="white-font homepage-title--subtitle text-shadow--sm">
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
			</div>
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
