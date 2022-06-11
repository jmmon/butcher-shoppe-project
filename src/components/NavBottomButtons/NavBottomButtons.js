import React from "react";
import Button from "../Button/Button";
import WhitePageBackground from "../WhitePageBackground/WhitePageBackground";
import "./NavBottomButtons.css";

function NavBottomButtons({ prev, next }) {
	return (
		<WhitePageBackground separate={true}>
			<div className="nav-bottom-buttons white-background--container">
				<h4 className="text-center">Helpful Links:</h4>
				<div className="nav-bottom-container">
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

export default NavBottomButtons;
