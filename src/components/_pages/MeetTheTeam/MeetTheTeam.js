import React from "react";
import "./MeetTheTeam.css";
import WhitePageBackground from "../../WhitePageBackground/WhitePageBackground.js";
import PageTitle from "../../PageTitle/PageTitle.js";
import AboutUs from "../../AboutUs/AboutUs.js";

import bg from "../../../assets/images/image-1-113.jpg";

function MeetTheTeam() {
	return (
		<>
			<PageTitle title="Meet The Team" bgImage={bg} position="50% 56%" />
			<WhitePageBackground>
				<AboutUs />
			</WhitePageBackground>
		</>
	);
}

export default MeetTheTeam;
