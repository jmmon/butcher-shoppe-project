import React, { useState } from "react";
import "./Blurb.css";

function Blurb() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	const text =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

	const textShort = text.slice(0, 100) + (text.length >= 100 ? "..." : "");

	return (
		<div className="blurb">
			<div className="blurb__container">
				<h2 className="blurb__title">About Us</h2>
				<div className={click ? "blurb__text expand" : "blurb__text"}>
					{click ? text : textShort}
				</div>
				<div className="expand-icon" onClick={handleClick}>
					<i
						className={
							click ? "fa fa-chevron-up" : "fa fa-chevron-down"
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default Blurb;
