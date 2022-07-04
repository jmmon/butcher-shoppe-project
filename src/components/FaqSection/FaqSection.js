import React from "react";
import "./FaqSection.css";

const Question = ({question, answer, index}) => {
	return (
		<div className="faq_question__container" key={index} >
			<ul className="faq_question">
				<li><h4><i>{question}</i></h4></li>
			</ul>
			
			<p className="faq_answer" dangerouslySetInnerHTML={{__html: answer}}></p>
		</div>
	);
};

function FaqSection({ sectionTitle, questionList }) {
	return (
		<section
			className="faq-section"
			// id={linkDestination}
		>
			<div className="faq-section__container">
				<h3 className="faq-section__title">{sectionTitle}</h3>

				<div className="faq-section__text panel-shadow--dark">
					{questionList.map((question, index) => <Question question={question.question} answer={question.answer} index={index} />)}

				</div>
			</div>
		</section>
	);
}

export default FaqSection;
