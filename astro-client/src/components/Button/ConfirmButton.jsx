//import React, { useState } from "react";
import {useState} from "preact/hooks";
import Button from "./Button";

function ConfirmButton({
	children,
	type,
	onClick,
	url = "",
	...buttonProps
}) {
	const [confirmed, setConfirmed] = useState(false);
	const handleClick = (e) => {
		if (confirmed) {
			onClick(e);
			setConfirmed(false);
		} else {
			setConfirmed(true);
		}
	};
	return (
		<Button
			{...buttonProps}
			type={type}
			onClick={handleClick}
			url={url}
		>
			{confirmed ? "Are you sure?" : children}
		</Button>
	);
}

export default ConfirmButton;
