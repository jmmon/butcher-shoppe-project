import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];


function Button({children, type, onClick, buttonStyle, buttonSize, url}) {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

	if (url.includes("#")) {
		return (		
			<a href={url} className="btn-mobile">
				<button 
					className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
					onClick={onClick} 
					type={type}
				>
					{children}
				</button>
			</a>
		)
	}

	return (
		<Link to={url} className="btn-mobile">
			<button 
				className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
				onClick={onClick} 
				type={type}
			>
				{children}
			</button>
		</Link>
	)
}

export default Button