// import "./Button.css";
// import {Link} from "wouter";
//import React from "react";
import * as React from 'preact';


function Button({
	children = null,
	type = null,
	onClick = null,
	url = "",
	className = "",
	...buttonProps
}) {
	// const button = (
	// 	<button
	// 		className={`${className} btn`}
	// 		onClick={onClick}
	// 		type={type}
	// 		tabIndex={url === "" ? 1 : -1}
	// 		{...buttonProps}
	// 	>
	// 		{children}
	// 	</button>
	// );

	return (
		<a href={url} focusable={url !== "" ? 1 : -1}>
			{" "}
			<button
				className={`${className} btn`}
				onClick={onClick}
				type={type}
				tabIndex={url === "" ? 1 : -1}
				{...buttonProps}
			>
				{children}
			</button>
		</a>
	);

	// return url.includes("#") ? (
	// 	<a href={url} focusable={url !== "" ? 1 : -1}>
	// 		{" "}{button}
	// 	</a>
	// ) : (
	// 	<Link href={url} focusable={url !== "" ? 1 : -1}>
	// 		{" "}{button}
	// 	</Link>
	// );
}

export default Button;
