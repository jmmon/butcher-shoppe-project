import "./Button.css";

import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";

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

	const props = {
		focusable: url !== "" ? 1 : -1,
		href: url,
	}

	return url.includes("#") ? (
		<a {...props} >
			{" "}{button}
		</a>
	) : (
		<LinkWithPreload {...props} >
			{" "}{button}
		</LinkWithPreload>
	);
}

export default Button;
