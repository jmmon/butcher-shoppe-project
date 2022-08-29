import React from "react";
import { Link } from "wouter";
import Styles from "./Navbar.module.css";

import LogoComponent from "assets/logo/LogoComponent";
import LinkWithPreload from "components/LinkWithPreload/LinkWithPreload";

function Navbar() {
	return (
		<nav className={`flex-jcenter-acenter ${Styles.wrapper} panel-shadow--light`}>
			<div className={`flex-acenter ${Styles.navbar}`}>
				<Link href="/" className={`flex-acenter-jcenter ${Styles.home}`}>
					{/* The space below IS NECESSARY for the link to work! Remove it and the link disappears but the logo still shows */}
					{" "}
					<LogoComponent
						className={Styles.logo}
						styles={Styles}
					/>
					<div className={Styles.logo_bg_ellipse}></div>
				</Link>

				<div className={Styles.menu_container}>
					{/* Hamburger icon*/}
					<div className={Styles.dropdown_button}>
						<i className={`fas fa-bars ${Styles.bars}`} />
					</div>

					<div className={`flex-acenter ${Styles.menu}`}>
						<LinkWithPreload
							href="/services"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							Services
						</LinkWithPreload>
						<LinkWithPreload
							href="/how-to-order"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							How To Order
						</LinkWithPreload>
						<LinkWithPreload
							href="/order"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							Order
						</LinkWithPreload>
						<LinkWithPreload
							href="/meet-the-team"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							Meet The Team
						</LinkWithPreload>
						<LinkWithPreload
							href="/FAQ"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							FAQ
						</LinkWithPreload>
						<a
							href="#more-links"
							className={`${Styles.menu_item} flex-jcenter-acenter ${Styles.links}`}
						>
							More...
						</a>
						<LinkWithPreload
							href="/newsletter/subscribe"
							className={`flex-jcenter-acenter ${Styles.links} ${Styles.newsletter_mobile}`}
						>
							Newsletter
						</LinkWithPreload>
					</div>
				</div>

				{/* Large Screen Newsletter Button	 */}
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
