import React from "react";
import { useInView } from "react-intersection-observer";
import Styles from "./Card.module.css";

const options = {
	root: null,
	rootMargin: "300px",
	threshold: 0, // default
	triggerOnce: true,
	fallbackInView: true,
};

function ImageHeading({ bg = null, title = "" }) {
	return (
		<div
			className={`${Styles.image_heading} padding-2--vertical`}
			style={
				bg && {
					background: `url(${bg}) center center/cover no-repeat`,
				}
			}
		>
			<h3
				className={`${bg && "text-white"} ${
					Styles.title
				} text-shadow--lg`}
			>
				{title}
			</h3>
		</div>
	);
}

export default function Card({
	className = "",
	title = "",
	subtitle = null,
	paragraphs = null,
	bg = null,
	children = null,
}) {
	const { ref, inView } = useInView(options);

	const content = paragraphs?.map((item) => (
		<p key={paragraphs.indexOf(item)}>{item}</p>
	));

	return (
		<div ref={ref}>
			{inView && (
				<section
					className={`${Styles.container} card--width  card--font-size ${className}`}
				>
					{bg && <ImageHeading bg={bg} title={title} />}
					<div
						className={`${Styles.card_content} card--content-width`}
					>
						{!bg && title && (
							<h2 className={`${Styles.title} text-center`}>
								{title}
							</h2>
						)}
						{subtitle && (
							<h3 className={`${Styles.subtitle} text-center`}>
								<i>{subtitle}</i>
							</h3>
						)}

						{content && content}
						{children}
					</div>
				</section>
			)}
		</div>
	);
}
