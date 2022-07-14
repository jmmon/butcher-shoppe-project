import React from "react";
import Helmet from "react-helmet";

import Card from "components/Card/Card";
import NavBottomButtons from "components/NavBottomButtons/NavBottomButtons";
import HomepageTitle from "components/HomepageTitle/HomepageTitle";
import PageLayout from "components/PageLayout/PageLayout";

export default function Home() {
	return (
		<PageLayout
			separate
			helmet={
				<Helmet>
					<title>
						The Butcher Shoppe: Processing & Mobile Dispatch |
						Northport, WA
					</title>
					<meta
						name="description"
						content="Serving the tri-county area in northeast Washington, The Butcher Shoppe offers mobile slaughter and will soon provide meat processing. Check out our newsletter!"
					/>
				</Helmet>
			}
			title={
				<HomepageTitle
					title="The Butcher Shoppe"
					subtitle="Serving Northeast Washington State"
				/>
			}
			bottomNav={
				<NavBottomButtons
					prev={{ title: "Services", link: "/services" }}
					next={{ title: "How To Order", link: "/how-to-order" }}
				/>
			}
		>
			<div className="grid-row-gap-8 padding-2--bot">
				<Card
					title="Welcome to The Northport Butcher Shoppe!"
					paragraphs={[
						"Our mission is to serve our friends, neighbors and surrounding community through convenient humane mobile farm slaughter and custom butchery.",
						"With our mobile slaughter truck, we provide animal slaughter conveniently on-site at your farm.",
					]}
				>
					<p>
						Our meat processing Shoppe in{" "}
						<a href="#map">Northport</a> is currently under
						construction. Once complete, we will be able to process
						your meat in-house, helping bring your favorite cuts
						from your pasture to your table!
					</p>
					<p>
						We slaughter all sorts of larger animals, including
						beef, hogs, goats, lambs, bison, and exotic animals like
						alpacas, lamas and emu.
					</p>
					<p>We even process wild game!</p>
					<p>Sorry, no poultry or rabbits!</p>
				</Card>
				<hr />
				<Card
					title="How It Works"
					paragraphs={[
						"Instead of loading and hauling your animals to a kill floor, dispatch can be done swiftly and responsibly on your own farm. Let us know where your meat is being processed and we will deliver the carcass.",
						"If you decide to send the carcass back to our Shoppe, we will carefully take the time to craft each animal into the artistic expression reflected in your custom order form. We hope to offer each of you a satisfying feeling of abundance for having chosen us to process your livestock.",
						"Our truck and our facility are WSDA inspected.",
					]}
				/>
			</div>
		</PageLayout>
	);
}
