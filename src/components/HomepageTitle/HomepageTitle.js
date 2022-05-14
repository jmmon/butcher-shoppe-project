import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import bg from "../../assets/images/image-1-117.jpg";

function HomepageTitle({ simple = false, title, subtitle }) {
	return (
		<div className="panel--shadow">
			<div
				className="homepage-title inset-box-shadow"
				style={{
					background: `url(${bg}) center center/cover no-repeat`,
					backgroundPosition: `25% 40%`,
				}}
			>
				<h1 className="homepage-title--heading card-heading card-heading-shadow card-heading-margin">
					{title}
				</h1>

				<p className="homepage-title--subheading">{subtitle}</p>
				{!simple && (
					<div className="hero-btns">
						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
							url="/services"
						>
							Services
						</Button>

						<Button
							className="btns"
							buttonStyle="btn--outline"
							buttonSize="btn--large"
							url="/how-to-order"
						>
							How to Order
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default HomepageTitle;
