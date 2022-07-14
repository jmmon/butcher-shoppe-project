import React from "react";
import { Link } from "wouter";
import Helmet from "react-helmet";
import PageTitle from "components/PageTitle/PageTitle";
import bgImage from "assets/images/image-1-156-cropped-55.jpg";
import PageLayout from "components/PageLayout/PageLayout";
import Card from "components/Card/Card";

function Membership() {
	return (
		<PageLayout
			helmet={
				<Helmet>
					<title>
						Membership | The Butcher Shoppe | Northport, WA
					</title>
					<meta
						name="description"
						content="Our Membership program is in the works; stay tuned to our newsletter for info!"
					/>
				</Helmet>
			}
			title={
				<PageTitle
					title="Membership"
					bgImage={bgImage}
				/>
			}
		>
			<section>
				<Card title="Membership Program" subtitle="Coming Soon">
					<p className="margin-2--bot">
						Subscribe to our{" "}
						<Link href="/newsletter/subscribe">newsletter</Link> to
						get the details when they are available.
					</p>
				</Card>
			</section>
		</PageLayout>
	);
}

export default Membership;
