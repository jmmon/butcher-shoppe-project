import React, {useState} from 'react'
import './FaqItem.css'
// import {Link} from 'react-router-dom'

function FaqItem({question, answer}) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click)

	const answerShort = answer.slice(0, 100) + (answer.length >= 100 ? '...' : '');

	//let formattedQuestion = question.replace(`services`, `<Link to='/services'>services</Link>`)


	return (
		<div className="faq-item">
			<div className="faq-item__container">
				<h3 className="faq-item__title">{question}</h3>
				<div className={click ? "faq-item__text expand" : "faq-item__text"}>
					{click ? answer : answerShort}
				</div>
				<div className="expand-icon" onClick={handleClick}>
					<i className={click ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} />
				</div>
			</div>
		</div>
	)
}

export default FaqItem