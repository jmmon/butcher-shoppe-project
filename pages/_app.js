// import App from 'next/app';
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
	//component prop is active 'page',
	return (
		<Layout>
			<Component {...pageProps} />
			{/* any props sent to <Component /> will be sent to the current routed 'page' */}
		</Layout>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
export default MyApp;
