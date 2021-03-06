import React, { useEffect, useRef } from "react";

import "./Map.css";

const GoogleMap = ({ placeName, zoomLevel }) => {
	const googleMapRef = useRef();
	let googleMap;

	useEffect(() => {
		const googleMapScript = document.createElement("script");
		googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&libraries=places`;
		googleMapScript.async = true;
		window.document.body.appendChild(googleMapScript);
		googleMapScript.addEventListener("load", () => {
			getLatLng();
		});
	}, []);

	const createGoogleMap = (coordinates) => {
		googleMap = new window.google.maps.Map(googleMapRef.current, {
			zoom: zoomLevel,
			center: {
				lat: coordinates.lat(),
				lng: coordinates.lng(),
			},
			disableDefaultUI: true,
		});
	};

	const getLatLng = () => {
		let lat, lng;
		new window.google.maps.Geocoder().geocode(
			{ address: `${placeName}` },
			function (results, status) {
				if (status === window.google.maps.GeocoderStatus.OK) {
					createGoogleMap(results[0].geometry.location);
					lat = results[0].geometry.location.lat();
					lng = results[0].geometry.location.lng();
					new window.google.maps.Marker({
						position: { lat, lng },
						map: googleMap,
						title: `${placeName}`,
					});
				} else {
					alert(
						"Geocode was not successful for the following reason: " +
							status
					);
				}
			}
		);
	};
	return (
		<div className="footer--loading-fallback" ref={googleMapRef}>
			Loading Map...
		</div>
	);
};

export default GoogleMap;
