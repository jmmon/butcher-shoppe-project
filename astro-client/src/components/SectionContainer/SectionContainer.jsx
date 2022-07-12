//import React from "react";
import * as React from 'preact';
import Styles from "./SectionContainer.module.css";

export default function SectionContainer({ title, children }) {
	return (
		<div className={Styles.container}>
			<span className={Styles.header}>{title}</span>
			<div className={Styles.content_outer}>
				<div className={Styles.content_inner}>

					{children}
				</div>
			</div>
		</div>
	);
}
