import React from "react";
import "./ComingSoon.css";
import HomepageTitle from "../../HomepageTitle/HomepageTitle";
import Footer from "../../Footer/Footer";
import Helmet from "react-helmet";

function ComingSoon() {
	return (
		<>
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
			<main>
				<HomepageTitle
					simple={true}
					title="The Butcher Shoppe"
					subtitle={`Site under construction. Coming Soon to Northeast Washington State!`}
				/>
			</main>
		</>
	);
}

export default ComingSoon;
