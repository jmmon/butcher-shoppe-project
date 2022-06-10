import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import slideImages from "./Images.js";

function HomepageTitle3({ simple = false, title, subtitle, position }) {
	const properties = {
		duration: 8000,
		transitionDuration: 800,
		infinite: true,
		arrows: false,
		easing: "ease",
	};
	return (
		<div
			className="slide-container"
			style={{
				position: "relative",
				textAlign: "center",
				// color: "var(--offwhite)",
				color: "white",
				backgroundColor: "var(--footer-background-color)",
				// display: "flex",
			}}
		>
			<Fade {...properties}>
				{slideImages.map((slideImage, index) => (
					<div className="each-fade" key={index}>
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
						></div>
					</div>
				))}
			</Fade>
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
					zIndex: "2",
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

export default HomepageTitle3;
