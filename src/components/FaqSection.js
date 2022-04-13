import React, {useState} from 'react'
// import {scrollTo} from 'react-scroll-to';
import './FaqSection.css'
// import {Link} from 'react-router-dom'






const question = (question, answer, num) => {
	const q_class = `faq_question_${num}`;
	const a_class = `faq_answer_${num}`;
	return (
		<div className="faq_question__container" key={q_class}>
			<h4 className={q_class}>{question}</h4>
			<p className={a_class}>{answer}</p>
		</div>
	);
}

function FaqSection({sectionTitle, questionList}) {
	const [expand, setExpand] = useState(false);

	const handleExpand = () => {
		setExpand(!expand)
		if (expand) {
			let pos = 340;
			if (window.innerWidth <= 480) {
				pos = 80;
			} else if (window.innerWidth <= 960) {
				pos = 180;
			} else if (window.innerWidth <= 1340) {
				pos = 180
			}
			window.scrollTo(0, pos)
		}
		
	}

	// const answerShort = answer.slice(0, 100) + (answer.length >= 100 ? '...' : '');

	//let formattedQuestion = question.replace(`services`, `<Link to='/services'>services</Link>`)

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
					className={expand ? "faq-section__text expand " : "faq-section__text "}
				>
					{!expand ? question(questionList[0].question, questionList[0].answer, 1) : allQuestions}

					<div 
						className="expand-icon" 
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