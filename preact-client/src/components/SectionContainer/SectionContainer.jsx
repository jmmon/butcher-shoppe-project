import Styles from "./SectionContainer.module.css";

export default function SectionContainer({ title, children }) {
	return (
		<div className={Styles.container}>
			<span className={`text-center text-white ${Styles.header}`}>{title}</span>
			<div className={Styles.content_outer}>
				<div className={`flex-col-jcenter gap-1 ${Styles.content_inner}`}>
					{children}
				</div>
			</div>
		</div>
	);
}
