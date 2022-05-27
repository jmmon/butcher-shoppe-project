import React from "react";
import { useFormContext } from "react-hook-form";

function FormErrors({ name }) {
	const {
		formState: { errors },
	} = useFormContext();
	return (
		<span className="form--validation-error">
			{" "}
			{errors?.[name] && `(${errors[name].message})`}
		</span>
	);
}

export default FormErrors;
