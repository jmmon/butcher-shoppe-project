import React from "react";
import { Fade } from "react-slideshow-image";

import "./HomepageTitle.css";
import "react-slideshow-image/dist/styles.css";
import styles from "./HomepageTitle.module.css";

import Button from "components/Button/Button";
import slideImages from "./Images.js";

function HomepageTitle({ simple = false, title, subtitle }) {
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
					<div key={index} className={styles.image_wrapper}>
						<div
							className={`${styles.image} inset-box-shadow--dark`}
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

			<div className={`flex-jcenter-acenter ${styles.content_wrapper}`}>
				<div
					className={`flex-jcenter-acenter-wrap ${styles.content_container}`}
				>
					<h1 className={`${styles.title} text-shadow--lg`}>
						{title}
					</h1>
					<p className={`${styles.subtitle} text-shadow--sm`}>
						{subtitle}
					</p>
					
					<Button
						className={`${styles.hero_btn}`}
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url="/services"
					>
						Services
					</Button>

					<Button
						className={`${styles.hero_btn}`}
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

export default HomepageTitle;
