import React from 'react'
import Button from '../Button'
import PageTitle from '../PageTitle'
import './Services.css'
import bgImage from "../../assets/images/image-1-2.jpg"

function Services() {
	return (
		<>
			
			<PageTitle heading="SERVICES" bgImage={bgImage}/>
			<div className="services--container">
				
				{/* <div className="title_container card white">
					<h1 className="page-title-h1">SERVICES</h1>
				</div> */}

				<div className="services-btns-container">

					<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" url='#butchering-link'>
					Butchering 
						
					</Button>
					<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" url='#processing-link'>
					Processing 
						
					</Button>
					{/* <a href="#butchering-link" className="btns">Butchering</a> */}
					{/* <a href="#processing-link" className="btns">Processing</a> */}
				</div>

				<div className="blerb-wrapper">
					<p>Invite us to your farm with our mobile butchering service. Basic fees are outlined below. Need meat processing? We handle that too, at our store in downtown Northport!</p>
					<br/>

					<p>We provide farm kills for beef, hogs, goats, lamb and bison. This includes dispatch, evisceration and transport to our meat shop.</p>
					<br/>
					<p>We provide custom cut, cure, smoke and wrap.</p>
					<br/>
					<p>We process wild game, including deer, elk, moose and bear.</p>
					<br/>
					<ul>

<li>No poultry!</li>
</ul>
					{/* <p>No poultry!</p> */}
				</div>


				<div 
					className="card-wrapper" 
					id="butchering-link"
				>
					<div  className="butchering container">
						{/* <h2 className="butchering title">Farm Kill</h2> */}
						<h2 className="card-heading card-heading-shadow">Farm Kill</h2>
						<div className="card-content-wrapper">
							
							<div className="card-blerb">
								<p>
									On the scheduled day of your appointment, you will be asked to safely secure your animal(s) where dispatch can occur without harming other livestock. The designated animal(s) will be killed, hung, eviscerated, de-hided, de-headed and de-legged on sight.
								</p> 
								<br /> 
								<p>
									You may choose to retain any or all of the contents removed from the animal. We will dispose of the rest. Then your animal(s) will be weighed and loaded into a refrigerated box and transported to the designated shop. Kill and leave is an option as well. 
								</p>
							</div>
							{/* <table className="butchering">
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
							</table> */}
						</div>
					</div>
		
				</div>


				<div className="card-wrapper" id="processing-link">
					<div className="processing container">
					<h2 className="card-heading card-heading-shadow">The Shoppe</h2>
						<div className="card-content-wrapper">
							<div className="card-blerb">
								<p>
									Once your animal is loaded into our cooler, we will contact you to clarify your processing specifications, this includes the hang time you desire. Once the animal has hung the agreed upon amount of time, it will enter our fabrication floor. Here we will proceed to cut and wrap to order. If value added items are required (cure/smoke/sausage/deli meat/etc), that will be done at that time as well. When the order is completed, it will be placed in a freezer and you will be notified for pick up and provide payment.
								</p>
								<br />
								<p>
									We will receive carcasses killed and dressed by someone else. They will be subject to rinsing before entering the cooler space.
								</p>
								<br />
								<p>
									Wild Game will have its own cooler unit, designated just for that.
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
		</>
	)
}

export default Services