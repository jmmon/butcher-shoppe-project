//import "./AboutUs.css";

import bg from "../../assets/images/image-1-113.jpg";

function AboutUs() {
	return (
		<section className="panel-container">
			<div className="panel--shadow card">
				<div
					className="homepage--card card-shadow card inset-box-shadow"
					style={{
						background: `url(${bg}) center center/cover no-repeat`,
					}}
				>
					<h2 className="card-heading card-heading-shadow">
						About Us
					</h2>
					<div className="text-wrapper-shadow">
						<p>
							The vision and talent behind The Butcher Shoppe can
							be found in the hearts of 2 Stevens County families
							that partnered up to build a business that would
							serve their local community. The need for meat
							processing has been increasing in our end of the
							county as more of our neighbors want to control
							their own food production. Both our Mobile Farm Kill
							Truck and The Butcher Shoppe are intended to provide
							service that will help you meet your goals as a
							grower and a buyer. Instead of loading and hauling
							your livestock to a kill floor, dispatch can be done
							swiftly and responsibly on your own farm. Once your
							carcass is in our coolers, we will skillfully cut,
							cure, smoke and wrap your order according to your
							specifications. This includes wild game too! By
							taking the time to craft each animal into the
							artistic expression that will best suit your table,
							we hope to offer each of our customers a satisfying
							feeling of abundance for having chosen us to process
							your livestock. Our truck and our facility are WSDA
							Inspected. We encourage you to take a look at our
							membership program as well.
						</p>
						{/* </div>
					<div className="about-us--text-wrapper-shadow"> */}
						<br />
						<p>
							Trent and Tamara Smith are longtime residents of
							Stevens County. They have had the pleasure of
							raising their 5 children, a few pigs and a couple
							dogs, in one of the most beautiful places on earth
							for almost 20 years now! They are motivated by a
							desire to serve their community through providing a
							service they actually enjoy! They believe that their
							business will bring new jobs and more industry to
							their small town that is full of potential. The
							future belongs to those who prepare for it and they
							want to build something that will sustain the
							following generations.
						</p>
						{/* </div>
					<div className="about-us--text-wrapper-shadow"> */}
						<br />
						{/* <p>Peter Wagner and Tonye-Marie Casteneda… they need to write their part.
						</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
