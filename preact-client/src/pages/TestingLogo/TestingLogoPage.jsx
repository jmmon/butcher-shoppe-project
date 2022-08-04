import React from 'react'

const LogoPngUrl =  "public/logo/truckside6.png";
// const LogoPngUrl =  "assets/logo/truckside6";


export default function TestingLogoPage() {
	return (
		<div>
			<div 
				style={{
					backgroundImage: `url(${LogoPngUrl})`,
					backgroundSize: `cover`,
					backgroundRepeat: `no-repeat`,
					backgroundPosition: "50% 50%",
					width: "100vw",
					height: "30vh",
				}}>
			</div>
		</div>
	)
}