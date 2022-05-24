import React from "react";
import PageTitle from "../../PageTitle/PageTitle";

function PageNotFound() {
	return (
		<>
			<PageTitle heading="Page Not Found!" />
			<div className="grid--column--gap">
				<div className="panel-container ">
					<div className="text-wrapper-shadow">
						<br />
						<br />
						<div className="center-text width-400">
							Oops, this page was not found! Try another page? Or
							report a broken link in the contact section!
						</div>
						<br />
						<br />
					</div>
				</div>
			</div>
		</>
	);
}

export default PageNotFound;
