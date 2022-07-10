import styles from "./SectionContainer.module.css";

export default function SectionContainer({ title, children }) {
	return (
		<div className={styles.container}>
			<span className={styles.header}>{title}</span>
			<div className={styles.content_outer}>
				<div className={styles.content_inner}>

					{children}
				</div>
			</div>
		</div>
	);
}
