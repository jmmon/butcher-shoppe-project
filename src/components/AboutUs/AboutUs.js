//import "./AboutUs.css";

import bg from "assets/images/image-1-113.jpg";
import Card from "components/Card/Card";

function AboutUs() {
	return (
		<Card
			title="About Us"
			paragraphs={[
				"The vision and talent behind The Butcher Shoppe can be found in the hearts of 2 Stevens County families that partnered up to build a business that would serve their local community. The need for meat processing has been increasing in our end of the county as more of our neighbors want to control their own food production. Both our Mobile Farm Kill Truck and The Butcher Shoppe are intended to provide service that will help you meet your goals as a grower and a buyer.",
				"Trent and Tamara Smith are longtime residents of Stevens County. They have had the pleasure of raising their 5 children, a few pigs and a couple dogs, in one of the most beautiful places on earth for almost 20 years now! They are motivated by a desire to serve their community through providing a service they actually enjoy! They believe that their business will bring new jobs and more industry to their small town that is full of potential. The future belongs to those who prepare for it and they want to build something that will sustain the following generations.",
			]}
		/>
	);
}

export default AboutUs;
