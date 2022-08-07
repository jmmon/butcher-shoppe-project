import React from "react";
import { Link } from "wouter";

import Styles from "./Navbar.module.css";

// import LogoComponent from "assets/logo/LogoComponent";
import LogoComponent from "assets/logo/LogoComponent_final";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";

function Navbar() {
	return (
		<nav className={`${Styles.wrapper} panel-shadow--light`}>
			<div className={Styles.navbar}>
				<div className={Styles.logo_bg_ellipse}></div>
				<Link href="/" className={Styles.home}>
					{/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}
					{" "}
					<LogoComponent
						className={Styles.logo}
						fills={{
							white: "#ccc",
							text: "#fff",
						}}
						styles={Styles}
					/>
					{/* <LogoComponent
						className={Styles.logo}
						fills={{
							white: "#ccc",
							text: "#fff",
						}}
						styles={Styles}
					/>
					<div className={Styles.logo_border}></div> */}
				</Link>

				<div className={Styles.menu_container}>
					{/* Hamburger icon*/}
					<div className={Styles.dropdown_button}>
						<i className={`fas fa-bars ${Styles.bars}`} />
					</div>

					<div className={Styles.menu}>
						<LinkWithPreload
							href="/services"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							Services
						</LinkWithPreload>
						<LinkWithPreload
							href="/how-to-order"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							How To Order
						</LinkWithPreload>
						<LinkWithPreload
							href="/order"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							Order
						</LinkWithPreload>
						<LinkWithPreload
							href="/meet-the-team"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							Meet The Team
						</LinkWithPreload>
						<LinkWithPreload
							href="/FAQ"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							FAQ
						</LinkWithPreload>
						<a
							href="#more-links"
							className={`${Styles.menu_item} ${Styles.links}`}
						>
							More...
						</a>
						<LinkWithPreload
							href="/newsletter/subscribe"
							className={`${Styles.links} ${Styles.newsletter_mobile}`}
						>
							Newsletter
						</LinkWithPreload>
					</div>
				</div>

				{/* Normal Newsletter Button	 */}
				<LinkWithPreload href="/newsletter/subscribe">
					<div
						className={`${Styles.newsletter_button} btn--outline btn--large`}
						tabIndex="0"
					>
						Newsletter
					</div>
				</LinkWithPreload>
			</div>
		</nav>
	);
}

export default Navbar;
