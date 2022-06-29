import PageTitle from "components/PageTitle/PageTitle";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import React from "react";
import "./Membership.css";
import bgImage from "assets/images/image-1-156.jpg";

function Membership() {
	return (<div>
		<PageTitle title="Membership" bgImage={bgImage} position="50% 60%" ></PageTitle>
		<WhitePageBackground>
			<div className="flex-jcenter-acenter">
		Membership

			</div>
		</WhitePageBackground>
	</div>);
}

export default Membership;
