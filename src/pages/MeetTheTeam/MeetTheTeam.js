import React from "react";
import "./MeetTheTeam.css";

import bgImage from "assets/images/image-1-113.jpg";
import topImage from "assets/images/image-1-187.jpg";
import bottomImage from "assets/images/image-1-187.jpg";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground.js";
import PageTitle from "components/PageTitle/PageTitle.js";

import Card from "components/Card/Card";
function MeetTheTeam() {
	return (
		<>
			<PageTitle
				title="Meet The Team"
				bgImage={bgImage}
				position="50% 56%"
			/>
			<WhitePageBackground>
				<Card title="The Team" />

				<section className="team-container">
					<img src={topImage} className="team-img-left panel-shadow--dark" />
					{/* <div className="team-blerb"> */}
						<p className="team-paragraph">
							The vision and talent behind The Butcher Shoppe can
							be found in the hearts of 2 Stevens County families
							that partnered up to build a business that would
							serve their local community. The need for meat
							processing has been increasing in our end of the
							county as more of our neighbors want to control
							their own food production. Both our Mobile Farm Kill
							Truck and The Butcher Shoppe are intended to provide
							service that will help you meet your goals as a
							grower and a buyer.
						</p>
<br />
						<p className="team-paragraph">
							Trent and Tamara Smith are longtime residents of
							Stevens County. They have had the pleasure of
							raising their 5 children, a few pigs and a couple
							dogs, in one of the most beautiful places on earth
							for almost 20 years now! They are motivated by a
							desire to serve their community through providing a
							service they actually enjoy! They believe that their
							business will bring new jobs and more industry to
							their small town that is full of potential. The
							future belongs to those who prepare for it and they
							want to build something that will sustain the
							following generations.
						</p>
					{/* </div> */}
				</section>
				<section className="team-container">
					<img src={bottomImage} className="team-img-right panel-shadow--dark" />

					<p className="team-paragraph">
							The vision and talent behind The Butcher Shoppe can
							be found in the hearts of 2 Stevens County families
							that partnered up to build a business that would
							serve their local community. The need for meat
							processing has been increasing in our end of the
							county as more of our neighbors want to control
							their own food production. Both our Mobile Farm Kill
							Truck and The Butcher Shoppe are intended to provide
							service that will help you meet your goals as a
							grower and a buyer.
						</p>
<br />
						<p className="team-paragraph">
							Trent and Tamara Smith are longtime residents of
							Stevens County. They have had the pleasure of
							raising their 5 children, a few pigs and a couple
							dogs, in one of the most beautiful places on earth
							for almost 20 years now! They are motivated by a
							desire to serve their community through providing a
							service they actually enjoy! They believe that their
							business will bring new jobs and more industry to
							their small town that is full of potential. The
							future belongs to those who prepare for it and they
							want to build something that will sustain the
							following generations.
						</p>

				</section>
			</WhitePageBackground>
		</>
	);
}

export default MeetTheTeam;
