import Styles from "./FaqSection.module.css";

const Question = ({ question, answer }) => {
	return (
		<div className={Styles.question_container}>
			<h3 className={Styles.question}>
				<small className={Styles.small}>q. </small>
				<i>{question}</i>
			</h3>

			<p
				className={Styles.answer}
				dangerouslySetInnerHTML={{ __html: answer }}
			></p>
		</div>
	);
};

function FaqSection({ questionList }) {
	return (
		<div className={`${Styles.container} flex-col gap-4 card--font-size`}>
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
