import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
