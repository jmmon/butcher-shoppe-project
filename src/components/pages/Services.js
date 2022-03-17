import React from 'react'
import { Button } from 'react-bootstrap'
import './Services.css'

function Services() {
	return (
		<>
			<div className="title_container">
				<h1 className="title">SERVICES</h1>
			</div>
			<div className="services-btns">
				{/* <Button 
				className="btns" 
				buttonStyle="btn--outline" 
				buttonSize="btn--large"
				url="#butchering-container"
				>
					Butchering
				</Button>

				<Button 
				className="btns" 
				buttonStyle="btn--outline" 
				buttonSize="btn--large"
				url="#processing-container"
				>
					Processing
				</Button> */}

				<a href="#butchering-container" className="btns">Butchering</a>
				<a href="#processing-container" className="btns">Processing</a>

			</div>
			<div id="butchering-container" display="none"></div>
			<div className="butchering container">
				<h2 className="butchering title">Butchering</h2>
				<p className="butchering blerb">This is a paragraph about butchering services. Might have a chart here with base prices for certain animals.</p>
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

			<div id="processing-container" display="none"></div>
			<div className="processing container">
				<h2 className="processing title">Processing</h2>
				<p className="processing blerb">This is a paragraph about processing services. Might have a chart here with base prices for certain animals.</p>
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
		</>
	)
}

export default Services