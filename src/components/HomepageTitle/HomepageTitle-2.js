import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slideImages from "./Images.js";

function HomepageTitle2({ simple = false, title, subtitle, position }) {

	const properties = {
		duration: 8000,
		transitionDuration: 800,
		infinite: true,
		arrows: false,
		easing: "cubic-in",
		indicators: (i) => <div className="indicator">{i + 1}</div>,

	};
	return (
		<div
			className="slide-container"
			style={{
				position: "relative",
				textAlign: "center",
				color: "white",
			}}
		>
			<Slide {...properties}>
				{slideImages.map((slideImage, index) => (
					<div
						className="each-slide"
						key={index}
						// style={{ height: "60vh" }}
					>
						<div
							style={{
								height: "60vh",
								backgroundImage: `url(${slideImage.url})`,
								backgroundSize: `cover`,
								backgroundRepeat: `no-repeat`,
								backgroundPosition: `${
									slideImage.position || "50% 50%"
								}`,
							}}
						>
							{/* <span>example text</span> */}
						</div>
					</div>
				))}
			</Slide>
			<div
				style={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: "0",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					// fontSize: "2em",
				}}
			>
				<h1 className="homepage-title--heading text-shadow--lg">
					{title}
				</h1>
				<p className="homepage-title--subtitle text-shadow--sm">
					{subtitle}
				</p>
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
			</div>
		</div>
	);
}

export default HomepageTitle2;
