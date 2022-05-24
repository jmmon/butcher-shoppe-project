import { Suspense, lazy as Lazy } from "react";
import "./Home.css";
import Helmet from "react-helmet";

// import AboutUs from "../../AboutUs/AboutUs";
import HomepageTitle from "../../HomepageTitle/HomepageTitle";
// import ComingSoonCard from "../../ComingSoonCard/ComingSoonCard";
// import LazyLoad from "react-lazyload";

const ComingSoonCardPromise = import("../../ComingSoonCard/ComingSoonCard");
const ComingSoonCard = Lazy(() => ComingSoonCardPromise);

const AboutUsPromise = import("../../AboutUs/AboutUs");
const AboutUs = Lazy(() => AboutUsPromise);

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
				<div className="grid--column--gap">
					{/* <LazyLoad height={370} once offset={200}> */}
					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Map...
							</div>
						}
					>
						<ComingSoonCard />
					</Suspense>
					{/* </LazyLoad> */}
					<Suspense
						fallback={
							<div className="footer--loading-fallback">
								Loading Map...
							</div>
						}
					>
						<AboutUs />
					</Suspense>
					{/* <LazyLoad height={810} once offset={200}> */}
					{/* </LazyLoad> */}
				</div>
			</main>
		</>
	);
}

export default Home;
