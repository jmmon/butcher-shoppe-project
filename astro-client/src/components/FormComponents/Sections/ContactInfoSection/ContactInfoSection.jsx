// import React from "react";
import * as React from 'preact';

import SectionContainer from "../../../SectionContainer/SectionContainer";
import LabelForm from "../../Labels/LabelForm/LabelForm";
import InputForm from "../../InputForm/InputForm";
import PhoneInputForm from "../../InputForm/PhoneInputForm";

function ContactInfoSection() {
	return (
		<SectionContainer title="Contact Info">
			<div
				name="contact_info"
				className="form_section"
			>
				<div className="flex-30-wrap">
					<LabelForm required={true} title="Name" />

					<InputForm
						title="First"
						name="buyer.name.first"
						placeholder="First name"
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

				<div className="flex-30-wrap">
					<LabelForm required={true} title="Contact" />

					<PhoneInputForm
						title="Phone Number"
						name="buyer.phone_number"
						placeholder="10 digit phone number"
						small={true}
					/>

					<InputForm
						title="Email Address"
						name="buyer.email_address"
						placeholder="Email address"
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

				<div className="flex-30-wrap">
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
		</SectionContainer>
	);
}

export default ContactInfoSection;
