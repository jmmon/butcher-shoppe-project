import React from 'react'
import PageTitle from '../PageTitle'

function PageNotFound() {
	return (
		<>
		<PageTitle heading="Page Not Found!" />
		<div className="panel-container ">
			
			<div className="text-wrapper-shadow">
				
				<br />
				<br />
				<div className="center-text width-400">
					Oops, this page was not found! Try another page? Or report a broken link in the contact section! 
				</div>
				<br />
				<br />
				
			</div>

			</div>
		</>
	)
}

export default PageNotFound