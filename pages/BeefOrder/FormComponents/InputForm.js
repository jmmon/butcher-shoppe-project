import React from "react";

const InputForm = ({ label, register, required }) => (
	<>
		<label>{label}</label>
		<input {...register(label, { required })} />
	</>
);

export default InputForm;
