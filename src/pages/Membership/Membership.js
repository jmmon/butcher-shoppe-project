import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import "./Membership.css";
import bgImage from "assets/images/image-1-156.jpg";
import PageLayout from "components/PageLayout/PageLayout";

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
			<div className="flex-jcenter-acenter">Membership</div>
		</PageLayout>
	);
}

export default Membership;
