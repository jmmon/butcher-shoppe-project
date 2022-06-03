function ServicesProcessing({ bg }) {
	return (
		<div className="card-wrapper" id="processing-link">
			<div className="panel-shadow--dark card">
				<div
					className="container inset-box-shadow card"
					style={{
						background: `url(${bg}) center center/cover no-repeat`,
					}}
				>
					<h2 className="card--heading text-shadow--lg">
						The Shoppe
					</h2>

					<div className="card-content-wrapper">
						<div className="skinny-blerb text-wrapper-shadow">
							<p>
								Once your animal is loaded into our cooler, we
								will contact you to clarify your processing
								specifications, this includes the hang time you
								desire. Once the animal has hung the agreed upon
								amount of time, it will enter our fabrication
								floor. Here we will proceed to cut and wrap to
								order. If value added items are required
								(cure/smoke/sausage/deli meat/etc), that will be
								done at that time as well. When the order is
								completed, it will be placed in a freezer and
								you will be notified for pick up and provide
								payment.
							</p>
							<br />
							<p>
								We will receive carcasses killed and dressed by
								someone else. They will be subject to rinsing
								before entering the cooler space.
							</p>
							<br />
							<p>
								Wild Game will have its own cooler unit,
								designated just for that.
							</p>
						</div>

						{/* <table className="processing">
							<tr className="processing-row">
								<th>Animal</th>
								<th>Price</th>
							</tr>
							<tr className="cow">
								<td className="animal">Cow</td>
								<td className="price">$209</td>
							</tr>
							<tr className="pig">
								<td className="animal">Pig</td>
								<td className="price">$189</td>
							</tr>
							<tr className="goat">
								<td className="animal">Goat</td>
								<td className="price">$169</td>
							</tr>
						</table> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ServicesProcessing;
