import React from 'react'
import '../App.css'
import Button from './Button'
import './HomepageTitle.css'

function HomepageTitle() {
	return (
		<div className='homepage-title'>
			{/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
			<h1 className='card-heading card-heading-shadow card-heading-margin'>The Northport Butcher Shoppe</h1>

			<p>Butchering and Meat Processing services</p>
			<div className="hero-btns">
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" url='/services'>
					Services
				</Button>
				<Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" url='/education'>
					Education 
					{/* <i className="far fa-play-circle"/> */}
				</Button>
			</div>

		</div>
	)
}

export default HomepageTitle