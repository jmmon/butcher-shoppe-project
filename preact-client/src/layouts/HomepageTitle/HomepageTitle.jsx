import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./react-slideshow-image.css";
import Styles from "./HomepageTitle.module.css";

import Button from "components/Button/Button";
import Images from "./Images.js";

const properties = {
	duration: 8000,
	transitionDuration: 2000,
	infinite: true,
	arrows: false,
	easing: "cubic-in",
	// easing: "ease-in",
	// easing: "linear",
	// easing: "ease-out",
	// easing: "cubic-out",
	indicators: (i) => <div className="indicator">{i + 1}</div>,
};

function HomepageTitle({ title = "", subtitle = "", subtext = "" }) {
	return (
		<section
			className={`${Styles.section} text-center text-white panel-shadow--dark`}
		>
			<Fade {...properties}>
				{Images.map((slideImage, index) => (
					<div
						key={index}
						className={`${Styles.image} `}
						style={{
							backgroundImage: `url(${slideImage.url})`,
							backgroundSize: slideImage?.size ||`cover`,
							backgroundRepeat: `no-repeat`,
							backgroundPosition: slideImage.position || "50% 50%",
						}}
					></div>
				))}
			</Fade>

			<div className={`flex-col-jaround-acenter ${Styles.content_wrapper}`}>
				<div
					className={`flex-jcenter-wrap ${Styles.content_container}`}
				>
					<h1 className={`${Styles.title} text-shadow--lg`}>
						{title}
					</h1>

					<h2 className={`${Styles.subtitle} text-shadow--sm`}>
						{subtitle}
					</h2>
					
					<Button
						className={`${Styles.hero_btn} btn--outline btn--large`}
						url="/services"
					>
						Services
					</Button>

					<Button
						className={`${Styles.hero_btn} btn--outline btn--large`}
						url="/how-to-order"
					>
						How to Order
					</Button>
				</div>

				{/* <p className={`${Styles.subtext_wrapper} flex text-shadow--lg`}> */}
					<i className={`${Styles.subtext} flex text-shadow--lg`}>{subtext}</i>
				{/* </p> */}
			</div>
		</section>
	);
}

export default HomepageTitle;