import styles from "./FaqSection.module.css";

const Question = ({ question, answer }) => {
	return (
		<div className={styles.question_container}>
			<h3 className={styles.question}>
				<small className={styles.small}>q. </small>
				<i>{question}</i>
			</h3>

			<p
				className={styles.answer}
				dangerouslySetInnerHTML={{ __html: answer }}
			></p>
		</div>
	);
};

function FaqSection({ questionList }) {
	return (
		<div className={`${styles.container} flex-col gap-4 card--font-size`}>
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
