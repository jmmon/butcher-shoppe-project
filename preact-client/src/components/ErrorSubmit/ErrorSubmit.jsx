import React, {useState} from 'react'

export default function ErrorSubmit({error}) {
	const [thisError, setThisError] = useState(error);

	return (
		<div>
			Oops! Sorry about the error. Submit this error to the support team?
			<button>Yes</button><button>Close</button>
		</div>
	)
}
