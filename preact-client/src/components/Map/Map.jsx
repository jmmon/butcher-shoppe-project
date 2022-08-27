import React from "react";
import GoogleMapReact from 'google-map-react';

const defaultProps = {
	containerStyle: {
		width: "100%",
		height: "100%",
		border: "1px solid rgb(179, 179, 179)",
	},
	zoom: 14,
	center: { 
		lat: 48.916251, 
		lng: -117.782062,
	},
	mapOptions: {
		disableDefaultUI: true,
	},
	markerSize: "40", //px
};

function MapMarker() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 400 400"
			width={defaultProps.markerSize}
			height={defaultProps.markerSize}
			style={{position: "absolute", transform: "translateX(-50%) translateY(-100%)"}}
		>
			<path
				d="m189 0-5 1a134 134 0 0 0-96 204 20589 20589 0 0 1 112 195 11934 11934 0 0 0 112-195A133 133 0 0 0 189 0m19 84c35 6 53 47 34 77a50 50 0 0 1-86-5 50 50 0 0 1 52-72"
				fill="#e34c3c"
			/>
		</svg>
	);
}

export default function Map() {
	return (
		<div style={defaultProps.containerStyle}>
			<GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
				options={defaultProps.mapOptions}
      >
        <MapMarker
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
        />
      </GoogleMapReact>
		</div>
	);
}
