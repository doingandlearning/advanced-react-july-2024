import { useState, useEffect } from 'react';

function DataDisplay({ url }) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			try {
				setError(null)
				const response = await fetch(url);

				if (!response.ok) {
					if (response.statusText) {
						throw new Error(response.statusText)
					}
					throw new Error('Network response was not ok');
				}
				const result = await response.json();
				if (isMounted) {
					setData(result);
					setLoading(false);
				}
			} catch (error) {
				if (isMounted) {
					setError(error);
					setLoading(false);
				}
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [url]);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div>
			<h1>Data</h1>
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
}

export default DataDisplay;