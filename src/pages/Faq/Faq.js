import React from "react";
import {Link} from "wouter";
import "./Faq.css";
import bgImage from "assets/images/image-1-132.jpg";

import PageTitle from "components/PageTitle/PageTitle.js";
import FaqSection from "components/FaqSection/FaqSection";
import PageLayout from "components/PageLayout/PageLayout";

function Faq() {
	const generalFAQ = [
		{
			question: "What services do you provide?",
			answer: `We currently provide a mobile slaughter service to the greater Northport and Colville area in north-eastern Washington state. Coming soon, we will also provide a meat processing service at our Shoppe, located in <a href="#map">downtown Northport, WA.<a> Subscribe to our <a href="/newsletter/subscribe">Newsletter<a> to be the first to know when our processing Shoppe will open!`,
		},
		{
			question: "Where are you located?",
			answer: 'Right smack dab in the middle of <a href="#map">Northport, Washington!<a>',
		},
		{
			question: "When will your processing Shoppe be open for business?",
			answer: 'Our Shoppe is currently under construction and our current best estimate for when it will be opened is this fall, 2022. Subscribe to our <a href="/newsletter/subscribe">Newsletter<a> to be notified when the Shoppe opens!'
		},
		{
			question: `Do you raise animals for sale?`,
			answer: `No, we only butcher and process farm animals from other farms. Check out our <a href="/services">Services page<a> for more information.`,
		},
		{
			question: "Do you process poultry?",
			answer: `Unfortunately, due to the time required we will not be processing any poultry. See our <a href="/services">Services page<a> for the list of animals we handle.`,
		},
	];

	// const slaughteringFAQ = [
	// 	{
	// 		question: "What is the process for a farm kill look like?",
	// 		answer: "After initial contact and filling out the processing form for the appropriate animal(s), we will need to set a date for the harvest.",
	// 	},
	// 	{
	// 		question: "What happens after the farm kill?",
	// 		answer: "From this point, it's up to you whether you would like us to process the meat for you, or whether you will process it yourself. ",
	// 	},
	// 	{
	// 		question: "What do you need available on-site for the farm kill?",
	// 		answer: "",
	// 	},
	// 	{
	// 		question: "Do you raise animals for sale?",
	// 		answer: "No, we only butcher and process farm animals from other farms.",
	// 	},
	// 	{
	// 		question: "Do you process poultry?",
	// 		answer: "Unfortunately, due to the time required we do not process any poultry.",
	// 	},
	// ];

	return (
		<PageLayout
			helmet={null}
			title={
				<PageTitle
					title="FREQUENTLY ASKED QUESTIONS"
					bgImage={bgImage}
					smaller="true"
				/>
			}
		>
			<FaqSection
				sectionTitle={"General Questions"}
				questionList={generalFAQ}
			/>
		</PageLayout>
	);
}

export default Faq;
