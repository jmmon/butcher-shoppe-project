// import React from "react";
import * as React from 'preact';

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import "./HomepageTitle.css";
import Styles from "./HomepageTitle.module.css";

import Button from "../Button/Button";
import Images from "./Images.js";

function HomepageTitle({ simple = false, title, subtitle }) {
	const properties = {
		duration: 8000,
		transitionDuration: 800,
		infinite: true,
		arrows: false,
		easing: "cubic-in",
		indicators: (i) => <div className={Styles.indicator}>{i + 1}</div>,
	};

	return (
		<section
			className={`${Styles.section} text-center text-white panel-shadow--dark`}
		>
			<Fade {...properties}>
				{Images.map((slideImage, index) => (
					<div key={index} className={Styles.image_wrapper}>
						<div
							className={`${Styles.image} inset-box-shadow--dark`}
							style={{
								backgroundImage: `url(${slideImage.url})`,
								backgroundSize: slideImage?.size ||`cover`,
								backgroundRepeat: `no-repeat`,
								backgroundPosition: slideImage.position || "50% 50%"
								,
							}}
						></div>
					</div>
				))}
			</Fade>

			<div className={`flex-jcenter-acenter ${Styles.content_wrapper}`}>
				<div
					className={`flex-jcenter-acenter-wrap ${Styles.content_container}`}
				>
					<h1 className={`${Styles.title} text-shadow--lg`}>
						{title}
					</h1>
					<p className={`${Styles.subtitle} text-shadow--sm`}>
						{subtitle}
					</p>
					
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
			</div>
		</section>
	);
}

export default HomepageTitle;
