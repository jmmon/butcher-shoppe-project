import React from "react";
import "pages/Faq/Faq.css";

const Question = ({ question, answer }) => {
	return (
		<div className="faq_question__container">
			<h3 className="faq_question">
				<small className="faq_small">q. </small>
				<i>{question}</i>
			</h3>

			<p
				className="faq_answer"
				dangerouslySetInnerHTML={{ __html: answer }}
			></p>
		</div>
	);
};

function FaqSection({ questionList }) {
	return (
		<div className="faq_section__text flex-col gap-4 card--font-size">
			{questionList.map((question, index) => (
				<Question
					question={question.question}
					answer={question.answer}
					key={index}
				/>
			))}
		</div>
	);
}

export default FaqSection;
