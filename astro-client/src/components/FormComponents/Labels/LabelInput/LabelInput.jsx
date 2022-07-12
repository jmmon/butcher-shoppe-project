// import React from "react";
import * as React from 'preact';

import LabelForm from "../LabelForm/LabelForm";

import Styles from "../Labels.module.css";

function LabelInput({
	title,
	htmlFor,
	subtitle,
	costsExtra,
	small,
	required,
	children,
}) {
	return (
		<LabelForm
			title={title}
			htmlFor={htmlFor}
			required={required}
			small={small}
		>
			{costsExtra && (
				<>
					{" "}
					<span className={Styles.extra}>
						*
						<br />* Additional Fee - See Price List
					</span>
				</>
			)}

			{subtitle && (
				<>
					<br />
					<span className={Styles.subtitle}>
						{subtitle}
					</span>
				</>
			)}

			{children}
		</LabelForm>
	);
}

export default LabelInput;
