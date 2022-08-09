import React from "react";
import Styles from "./Faq.module.css";
import bgImage from "assets/images/image-1-132-cropped-55.jpg";

import PageTitle from "layouts/PageTitle/PageTitle";
import PageLayout from "layouts/PageLayout/PageLayout";
import FaqGeneralQuestions from "components/FaqGeneralQuestions/FaqGeneralQuestions";
import { Helmet } from "react-helmet";

export default function Faq() {
	return (
		<PageLayout
			helmet={	
				<Helmet>
					<title>
						Frequently Asked Questions | The Butcher Shoppe |
						Northport, WA
					</title>
					<meta
						name="description"
						content="Have questions about our services? Here's some common Q's and A's."
					/>
				</Helmet>
			}
			title={
				<PageTitle
					title="FREQUENTLY ASKED QUESTIONS"
					bgImage={bgImage}
					smaller
				/>
			}
		>
			<div className={`flex-col-acenter ${Styles.container}`}>

					<div className={Styles.tabbed}>
						<input type="radio" id="faq-tab1" name="faq-css-tabs" defaultChecked />

						<ul className={Styles.labels_container}>
							<li className={Styles.label}>
								<label htmlFor="faq-tab1">General Questions</label>
							</li>
						</ul>
					
						<div className={Styles.tab_content}>
							<FaqGeneralQuestions />
						</div>
					</div>

			</div>
		</PageLayout>
	);
}