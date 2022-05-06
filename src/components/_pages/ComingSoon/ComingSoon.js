import React from "react";
import "./ComingSoon.css";
import HomepageTitle from "../../HomepageTitle/HomepageTitle";
import Footer from "../../Footer/Footer";

function ComingSoon() {
	return (
		<>
			<HomepageTitle
				simple={true}
				title="The Butcher Shoppe"
				subtitle={`Site under construction. Coming Soon to Northeast Washington State!`}
			/>
			<Footer simple={true} />
		</>
	);
}

export default ComingSoon;
