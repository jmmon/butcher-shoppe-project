import React from "react";

function OrderFormSectionSubheading({ children }) {
	return (
		<div className="order-form--section-subheading-container">
			<ul className="order-form--section-subheading">
				{/* <span class="dot" /> */}
				<li>{children}</li>
			</ul>
			<hr />
		</div>
	);
}

export default OrderFormSectionSubheading;
