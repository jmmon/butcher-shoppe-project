import Button from "../../Button/Button";
import PageTitle from "../../PageTitle/PageTitle";
import "./Services.css";

import bgTitle from "../../../assets/images/image-1-2.jpg";
import bgServices from "../../../assets/images/image-1-124.jpg";
import bgProcessing from "../../../assets/images/image-1-2.jpg";

import { Suspense, lazy } from "react";
const ServicesButcheringPromise = import(
	"../../ServicesButchering/ServicesButchering"
);
const ServicesButchering = lazy(() => ServicesButcheringPromise);
const ServicesProcessingPromise = import(
	"../../ServicesProcessing/ServicesProcessing"
);
const ServicesProcessing = lazy(() => ServicesProcessingPromise);

function Services() {
	return (
		<>
			<PageTitle
				heading="SERVICES"
				bgImage={bgTitle}
				position="50% 40%"
			/>
			<div className="home--content-container">
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
						<br />
						<p>
							We cover the tri-county area with our mobile
							farmkill truck, and we process that meat in our
							store in Downtown Northport.
						</p>
						<br />
						<p>
							We provide farm kills for beef, hogs, goats, lamb
							and bison. This includes dispatch, evisceration and
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
						<br />
						<p>
							Basic kill fees and average meat processing fees are
							outlined below. Kill fees are paid in the field and
							processing fees are paid upon pick-up at the
							downtown Northport store.{" "}
							<a href="#map-link-target">(See map down below)</a>
						</p>
						{/* <br />
					<p>
						
					</p> */}
					</div>
					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Contact Box...
							</div>
						}
					>
						<ServicesButchering bg={bgServices} />
					</Suspense>
					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Contact Box...
							</div>
						}
					>
						<ServicesProcessing bg={bgProcessing} />
					</Suspense>
				</div>
			</div>
		</>
	);
}

export default Services;
