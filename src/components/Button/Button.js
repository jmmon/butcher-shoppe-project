import "./Button.css";
import {Link} from "wouter";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({
	children,
	type,
	onClick = null,
	buttonStyle,
	buttonSize,
	url = "",
	center = null,
	className = "",
	...buttonProps
}) {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
	if (onClick) console.log('onClick from button', onClick);

	const button = (
		<button
			className={`${className} btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
			tabIndex={url === "" ? 1 : -1}
			{...buttonProps}
		>
			{children}
		</button>
	);

	return url.includes("#") ? (
		<a href={url} focusable={url !== "" ? 1 : -1}>
			{button}
		</a>
	) : (
		<Link href={url} focusable={url !== "" ? 1 : -1}>
			{button}
		</Link>
	);
}

export default Button;
