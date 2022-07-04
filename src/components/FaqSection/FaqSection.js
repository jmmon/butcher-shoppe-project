import React from "react";
import "pages/Faq/Faq.css";

const Question = ({ question, answer, index }) => {
	return (
		<div className="faq_question__container" key={index}>
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
		<div className="faq_section__text flex-col gap-4">
			{questionList.map((question, index) => (
				<Question
					question={question.question}
					answer={question.answer}
					index={index}
				/>
			))}
		</div>
	);
}

export default FaqSection;
