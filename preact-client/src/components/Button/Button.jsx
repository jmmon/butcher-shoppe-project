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

	const wrapperLinkProps = {
		focusable: url !== "" ? 1 : -1,
		href: url,
	}

	return url.includes("#") ? (
		<a {...wrapperLinkProps} >
			{" "}{button}
		</a>
	) : (
		<LinkWithPreload {...wrapperLinkProps} >
			{" "}{button}
		</LinkWithPreload>
	);
}

export default Button;
