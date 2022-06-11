import React from "react";
import "./ServicesButchering.css";
function ServicesButchering({ bg }) {
	const BasePrices = {
		beef: 160,
		hog: 120,
		lamb: 75,
		bison: 200,
	};

	const PriceData = [
		{
			title: "Beef",
			price: 160,
		},
		{
			title: "Hog",
			price: 120,
		},
		{
			title: "Lamb",
			price: 75,
		},
		{
			title: "Bison",
			price: 200,
		},
	];
	return (
		<div className="card-wrapper" id="butchering-link">
			<div className="panel-shadow--dark card">
				<div
					className="container inset-box-shadow card"
					style={{
						background: `url(${bg}) center center/cover no-repeat`,
					}}
				>
					<h2 className="card--heading text-shadow--lg text-white">
						Farm Kill
					</h2>
					<div className="card-content-wrapper">
						<div className="skinny-blerb text-wrapper-shadow">
							<p>
								On the scheduled day of your appointment, you
								will be asked to safely secure your animal(s)
								where dispatch can occur without harming other
								livestock. The designated animal(s) will be
								killed, hung, eviscerated, de-hided, de-headed
								and de-legged on sight.
							</p>
							<br />
							<p>
								You may choose to retain any or all of the
								contents removed from the animal. We will
								dispose of the rest. Then your animal(s) will be
								weighed and loaded into a refrigerated box and
								transported to the designated shop. Kill and
								leave is an option as well.
							</p>
						</div>
						<div className="butchering-grid--wrapper">
							<h4 className="text-center butchering-grid--title">
								Base Prices:
							</h4>
							<div className="butchering-grid">
								{PriceData.map((animalDataObject) => (
									<React.Fragment
										key={PriceData.indexOf(
											animalDataObject
										)}
									>
										<div className="butchering-grid--key">
											{animalDataObject.title}
										</div>
										<div className="butchering-grid--value">
											${animalDataObject.price}
										</div>
									</React.Fragment>
								))}
								{/* <div className="butchering-grid--key">Beef</div>
								<div className="butchering-grid--value">
									{BasePrices.beef}
								</div>
								<div className="butchering-grid-key">Hog</div>
								<div className="butchering-grid-value">
									{BasePrices.hog}
								</div>
								<div className="butchering-grid-key">Lamb</div>
								<div className="butchering-grid-value">
									{BasePrices.lamb}
								</div>
								<div className="butchering-grid-key">Bison</div>
								<div className="butchering-grid-value">
									{BasePrices.bison}
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesButchering;
