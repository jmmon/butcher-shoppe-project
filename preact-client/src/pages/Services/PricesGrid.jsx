import React from 'react';
import Styles from "./PricesGrid.module.css";
import TelLink from "components/TelLink/TelLink";

export default function PricesGrid({PRICES}) {
	return (
		<div className={`${Styles.prices_container} panel-shadow--light`}>
			{/* minimum charge row */}
			<PricesItem
				content="Minimum Charge"
				styles="twoColumn"
			/>
			<PricesItem
				content={PRICES.minimum}
				styles="twoColumn"
			/>
			<span className={Styles.prices_spacer}></span>

			{/* Headers */}
			<PricesHeaderRow content={['Animal', 'Base Price', 'To Haul Away Guts']} />
			<span className={Styles.prices_spacer}></span>

			{/* Animals & Prices */}
			{PRICES.animals.map((animal, animalIndex) => (
				<React.Fragment key={animalIndex}>
					{/* name */}
					<PricesItem
						content={animal.names.map((name, index) => (
							<React.Fragment key={index}>
								{index !== 0 && (
									<>
										,<br />
									</>
								)}
								{name}
							</React.Fragment>
						))}
					/>
					{/* base price */}
					<PricesItem content={animal.base} />
					{/* TODO: one, two, 3+ */}

					{/* guts price */}
					<PricesItem content={animal.discount} />

					<span className={Styles.prices_spacer}></span>
				</React.Fragment>
			))}

			{/* Exotic Animals */}
			<PricesItem
				content="Exotic Animals"
				styles="twoColumn"
			/>
			<PricesItem
				content={<TelLink>Please Call Us</TelLink>}
				styles="twoColumn"
			/>
		</div>
	);
}

//
const PricesItem = ({ content, styles = false }) => (
	<span
		className={
			styles === 'twoColumn'
				? Styles.prices_two_column
				: `text-center ${styles === 'header' ? Styles.prices_header : Styles.prices_item}`
		}
	>
		{typeof content === 'number' && '$'}
		{content}
	</span>
);

// takes arr of strings
const PricesHeaderRow = ({ content }) => (
	<>
		{content.map((item) => (
			<PricesItem
				key={item}
				content={item}
				styles="header"
			/>
		))}
	</>
);
