import React from "react";
import "./ImageHeading.css";

function ImageHeading({ bg, title }) {
	return (
		<div
			className="padding-2--horizontal padding-2--vertical inset-box-shadow"
			style={
				bg && {
					background: `url(${bg}) center center/cover no-repeat`,
				}
			}
		>
			<h3
				className={`${
					bg && "text-white"
				} card--heading text-shadow--lg`}
			>
				{title}
			</h3>
		</div>
	);
}

export default ImageHeading;
