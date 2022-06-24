import React from "react";
import "./Card.css";

import ImageHeading from "components/ImageHeading/ImageHeading";

function Card({ className = null, title, paragraphs, bg = null, children }) {
	const content = paragraphs?.map((item) => (
		<p className="card--paragraph" key={paragraphs.indexOf(item)}>
			{item}
		</p>
	));
	return (
		//panel-shadow--dark removed from section
		<section className={`white card--width  card--font-size ${className}`}>
			{bg && <ImageHeading bg={bg} title={title} />}
			<div className="grid-row-gap-1-2 card--content-width ">
				{!bg && <h3 className="card--heading text-center">{title}</h3>}

				{content && content}
				{children}
			</div>
		</section>
	);
}

export default Card;
