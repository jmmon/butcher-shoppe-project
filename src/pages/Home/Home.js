import React from "react";
import "./Home.css";
import Helmet from "react-helmet";

import WhitePageBackground from "components/WhitePageBackground/WhitePageBackground";
import Card from "components/Card/Card";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import HomepageTitle from "components/HomepageTitle/HomepageTitle";



function Home() {
	return (
		<>
			<Helmet>
				<title>
					The Butcher Shoppe: Processing & Mobile Dispatch |
					Northport, WA
				</title>
				<meta
					name="description"
					content="Serving the tri-county area in northeast Washington, The Butcher Shoppe offers meat processing and mobile animal dispatch. Check out our newsletter!"
				/>
			</Helmet>

			<main>
				<HomepageTitle
					title="The Butcher Shoppe"
					subtitle="Serving Northeast Washington State"
				/>
				<WhitePageBackground separate={true}>
					<div className="grid--col-md">
						<Card
							title="Welcome to The Northport Butcher Shoppe!"
							paragraphs={[
								"Serving our local tri-county area, we provide local farmers with bringing their hard work to the dinner table!",
								"We provide farm kills for beef, hogs, goats, lamb and bison. This includes dispatch, evisceration and transport to our meat shop.",
								"We provide custom cut, cure, smoke and wrap.",
								"We process wild game, including deer, elk, moose and bear.",
								"No poultry!",
							]}
						/>

						<Card
							title="How It Works"
							paragraphs={[
								"Instead of loading and hauling your livestock to a kill floor, dispatch can be done swiftly and responsibly on your own farm.",
								"Once your carcass is in our coolers, we will skillfully cut, cure, smoke and wrap your order according to your specifications. This includes wild game too!",
								"By taking the time to craft each animal into the artistic expression that will best suit your table, we hope to offer each of our customers a satisfying feeling of abundance for having chosen us to process your livestock.",
								"Our truck and our facility are WSDA Inspected.",
								"We encourage you to take a look at our membership program as well.",
							]}
						/>
					</div>
				</WhitePageBackground>

				<NavBottomButtons
					prev={{ title: "Services", link: "/services" }}
					next={{ title: "How To Order", link: "/how-to-order" }}
				/>
			</main>
		</>
	);
}

export default Home;
