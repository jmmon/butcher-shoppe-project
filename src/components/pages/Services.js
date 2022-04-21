import React from "react";
import Button from "../Button";
import PageTitle from "../PageTitle";
import "./Services.css";
import ServicesButchering from "../ServicesButchering";
import ServicesProcessing from "../ServicesProcessing";
import LazyLoad from "react-lazyload";

import bgTitle from "../../assets/images/image-1-2.jpg";
import bgServices from "../../assets/images/image-1-124.jpg";
import bgProcessing from "../../assets/images/image-1-2.jpg";

function Services() {
	return (
		<>
			<PageTitle
				heading="SERVICES"
				bgImage={bgTitle}
				position="50% 40%"
			/>
			<div className="panel-container">
				{/* <div className="title_container card white">
					<h1 className="page-title-h1">SERVICES</h1>
				</div> */}

				<div className="services-btns-container">
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url="#butchering-link"
					>
						Butchering
					</Button>
					<Button
						className="btns"
						buttonStyle="btn--outline"
						buttonSize="btn--large"
						url="#processing-link"
					>
						Processing
					</Button>
					{/* <a href="#butchering-link" className="btns">Butchering</a> */}
					{/* <a href="#processing-link" className="btns">Processing</a> */}
				</div>

				<div className="blerb-wrapper panel--shadow card">
					<p>
						Invite us to your farm with our mobile butchering
						service. Basic fees are outlined below. Need meat
						processing? We handle that too, at our store in downtown
						Northport!
					</p>
					<br />
					<p>
						We provide farm kills for beef, hogs, goats, lamb and
						bison. This includes dispatch, evisceration and
						transport to our meat shop.
					</p>
					<br />
					<p>We provide custom cut, cure, smoke and wrap.</p>
					<br />
					<p>
						We process wild game, including deer, elk, moose and
						bear.
					</p>
					<br />
					<ul>
						<li>No poultry!</li>
					</ul>
				</div>

				<LazyLoad height={486} once offset={200}>
					<ServicesButchering bg={bgServices} />
				</LazyLoad>

				<LazyLoad height={642} once offset={200}>
					<ServicesProcessing bg={bgProcessing} />
				</LazyLoad>
			</div>
		</>
	);
}

export default Services;
