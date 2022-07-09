import "./Button.css";
import {Link} from "wouter";

function Button({
	children,
	type,
	onClick = null,
	url = "",
	className = "",
	...buttonProps
}) {
	const button = (
		<button
			className={`${className} btn`}
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
			{" "}{button}
		</a>
	) : (
		<Link href={url} focusable={url !== "" ? 1 : -1}>
			{" "}{button}
		</Link>
	);
}

export default Button;
