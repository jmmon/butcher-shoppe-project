import React from 'react'
import './PageTitle.css'


function PageTitle({heading, bgImage}) {
	return (
		<section 
			className="page-title"
			style={{ 
					backgroundImage:`url(${bgImage})`,
					backgroundPosition: "center",
					backgroundSize: "cover", 
					backgroundRepeat:"no-repeat", 
				}}
		>
			<div className="page-title--container" >
				<h1 className="page-title--heading">{heading}</h1>
			</div>
		
		</section>
		
	)
}

export default PageTitle