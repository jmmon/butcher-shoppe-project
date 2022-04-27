import "./Home.css";

import AboutUs from "../../src/components/AboutUs/AboutUs";
import HomepageTitle from "../../src/components/HomepageTitle/HomepageTitle";
import ComingSoonCard from "../../src/components/ComingSoonCard/ComingSoonCard";
import LazyLoad from "react-lazyload";

function Home() {
	return (
		<>
			{/* seasonal image and title */}
			<HomepageTitle />

			<LazyLoad height={370} once offset={200}>
				<ComingSoonCard />
			</LazyLoad>

			<LazyLoad height={810} once offset={200}>
				<AboutUs />
			</LazyLoad>
		</>
	);
}

export default Home;
