import React from "react";
import ImageHeading from "../ImageHeading/ImageHeading";
import "./Card.css";

function Card({ title, paragraphs, bg = null }) {
	const content = paragraphs?.map((item) => (
		<p className="card--paragraph" key={paragraphs.indexOf(item)}>
			{item}
		</p>
	));
	return (
		//panel-shadow--dark removed from section
		<section className="white card--width  card--font-size">
			{bg && <ImageHeading bg={bg} title={title} />}
			<div className="grid--col-sm card--content-width padding-md--horizontal">
				{!bg && <h3 className="card--heading center-text">{title}</h3>}

				{content && content}
			</div>
		</section>
	);
}

export default Card;
