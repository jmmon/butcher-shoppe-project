import React from "react";
import "./ImageHeading.css";

function ImageHeading({ bg, title }) {
	return (
		<div
			className="padding-md inset-box-shadow"
			style={
				bg && {
					background: `url(${bg}) center center/cover no-repeat`,
				}
			}
		>
			<h3 className="card--heading text-shadow--lg">{title}</h3>
		</div>
	);
}

export default ImageHeading;
