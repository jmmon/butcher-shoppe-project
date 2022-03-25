import React from 'react'
import './Services.css'

function Services() {
	return (
		<div className="services--container">
			
			<div className="title_container">
				<h1 className="page-title">SERVICES</h1>
			</div>

			<div className="services-btns-container">
				<a href="#butchering-link" className="btns">Butchering</a>
				<a href="#processing-link" className="btns">Processing</a>
			</div>

			<div className="blerb-wrapper">
				<p>Invite us to your farm with our mobile butchering service. Basic fees are outlined below. Need meat processing? We handle that too, at our store in downtown Northport!</p>
			</div>


			<div className="card-wrapper" id="butchering-link">
				<div  className="butchering container">
					<h2 className="butchering title">Butchering</h2>
					<div className="card-content-wrapper">
						
						<p className="card-blerb">This is a paragraph about butchering services. Might have a chart here with base prices for certain animals.</p>
						<div className="butchering table-wrapper">
							<table className="butchering">
								<tr className="butchering-row">
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
							</table>
						</div>
					</div>
				</div>
	
			</div>


			<div className="card-wrapper" id="processing-link">
				<div className="processing container">
					<h2 className="processing title">Processing</h2>
					<div className="card-content-wrapper">
						<p className="card-blerb">This is a paragraph about processing services. Might have a chart here with base prices for certain animals.</p>
						<div className="processing table-wrapper">
							<table className="processing">
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
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Services