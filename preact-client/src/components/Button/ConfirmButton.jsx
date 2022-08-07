import React, { useState } from "react";
import Button from "./Button";

function ConfirmButton({
	onClick,
	confirmText = "Are you sure?",
	children,
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
			onClick={handleClick}
		>
			{confirmed ? confirmText : children}
		</Button>
	);
}

export default ConfirmButton;
