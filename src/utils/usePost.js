import axios from "axios";
import { useState, useEffect } from "react";

const usePost = ({ url, headers, payload }) => {
	const [res, setRes] = useState({
		data: null,
		error: null,
		isLoading: false,
	});

	useEffect(() => {
		let isMounted = true;
		setRes((prevState) => ({ ...prevState, isLoading: true }));

		axios
			.post(url, { headers: headers }, payload)
			.then((res) => {
				isMounted &&
					setRes((prevState) => ({
						...prevState,
						data: res.data,
						isLoading: false,
						error: null,
					}));
			})

			.catch((error) => {
				isMounted &&
					setRes((prevState) => ({
						...prevState,
						data: null,
						isLoading: false,
						error,
					}));
			})

			.finally(() => {
				isMounted &&
					setRes((prevState) => ({
						...prevState,
						isLoading: false,
					}));
			});

		return () => (isMounted = false);
	}, [url, headers, payload]);

	return res;
};

export default usePost;
