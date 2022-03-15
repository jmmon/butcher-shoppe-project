import React from 'react'
import GoogleMapReact from 'google-map-react'
import './Map.css'



import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'



const LocationPin = ({ text }) => {
	return (
		<div className="pin">
			<Icon icon={locationIcon} className="pin-icon"/>
			<p className="pin-text">{text}</p>
		</div>
	)
}



const Map = ({ location, zoomLevel }) => {
	
	return (
	
	<div className="map">
		<h2 className="map-h2">
			Come Visit Us At Our Store!
		</h2>
		<div className="google-map">
			{/* TEMPORARILY HAVE API KEY IN REACT SIDE, SHOULD BE SERVER SIDE */}
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyDBZLjSOroueTkfoVGZqLBFORmniEid2As'}}
				defaultCenter={location}
				defaultZoom={zoomLevel}
				disableDefaultUI={true}
			>
				<LocationPin
					lat={location.lat}
					lng={location.lng}
					text={location.address}
				/>
			</GoogleMapReact>
		</div>
	</div>
	
)}

export default Map