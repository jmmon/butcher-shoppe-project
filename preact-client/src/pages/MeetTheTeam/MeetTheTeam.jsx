import React from "react";
import "./MeetTheTeam.css";

import bgImage from "assets/images/image-1-113-cropped-55.jpg";
import PageTitle from "components/PageTitle/PageTitle";

import Card from "components/Card/Card";
import PageLayout from "components/PageLayout/PageLayout";
function MeetTheTeam() {
	return (
		<PageLayout
			helmet={
				<>
					<title>
						Meet The Team | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="Our team is proud to serve the greater Northport and Colville area with our mobile slaughter - and soon, meat processing."
					/>
				</>
			}
			title={
				<PageTitle
					title="Meet The Team"
					bgImage={bgImage}
				/>
			}
		>
			<Card
				title="The Team"
				paragraphs={[
					"The vision and talent behind The Butcher Shoppe can be found in the hearts of 2 Stevens County families that partnered up to build a business that would serve their local community. The need for meat processing has been increasing in our end of the county as more of our neighbors want to control their own food production. Both our Mobile Farm Kill Truck and The Butcher Shoppe are intended to provide service that will help you meet your goals as a grower and a buyer.",
					"Trent and Tamara Smith are longtime residents of Stevens County. They have had the pleasure of raising their 5 children, a few pigs and a couple dogs, in one of the most beautiful places on earth for almost 20 years now! They are motivated by a desire to serve their community through providing a service they actually enjoy! They believe that their business will bring new jobs and more industry to their small town that is full of potential. The future belongs to those who prepare for it and they want to build something that will sustain the following generations.",
				]}
			/>

			{/* <section className="team-container">
					<img src={topImage} className="team-img-left panel-shadow--dark" />
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

				</section> */}
		</PageLayout>
	);
}

export default MeetTheTeam;
