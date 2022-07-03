import React from "react";
import "./ComingSoon.css";
import Helmet from "react-helmet";

import HomepageTitle from "components/HomepageTitle/HomepageTitle";
import PageLayout from "components/PageLayout/PageLayout";

function ComingSoon() {
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
						content="Serving the tri-county area in northeast Washington, The Butcher Shoppe offers meat processing and mobile animal dispatch. Check out our newsletter!"
					/>
				</Helmet>
			}
			title={
				<HomepageTitle
					// simple={true}
					title="The Butcher Shoppe"
					subtitle={`Serving Northeast Washington State`}
				/>
			}
		></PageLayout>
	);
}

export default ComingSoon;
