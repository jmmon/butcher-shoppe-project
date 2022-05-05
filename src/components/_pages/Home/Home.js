import "./Home.css";

import AboutUs from "../../AboutUs/AboutUs";
import HomepageTitle from "../../HomepageTitle/HomepageTitle";
import ComingSoonCard from "../../ComingSoonCard/ComingSoonCard";
import LazyLoad from "react-lazyload";

function Home() {
	return (
		<>
			{/* seasonal image and title */}
			<HomepageTitle />
			<div className="home--content-container">
				<LazyLoad height={370} once offset={200}>
					<ComingSoonCard />
				</LazyLoad>

				<LazyLoad height={810} once offset={200}>
					<AboutUs />
				</LazyLoad>
			</div>
		</>
	);
}

export default Home;
