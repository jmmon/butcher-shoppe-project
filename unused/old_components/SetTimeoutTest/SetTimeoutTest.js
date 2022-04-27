import { useEffect, useState } from 'react'
import './SetTimeoutTest.css'

function SetTimeoutTest() {
	const [count, setCount] = useState('init');
	useEffect(() => {
		const timer = setTimeout(() => {
			setCount('Timeout called!');
			console.log('timeout called');
		}, 2000);
		return () => clearTimeout(timer);
	}, []);
	return (
		<div className="set-timeout-test">{count}</div>
	)
}

export default SetTimeoutTest