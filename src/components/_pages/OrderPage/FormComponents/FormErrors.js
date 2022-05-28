import React from "react";
import { useFormContext } from "react-hook-form";

function FormErrors({ name }) {
	const {
		formState: { errors },
	} = useFormContext();

	return (
		<>
			{errors?.[name] && (
				<span role="alert" className="form--validation-error">
					{" "}
					{errors?.[name] && `(${errors[name].message})`}
				</span>
			)}
		</>
	);
}

export default FormErrors;
