import React, { useState } from "react";
import Button from "./Button";

function ConfirmButton({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
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
			type={type}
			onClick={handleClick}
			buttonStyle={buttonStyle}
			buttonSize={buttonSize}
			url={url}
			{...buttonProps}
		>
			{confirmed ? "Are you sure?" : children}
		</Button>
	);
}

export default ConfirmButton;
