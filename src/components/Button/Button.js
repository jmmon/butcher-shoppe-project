import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({
	children,
	type,
	onClick,
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

	const button = (
		<button
			className={`${className} btn ${checkButtonStyle} ${checkButtonSize}`}
			onClick={onClick}
			type={type}
			{...buttonProps}
		>
			{children}
		</button>
	);

	return url.includes("#") ? (
		<a href={url} className="btn-mobile">
			{button}
		</a>
	) : (
		<Link to={url} className="btn-mobile">
			{button}
		</Link>
	);
}

export default Button;
