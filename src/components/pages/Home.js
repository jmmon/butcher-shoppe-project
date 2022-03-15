import '../../App.css'
import Blurb from '../Blurb'
import Cards from '../Cards'
import HeroSection from '../HeroSection'


function Home() {
	return (
		<>
			{/* seasonal image and title */}
			<HeroSection/> 
			{/* intro text */}
			<Blurb />
			<Cards />
			{/* our story */}
		</>
	)
}

export default Home