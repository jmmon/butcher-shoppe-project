import React from "react";
import { Link } from "wouter";
import Helmet from "react-helmet";
import "./Membership.css";
import PageTitle from "components/PageTitle/PageTitle";
import bgImage from "assets/images/image-1-156.jpg";
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
					position="50% 60%"
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
