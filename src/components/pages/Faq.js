import React from 'react'
import './Faq.css'
import FaqItem from '../FaqItem';
import PageTitle from '../PageTitle';

function Faq() {

	const items = [{question: `What services do you provide?`, answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim diam."}, {question: "question 2", answer: "Lacus sed viverra tellus in hac habitasse platea dictumst. Nisl nisi scelerisque eu ultrices vitae auctor. Eget dolor morbi non arcu risus quis. At tempor commodo ullamcorper a lacus vestibulum sed arcu. "}, {question: "question 3", answer: "Scelerisque purus semper eget duis. Ultricies integer quis auctor elit sed vulputate mi. Pellentesque elit eget gravida cum. Purus faucibus ornare suspendisse sed nisi lacus sed viverra. "}, {question: "question 4", answer: "Odio euismod lacinia at quis risus sed. Enim lobortis scelerisque fermentum dui faucibus in ornare. Aliquet risus feugiat in ante metus dictum at tempor. Eu turpis egestas pretium aenean pharetra magna. Orci porta non pulvinar neque laoreet. Viverra vitae congue eu consequat ac felis donec et odio. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. At in tellus integer feugiat scelerisque varius morbi enim nunc. Velit euismod in pellentesque massa placerat duis ultricies lacus sed."}];

	return (
		<>
		<PageTitle heading="FREQUENTLY ASKED QUESTIONS" />
		<div className="faq">
			{/* <h1 className="faq-title">Frequently Asked Questions</h1> */}
			<div className="faq-container">
				{items.map(content => <FaqItem question={content.question} answer={content.answer}/>)}
			</div>
		</div>
		</>
	)
}

export default Faq