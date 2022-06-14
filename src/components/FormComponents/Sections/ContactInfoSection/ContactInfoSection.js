import React from "react";
import sectionStyles from "../FormSections.module.css";
import formStyles from "../../FormComponents.module.css";

import LabelForm from "../../Labels/LabelForm/LabelForm";

// import PhoneInput from "react-phone-number-input/input";
import InputForm from "../../InputForm/InputForm";
import PhoneInputForm from "../../InputForm/PhoneInputForm";

function ContactInfoSection() {
	return (
		<>
			<div
				name="contact_info"
				className={`${sectionStyles.section}`}
			>
				<div className={formStyles.field}>
					<LabelForm required={true} title="Name" />

					<InputForm
						title="First"
						name="buyer.name.first"
						placeholder="First name"
						// subtitle="testing"
						required={{
							required: {
								value: true,
								message: "Please enter your first name",
							},
							pattern: {
								value: /^[a-zA-Z]+$/,
								message: "Only letters for your name, please",
							},
						}}
						small={true}
					/>

					<InputForm
						title="Last"
						name="buyer.name.last"
						placeholder="Last name"
						required={{
							required: {
								value: true,
								message: "Please enter your last name",
							},
							pattern: {
								value: /^[a-zA-Z]+$/,
								message: "Only letters for your name, please",
							},
						}}
						small={true}
					/>
				</div>

				<div className={formStyles.field}>
					<LabelForm required={true} title="Contact" />

					{/* <div className="phone input-container">
						<label
							htmlFor="phone"
							className="phone scheduler--label"
						>
							Your Phone Number
						</label>
						<PhoneInput
							className="scheduler--input"
							id="phone"
							name="buyer.phone_number_component"
							country="US"
							required={true}
							placeholder="Enter your 10 digit phone number"
						/>
					</div> */}
					<PhoneInputForm
						title="Phone Number"
						name="buyer.phone_number"
						placeholder="10 digit phone number"
						small={true}
					/>

					{/* <InputForm
						title="Phone Number"
						name="buyer.phone_number"
						placeholder="10 digit phone number"
						required={{
							required: {
								value: true,
								message: "A phone number is required",
							},
							pattern: {
								value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
								message: "Please use a valid phone number",
							},
						}}
						small={true}
					/> */}
					<InputForm
						title="Email Address"
						name="buyer.email_address"
						placeholder="Enter your email address"
						required={{
							required: {
								value: true,
								message: "An email address is required",
							},
							pattern: {
								value: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
								message: "Please use a valid email address",
							},
						}}
						small={true}
					/>
				</div>

				<div className={formStyles.field}>
					<LabelForm required={true} title="Address" />

					<InputForm
						title="Line 1"
						name="buyer.address.line_1"
						placeholder="Address Line 1"
						required={{
							required: {
								value: true,
								message: "Please enter your address",
							},
						}}
						small={true}
					/>
					<InputForm
						title="Line 2"
						name="buyer.address.line_2"
						placeholder="Address Line 2"
						small={true}
					/>

					<InputForm
						title="City"
						name="buyer.address.city"
						required={{
							required: {
								value: true,
								message: "Please enter your city",
							},
						}}
						small={true}
					/>
					<InputForm
						title="State"
						name="buyer.address.state"
						required={{
							required: {
								value: true,
								message: "Please enter your state",
							},
						}}
						small={true}
					/>

					<InputForm
						title="Zip Code"
						name="buyer.address.zip_code"
						required={{
							required: {
								value: true,
								message: "Please enter your zip code",
							},
							pattern: {
								value: /^\d{5}(?:[-\s]\d{4})?$/,
								message: "Please enter a valid zip code",
							},
						}}
						small={true}
					/>
				</div>
			</div>
		</>
	);
}

export default ContactInfoSection;
