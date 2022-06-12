import React from "react";
import Button from "components/Button/Button";
import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";

import styles from "./NavBottomButtons.module.css";

function NavBottomButtons({ prev, next }) {
	return (
		<WhitePageBackground separate={true}>
			<div className={`flex-evenly-wrap ${styles.container}`}>
				<h4 className={`text-center ${styles.heading}`}>Helpful Links:</h4>
				<Button
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					url={prev.link}
				>
					{prev.title}
				</Button>

				<Button
					buttonStyle="btn--outline"
					buttonSize="btn--large"
					url={next.link}
				>
					{next.title}
				</Button>
			</div>
		</WhitePageBackground>
	);
}

export default NavBottomButtons;
