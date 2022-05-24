import React from "react";
import "./Faq.css";
import PageTitle from "../../PageTitle/PageTitle.js";

import bgImage from "../../../assets/images/image-1-132.jpg";
import FaqSection from "../../FaqSection/FaqSection";

function Faq() {
	const generalFAQ = [
		{
			question: "What services do you provide?",
			answer: "We slaughter and process farm animals in north-eastern Washington state. Our processing store is located in downtown Northport, WA, and our mobile farmkill truck serves the greater Northport and Colville area.",
		},
		{
			question: "Where are you located?",
			answer: "Right smack dab in the middle of Northport, Washington!",
		},
		{
			question: "Do you sell cuts of retail meat?",
			answer: "No. Our services are butchering and processing other people's farm animals only. We do not have a retail store or sources of meat to sell at retail.",
		},
		{
			question: "Do you raise animals for sale?",
			answer: "No, we only butcher and process farm animals from other farms.",
		},
		{
			question: "Do you process poultry?",
			answer: "Unfortunately, due to the time required we do not process any poultry.",
		},
	];

	const slaughteringFAQ = [
		{
			question: "What is the process for a farm kill look like?",
			answer: "After initial contact and filling out the processing form for the appropriate animal(s), we will need to set a date for the harvest.",
		},
		{
			question: "What happens after the farm kill?",
			answer: "From this point, it's up to you whether you would like us to process the meat for you, or whether you will process it yourself. ",
		},
		{
			question: "What do you need available on-site for the farm kill?",
			answer: "",
		},
		{
			question: "Do you raise animals for sale?",
			answer: "No, we only butcher and process farm animals from other farms.",
		},
		{
			question: "Do you process poultry?",
			answer: "Unfortunately, due to the time required we do not process any poultry.",
		},
	];

	return (
		<>
			<PageTitle
				heading="FREQUENTLY ASKED QUESTIONS"
				bgImage={bgImage}
				smaller="true"
			/>

			<div className="grid--column--gap">
				<div className="faq card panel--shadow">
					{/* <div className="faq-container"> */}
					<FaqSection
						sectionTitle={"General Questions"}
						questionList={generalFAQ}
					/>
					{/* <FaqSection 
					sectionTitle={"Slaughtering"} 
					questionList={slaughteringFAQ}
				/>
				<FaqSection 
					sectionTitle={"Processing"} 
					questionList={generalFAQ}
				/> */}
					{/* {items.map(content => <FaqItem question={content.question} answer={content.answer}/>)} */}
					{/* </div> */}
				</div>
			</div>
		</>
	);
}

export default Faq;
