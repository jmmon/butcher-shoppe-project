import "./Button.css";
import {Link} from "wouter";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({
	children,
	type,
	onClick: handleClick = null,
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
	if (handleClick) console.log('onClick from button', handleClick);

	const button = (
		<button
			className={`${className} btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={handleClick}
			type={type}
			tabIndex={url === "" ? 1 : -1}
			{...buttonProps}
		>
			{children}
		</button>
	);

	return url.includes("#") ? (
		<a href={url} focusable={url !== "" ? 1 : -1} className="btn-mobile">
			{button}
		</a>
	) : (
		<Link href={url} focusable={url !== "" ? 1 : -1} className="btn-mobile">
			{button}
		</Link>
	);
}

export default Button;
