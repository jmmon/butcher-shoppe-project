import React, {useState} from 'react'
// import {scrollTo} from 'react-scroll-to';
import './FaqSection.css'
// import {Link} from 'react-router-dom'






const question = (question, answer, num) => {
	const q_class = `faq_question_${num}`;
	const a_class = `faq_answer_${num}`;
	return (
		<div className="faq_question__container">
			<h4 className={q_class}><ul><li>{question}</li></ul></h4>
			<p className={a_class}>{answer}</p>
		</div>
	);
}

function FaqSection({sectionTitle, questionList}) {
	const [expand, setExpand] = useState(false);

	const handleExpand = () => setExpand(!expand)

	// const answerShort = answer.slice(0, 100) + (answer.length >= 100 ? '...' : '');

	//let formattedQuestion = question.replace(`services`, `<Link to='/services'>services</Link>`)
	console.log(questionList);

	let allQuestions = questionList.map(item => {
		let index = questionList.indexOf(item) + 1;
		return (
			question(item.question, item.answer, index)
			)
	});

	// let linkDestination = `link-${sectionTitle.split(" ")[0]}`;
	// let linkHref = `#${linkDestination}`;


	return (
		<section 
			className="faq-section" 
			// id={linkDestination}
		>
			<div className="faq-section__container">
				<h3 className="faq-section__title" >{sectionTitle}</h3>
				<div 
					className={expand ? "faq-section__text expand" : "faq-section__text"}
				>
					{!expand ? question(questionList[0].question, questionList[0].answer, 1) : allQuestions}

					<div 
						className="expand-icon" 
						// href={linkHref}
						onClick={handleExpand}
					>
						<i className={expand ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
						{expand ? "Less..." : "More..."}
					</div>
				</div>
				
			</div>
		</section>
	)
}

export default FaqSection