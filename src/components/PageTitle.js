import React from 'react'
import './PageTitle.css'

function PageTitle({heading}) {
	return (
		<section className="page-title">
		
			<div className="page-title--container">
				<h1 className="page-title--heading">{heading}</h1>
			</div>
		
		</section>
		
	)
}

export default PageTitle