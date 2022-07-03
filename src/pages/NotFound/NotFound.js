import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import PageLayout from "components/PageLayout/PageLayout";

function PageNotFound() {
	return (
		<PageLayout helmet={null} title={<PageTitle title="Page Not Found!" />}>
			<div className="grid-row-gap-4">
				<div className="card--width ">
					<div className="text-wrapper-shadow">
						<br />
						<br />
						<div className="text-center width-400">
							Oops, this page was not found! Try another page? Or
							report a broken link in the contact section!
						</div>
						<br />
						<br />
					</div>
				</div>
			</div>
		</PageLayout>
	);
}

export default PageNotFound;
