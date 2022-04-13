import './Home.css'

import AboutUs from '../AboutUs'
import HomepageTitle from '../HomepageTitle'
import ComingSoonCard from '../ComingSoonCard'


function Home() {


	return (
		<>
			{/* seasonal image and title */}
			<HomepageTitle/> 
			<ComingSoonCard />
			<AboutUs/>
			{/* <AboutUs2 /> */}
			{/* intro text */}
			{/* <Blurb /> */}
			{/* <Cards /> */}
			{/* our story */}
		</>
	)
}

export default Home