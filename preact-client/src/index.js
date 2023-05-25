import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import { MatomoProvider, createInstance } from '@jonkoops/matomo-tracker-react';

// const instance = createInstance({
// 	urlBase: 'https://staging.thenorthportbutchershoppe.com',
// 	// urlBase: 'https://thenorthportbutchershoppe.com',
// 	siteId: 3,
// 	// userId: 'UID76903202', // default: 'undefined'
// 	// trackerUrl: 'https://LINK.TO.DOMAIN/tracking.php', // default: '${urlBase}/matomo.php'
// 	// srcUrl: 'https://LINK.TO.DOMAIN/tracking.js', // optional, default value: `${urlBase}matomo.js`
// 	// disabled: false, // default: false, "Makes all tracking calls no-ops if set to true."
// 	heartBeat: { // optional, enabled by default, accurately measure the time spent on each page
// 		active: true,
// 		// Change how long a tab needs to be active to be counted as viewed in seconds/
// 		// Requires a page to be actively viewed for 10 seconds for any heart beat request to be sent.
// 		seconds: 10, //default: 15
// 	},
// 	// linkTracking: false, //default: true,  outgoing links (facebook)
// 	configuration: { // default: {},
// 		//any valid matomo config, all optional
// 		disableCookies: true,
// 		setSecureCookies: true,
// 		setRequestMethod: 'POST',
// 	},
// })

// ReactDOM.render(
//     <MatomoProvider value={instance}>
//         <App />
//     </MatomoProvider>
// 		,
//     document.getElementById('root')
// );

ReactDOM.render(<App/>, document.getElementById('root'));
