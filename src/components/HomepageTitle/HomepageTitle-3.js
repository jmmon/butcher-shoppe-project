import React from "react";
// import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import { Slide } from "react-slideshow-image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import styles from "./HomepageTitle.module.css";

import slideImages from "./Images.js";

function HomepageTitle3({ simple = false, title, subtitle, position }) {

	const properties = {
		duration: 8000,
		transitionDuration: 800,
		infinite: true,
		arrows: false,
		easing: "cubic-in",
		indicators: (i) => <div className="indicator">{i + 1}</div>,

	};
	return (
		<section
			className={`${styles.section} text-center text-white panel-shadow--dark`}
		>
			<Fade {...properties}>
				{slideImages.map((slideImage, index) => (
						<div key={index}
						className={`${styles.height} inset-box-shadow`}
							style={{
								backgroundImage: `url(${slideImage.url})`,
								backgroundSize: `cover`,
								backgroundRepeat: `no-repeat`,
								backgroundPosition: `${
									slideImage.position || "50% 50%"
								}`,
							}}
						></div>
				))}
			</Fade>

			<div
				className={`${styles.content_container} flex-col-center `}
			>
				<h1
					className={`${styles.title_font} text-shadow--lg`}
				>
					{title}
				</h1>
				<p
					className={`${styles.subtitle_font} text-shadow--sm`}
				>
					{subtitle}
				</p>
				<div
					className="hero_btns"
				>
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
		</section>
	);
}

export default HomepageTitle3;
