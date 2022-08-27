import React from "react";

const defaultSize = "40";
const defaultStyles = (size) => ({
	width: size,
	height: size,
});

export default function MapMarker({ size = null }) {
	// combine our logo styles with any incoming styles

	const Styles = {
		...defaultStyles(size ?? defaultSize),
	};

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 400 400"
			width={Styles.width}
			height={Styles.height}
			style={{position: "absolute", transform: "translateX(-50%) translateY(-100%)"}}
		>
			<path
				d="m189 0-5 1a134 134 0 0 0-96 204 20589 20589 0 0 1 112 195 11934 11934 0 0 0 112-195A133 133 0 0 0 189 0m19 84c35 6 53 47 34 77a50 50 0 0 1-86-5 50 50 0 0 1 52-72"
				fill="#e34c3c"
			/>
		</svg>
	);
}
