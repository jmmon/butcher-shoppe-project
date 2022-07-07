import {useState} from "preact/hooks";

function PreactComponent() {
	const [count, setCount] = useState(0);
	return (
		<div>
			PreactComponent
			<button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>

		</div>
	)
}

export default PreactComponent