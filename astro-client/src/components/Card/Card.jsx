//import React from "react";
import * as React from 'preact';

import "./Card.css";

function ImageHeading({ bg = null, title = "" }) {
	return (
		<div
			className="image-heading--margin-bottom padding-2--horizontal padding-2--vertical inset-box-shadow"
			style={
				bg && {
					background: `url(${bg}) center center/cover no-repeat`,
				}
			}
		>
			<h3 className={`${bg && "text-white"} card--title text-shadow--lg`}>
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
	const content = paragraphs?.map((item) => (
		<p key={paragraphs.indexOf(item)}>{item}</p>
	));

	return (
		//panel-shadow--dark removed from section
		<section className={`white card--width  card--font-size ${className}`}>
			{bg && <ImageHeading bg={bg} title={title} />}
			<div className="grid-row-gap-1-2 card--content-width ">
				{!bg && title && (
					<h2 className="card--title text-center">{title}</h2>
				)}
				{subtitle && (
					<h3 className="card--subtitle text-center">
						<i>{subtitle}</i>
					</h3>
				)}

				{content && content}
				{children}
			</div>
		</section>
	);
}
