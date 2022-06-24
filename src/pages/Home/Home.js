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
					<div className="grid-row-gap-8 padding-2--bot">
						<Card
						// className="padding-1--vertical"
							title="Welcome to The Northport Butcher Shoppe!"
							paragraphs={[
								"Our mission is to serve our friends, neighbors and surrounding community through convenient humane mobile farm slaughter and custom butchery.",
								"Our services include the slaughtering and processing of beef, hogs, goats, lambs, bison and exotic animals like alpacas, lamas and emu.",
								"We even process wild game!",
								"Sorry, no poultry or rabbits!",
							]}
						/>
						<hr/>
						<Card
							title="How It Works"
							paragraphs={[
								"Instead of loading and hauling your animals to a kill floor, dispatch can be done swiftly and responsibly on your own farm. Let us know where your meat is being processed and we will deliver the carcass.",
								"If you decide to send the carcass back to our Shoppe, we will carefully take the time to craft each animal into the artistic expression reflected in your custom order form. We hope to offer each of you a satisfying feeling of abundance for having chosen us to process your livestock.",
								"Our truck and our facility are WSDA inspected.",
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
