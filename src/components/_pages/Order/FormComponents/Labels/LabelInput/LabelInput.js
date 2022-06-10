import React from "react";
import LabelForm from "../LabelForm/LabelForm";
import styles from "./LabelInput.module.css";
import labelStyles from "../Labels.module.css";

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
					<span className={styles.form_special_extra}>
						*
						<br />* Additional Fee - See Price List
					</span>
				</>
			)}

			{subtitle && (
				<>
					<br />
					<span className={labelStyles.order_form__label_subtext}>
						{subtitle}
					</span>
				</>
			)}

			{children}
		</LabelForm>
	);
}

export default LabelInput;
