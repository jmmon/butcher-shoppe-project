import React from 'react'
import InputForm from '../../../FormComponents/InputForm/InputForm'
import OrderFormSectionSubheading from '../../../FormComponents/OrderFormSectionSubheading/OrderFormSectionSubheading'
import SectionContainer from '../../../SectionContainer/SectionContainer'

export default function OrderNotes() {
	return (
		<SectionContainer title="Order Notes">
			<OrderFormSectionSubheading>
				Any additional information or instructions that will help us with your order
			</OrderFormSectionSubheading>
			<div className="flex-jcenter">
				<InputForm 
					title="Order Notes"
					name="order_notes"
					placeholder="Additional information..."
					animalInfo={null}
					textarea={true} 
				/>
			</div>
		</SectionContainer>
	)
}