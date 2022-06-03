import React from "react";
import Button from "../Button/Button";
import WhitePageBackground from "../WhitePageBackground/WhitePageBackground";
import "./BottomNavButtons.css";

function BottomNavButtons({ prev, next }) {
	return (
		<WhitePageBackground separate={true}>
			<div className="bottomNavButtons white-background--container">
				<h4 className="center-text">Next:</h4>
				<div className="bottom-nav-container">
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url={prev.link}
					>
						{prev.title}
					</Button>

					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url={next.link}
					>
						{next.title}
					</Button>
				</div>
			</div>
		</WhitePageBackground>
	);
}

export default BottomNavButtons;
