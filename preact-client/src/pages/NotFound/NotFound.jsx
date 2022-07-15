import React from "react";
import PageTitle from "components/PageTitle/PageTitle";
import PageLayout from "components/PageLayout/PageLayout";
import Card from "components/Card/Card";
import bgImage from "assets/images/image-1-134-cropped-55.jpg";

function PageNotFound() {
	return (
		<PageLayout 
		helmet={
			<>
				<title>
					404 Page | The Butcher Shoppe | Northport, WA
				</title>
				<meta
					name="description"
					content="Oops, this page was not found! Try another page? ...Or if you think there is a problem, please contact us and let us know!)"
				/>
			</>
		} 
		title={
		<PageTitle position="50% 30%" bgImage={bgImage} title="Page Not Found!" />
	}
		>
			<Card title="Oops, this page was not found!" subtitle="Try another page?">
				<p className="margin-2--bot">...Or if you think there is a problem, please <a href="#contact">contact us</a> and let us know!</p>
			</Card>
		</PageLayout>
	);
}

export default PageNotFound;
