import React, {useState} from 'react'
import './FaqItem.css'

function FaqItem({question, answer}) {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click)

	const answerShort = answer.slice(0, 100) + (answer.length >= 100 ? '...' : '');


	return (
		<div className="faq-item">
			<div className="faq-item__container">
				<p className="faq-item__title">{question}</p>
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