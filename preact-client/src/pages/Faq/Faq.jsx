import React from "react";
import Styles from "./Faq.module.css";
import bgImage from "assets/images/image-1-132-cropped-55.jpg";
//height 412.567px
//width 1374.76px

import PageTitle from "components/PageTitle/PageTitle";
import PageLayout from "components/PageLayout/PageLayout";
import GeneralQuestionsSection from "components/GeneralQuestionsSection/GeneralQuestionsSection";

function Faq() {
	

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
			helmet={
				<>
					<title>
						Frequently Asked Questions | The Butcher Shoppe |
						Northport, WA
					</title>
					<meta
						name="description"
						content="Have questions about our services? Here's some common Q's and A's."
					/>
				</>
			}
			title={
				<PageTitle
					title="FREQUENTLY ASKED QUESTIONS"
					bgImage={bgImage}
					smaller="true"
				/>
			}
		>
			<div className={`flex-col-acenter ${Styles.container}`}>

					<div className={Styles.tabbed}>
						<input type="radio" id="faq-tab1" name="faq-css-tabs" checked />

						<ul className={Styles.labels_container}>
							<li className={Styles.label}>
								<label for="faq-tab1">General Questions</label>
							</li>
						</ul>
					
						<div className={Styles.tab_content}>
							<GeneralQuestionsSection />
						</div>
					</div>

			</div>
		</PageLayout>
	);
}

export default Faq;
