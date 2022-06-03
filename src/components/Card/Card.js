import React from "react";
import ImageHeading from "../ImageHeading/ImageHeading";
import "./Card.css";

function Card({ title, paragraphs, bg }) {
	const content = paragraphs?.map((item) => (
		<p key={paragraphs.indexOf(item)}>{item}</p>
	));
	return (
		//panel-shadow--dark removed from section
		<section className="white card--width  card--font-size">
			{bg && <ImageHeading bg={bg} title={title} />}
			<div className="">
				<div className="grid--col-sm card--content-width padding-lg">
					{!bg && <h3 className="center-text">{title}</h3>}

					{content && content}
				</div>
			</div>
		</section>
	);
}

export default Card;
