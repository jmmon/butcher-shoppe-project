import "./ComingSoonCard.css";
import bg from "../assets/images/image-1-134.jpg";

function ComingSoonCard() {
	return (
		<section className="panel-container">
			<div className="panel--shadow card">
				<div
					className="homepage--card card inset-box-shadow"
					style={{
						background: `url(${bg}) 0% 30%/cover no-repeat`,
					}}
				>
					<h2 className="card-heading card-heading-shadow">
						Coming Soon To The Greater Northport Area
					</h2>

					<p className="text-wrapper-shadow text--large">
						We are working diligently to get our Northport Butcher
						Shoppe up and running! The mobile farmkill truck is
						ready to roll, and progress is being made on the meat
						processing plant in downtown Northport. Stay tuned to
						know when services are started!
					</p>
				</div>
			</div>
		</section>
	);
}

export default ComingSoonCard;
