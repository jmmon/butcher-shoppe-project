import React from "react";
import "./MeetTheTeam.css";

import bg from "assets/images/image-1-113.jpg";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground.js";
import PageTitle from "components/PageTitle/PageTitle.js";
import AboutUs from "components/AboutUs/AboutUs.js";


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
