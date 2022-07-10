// //import React from 'react'

import styles from "./Tabs.module.css";

function Tabs({tabs = []}) {
	const inputs = tabs.map((tabData, index) => <input type="radio" id={`tab${index+1}`} name="css-tabs" />);

	const labels = tabs.map((tabData, index) => <li className={styles.label}><label htmlFor={`tab${index+1}`}>{tabData.title}</label></li>);

	const panels = tabs.map(tabData => <div className={styles.tab_content}><h4>{tabData.title}</h4><p>{tabData.content}</p></div>);

	return (
		<div className={styles.container}>		
			{inputs}
			
			<ul className={styles.labels_container}>
				{labels}
			</ul>
			
			{panels}
		</div>
	);
}

export default Tabs






/* 

<Tabs 
	tabs={[
		{
			title: "Gangsta lipsum", 
			content: "Da bomb ipsizzle dolizzle sit amizzle, consectetuer adipiscing fo shizzle. Nullam yo velizzle, aliquet volutpizzle, fo shizzle yippiyo, for sure vizzle, arcu. Black eget fo shizzle. Sizzle erizzle. Rizzle at dolizzle dapibizzle turpis tempizzle izzle. Maurizzle crackalackin nibh et check out this. Cool check it out tortizzle. Break it down bling bling rhoncizzle my shizz. Fo hizzle rizzle platea boom shackalack. Gangsta dapibus. Owned tellus urna, pretizzle black, mattizzle ac, eleifend for sure, nunc. Owned suscipizzle. Integizzle sempizzle shiz sed purizzle."
		},
		{
			title: "Zombie lipsum", 
			content: "Zombie ipsum brains reversus ab cerebellum viral inferno, brein nam rick mend grimes malum cerveau cerebro. De carne cerebro lumbering animata cervello corpora quaeritis. Summus thalamus brains sit​​, morbo basal ganglia vel maleficia? De braaaiiiins apocalypsi gorger omero prefrontal cortex undead survivor fornix dictum mauris."
		},
		{
			title: "a third tab",
			content: "third content",
		},
	]}

/>

*/