import React from 'react';
import Styles from './Card.module.css';

function ImageHeading({ bg = null, title = '' }) {
	return (
		<div
			className={`${Styles.image_heading} padding-2--vertical`}
			style={
				bg && {
					background: `url(${bg}) center center/cover no-repeat`,
				}
			}
		>
			<h3 className={`${bg && 'text-white'} ${Styles.title} text-shadow--lg`}>{title}</h3>
		</div>
	);
}

function splitWords(
	p,
	{ firstLargeWords, largeWordsSize } = { firstLargeWords: 0, largeWordsSize: 0 }
) {
	if (firstLargeWords <= 0) {
		return { first: null, rest };
	}

	const split = p.split(' ');
	const firstWords = split.slice(0, firstLargeWords).join(' ');
	const rest = split.slice(firstLargeWords).join(' ');

	return { first: firstWords, rest };
}

export default function Card({
	className = '',
	title = '',
	subtitle = null,
	paragraphs = null,
	bg = null,
	children = null,
	options = null,
}) {
	const formattedParagraphs = paragraphs?.map((p, index) => {
		if (!options || options === null) {
			return <p key={index}>{p}</p>;
		}

		const { first, rest } = splitWords(p, options[index]);
		return (
			<p key={index}>
				<span
					style={{
						fontSize: options[index].largeWordsSize || '100%',
						fontWeight: 'bold',
						lineHeight: 1.3,
						fontStyle: options[index].fontStyle || 'normal',
						textDecoration: options[index].textDecoration || 'none',
					}}
				>
					{first}{' '}
				</span>
				{rest}
			</p>
		);
	});

	return (
		<section className={`${Styles.container} card--width  card--font-size ${className}`}>
			{bg && (
				<ImageHeading
					bg={bg}
					title={title}
				/>
			)}
			<div className={`${Styles.card_content} card--content-width`}>
				{!bg && title && <h2 className={`${Styles.title} text-center`}>{title}</h2>}
				{subtitle && (
					<h3 className={`${Styles.subtitle} text-center`}>
						<i>{subtitle}</i>
					</h3>
				)}

				{formattedParagraphs && formattedParagraphs}
				{children}
			</div>
		</section>
	);
}
