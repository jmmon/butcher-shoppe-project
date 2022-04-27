import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta charset="utf-8" />
				<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Web site created using create-react-app"
				/>
				<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
					rel="stylesheet"
				/>
				{/* <link href="https://css.gg/chevron-down.css" rel="stylesheet" /> */}
				{/* manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/ */}
				<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

				<script
					src="https://kit.fontawesome.com/47862eacfc.js"
					crossorigin="anonymous"
				></script>
				{/* Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`. */}
				<title>The Northport Butcher Shoppe</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
