import React from 'react';
import Styles from './NewPricesGrid.module.css';
import TelLink from 'components/TelLink/TelLink';

const mainHeader = [
	{ name: 'Animal', columns: 3, className:"text_left" },
	{ name: 'Price Per Animal', columns: 6, },
	{ name: 'Take The Guts', columns: 3, className: "text_right"},
];

const subHeader = [
	{ name: 'Type', columns: 3, className:"text_left"},
	{ name: '1', columns: 2 },
	{ name: '2', columns: 2 },
	{ name: '3+', columns: 2 },
	{ name: '(Extra)', columns: 3, 
	className: "text_right" 
},
];

export default function NewPricesGrid({ PRICES }) {
	return (
		<div className={`${Styles.prices_container} panel-shadow--light`}>
			{/* Headers */}
			<PricesHeaderRow content={mainHeader} />

			{/* need row to display number of animals */}
			<PricesHeaderRow content={subHeader} />

			<PricesSpacer />

			{/* Animals & Prices */}
			{PRICES.animals.map((animal, animalIndex) => (
				<PricesAnimalRow
					animal={animal}
					animalIndex={animalIndex}
				/>
			))}

			{/* Exotic Animals */}
			<PricesItem
				content="Exotic Animals"
				columns={6}
			/>
			<PricesItem
				content={<TelLink>Please Call Us</TelLink>}
				columns={6}
			/>
		</div>
	);
}

const PricesAnimalRow = ({ animal, animalIndex }) => {
	return (
		<React.Fragment key={animalIndex}>
			{/* names box */}
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
				columns="3"
				classNames="text_left"
			/>
			{/* prices boxes */}
			<PricesItem content={animal['1']} />
			<PricesItem content={animal['2']} />
			<PricesItem content={animal['3+']} />

			{/* guts price */}
			<PricesItem
				content={animal.gutsHaul}
				columns={3}
				classNames="text_right"
			/>

			<PricesSpacer />
		</React.Fragment>
	);
};

const PricesSpacer = () => <span className={Styles.prices_spacer}></span>;

//
const PricesItem = ({ content, columns = 2, header = false, classNames = '' }) => {
	const splitNames = classNames?.split(' ') ?? [];
	const className = `${Styles[`prices_${columns}_column`]} text-center ${
		header ? Styles.prices_header : Styles.prices_item
	} ${splitNames.length > 0 && splitNames.map((name) => Styles[name])}`;

	return (
		<span className={className}>
			{typeof content === 'number' && '$'}
			{content}
		</span>
	);
};

// takes arr of strings
const PricesHeaderRow = ({ content }) => (
	<>
		{content.map((item) => {
			return (
				<PricesItem
					key={item.name}
					content={item.name}
					columns={item.columns}
					header={true}
					
					classNames={item?.className}
				/>
			);
		})}
	</>
);
