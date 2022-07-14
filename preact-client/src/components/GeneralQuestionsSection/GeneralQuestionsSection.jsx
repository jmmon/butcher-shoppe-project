import React from 'react'
import FaqSection from 'components/FaqSection/FaqSection'
import SectionContainer from 'components/SectionContainer/SectionContainer'
import {generalFaq} from "../../assets/FaqQuestions";

export default function GeneralQuestionsSection() {
	return (
		<SectionContainer>
			<FaqSection questionList={generalFaq} />
		</SectionContainer>
	)
}