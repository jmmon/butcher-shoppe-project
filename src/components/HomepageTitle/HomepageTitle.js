import "../../App.css"; // eliminate?
import Button from "../Button/Button";
import "./HomepageTitle.css";
import bg from "../../assets/images/image-1-117.jpg";

function HomepageTitle() {
	return (
		<div className="panel--shadow">
			<div
				className="homepage-title inset-box-shadow"
				style={{
					background: `url(${bg}) center center/cover no-repeat`,
					backgroundPosition: `50% 40%`,
				}}
			>
				<h1 className="card-heading card-heading-shadow card-heading-margin">
					The Northport Butcher Shoppe
				</h1>

				<p>Butchering and Meat Processing services</p>
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
						url="/education"
					>
						Education
					</Button>
				</div>
			</div>
		</div>
	);
}

export default HomepageTitle;
