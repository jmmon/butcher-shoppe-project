import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import "./Membership.css";
import bgImage from "assets/images/image-1-156.jpg";
import PageLayout from "components/PageLayout/PageLayout";
import Card from "components/Card/Card";
import { Link } from "wouter";

function Membership() {
	return (
		<PageLayout
			helmet={null}
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
