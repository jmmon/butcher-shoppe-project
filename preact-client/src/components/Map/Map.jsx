import React from "react";
import GoogleMapReact from 'google-map-react';
import MapMarker from "assets/icons/MapMarker";

const defaultProps = {
	containerStyle: {
		width: "100%",
		height: "100%",
		border: "1px solid rgb(195, 195, 195)",
	},
	zoom: 14,
	center: { 
		lat: 48.916251, 
		lng: -117.782062,
	},
	mapOptions: {
		disableDefaultUI: true,
	}
};

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
