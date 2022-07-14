import React from "react";

import Card from "components/Card/Card";
import PageLayout from "components/PageLayout/PageLayout";
import PageTitle from "components/PageTitle/PageTitle";
import { Helmet } from "react-helmet";

export default function Fallback() {
	return (
		<PageLayout
			helmet={
				<Helmet>
					<title>
						The Butcher Shoppe: Processing & Mobile Dispatch |
						Northport, WA
					</title>
					<meta
						name="description"
						content="Serving the tri-county area in northeast Washington, The Butcher Shoppe offers mobile slaughter and will soon provide meat processing. Check out our newsletter!"
					/>
				</Helmet>
			}
			title={<PageTitle title="Loading..." />}
		>
			<div className="grid-row-gap-8 padding-2--bot">
				<Card title="Thank you for your patience!">
					<div className="text-center">
						Loading the page as fast as we can!
					</div>
				</Card>
			</div>
		</PageLayout>
	);
}

