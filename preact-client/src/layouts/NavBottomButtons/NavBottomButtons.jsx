import React from "react";
import Button from "components/Button/Button";
import WhitePageBackground from "layouts/WhitePageBackground/WhitePageBackground";

import Styles from "./NavBottomButtons.module.css";

function NavBottomButtons({ prev, next }) {
	return (
		<WhitePageBackground separate={true}>
			<div className={`flex-jevenly-acenter-wrap gap-1 ${Styles.container}`}>
				<h4 className={`text-center ${Styles.heading}`}>Helpful Links:</h4>
				<Button
					className="btn--outline btn--large"
					url={prev.link}
				>
					{prev.title}
				</Button>

				<Button
					className="btn--outline btn--large"
					url={next.link}
				>
					{next.title}
				</Button>
			</div>
		</WhitePageBackground>
	);
}

export default NavBottomButtons;
