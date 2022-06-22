import React from "react";
import sectionStyles from "../FormSections.module.css";
import formStyles from "../../FormComponents.module.css";

import LabelForm from "../../Labels/LabelForm/LabelForm";

// import PhoneInput from "react-phone-number-input/input";
import InputForm from "../../InputForm/InputForm";
import PhoneInputForm from "../../InputForm/PhoneInputForm";
import SelectForm from "components/FormComponents/SelectForm/SelectForm";

function AnimalsBasic() {
	return (
		<>
			<div name="animals" className={`${sectionStyles.section}`}>
				<div className={formStyles.field}>
					<LabelForm required={true} title="Select Your Animals" />

					<SelectForm
						title="Type"
						name="type"
						options={[
							{
								label: `Beef`,
								value: "beef",
							},
							{
								label: `Hog`,
								value: "hog",
							},
							{
								label: "Lamb",
								value: "lamb",
							},
							{
								label: `Other Animal`,
								value: `other`,
							},
						]}
					/>

					<InputForm
						title="Count"
						name="count"
						number={{min: 1, default: 1}}
						small={true}
					/>

				
				</div>
			</div>
		</>
	);
}

export default AnimalsBasic;
