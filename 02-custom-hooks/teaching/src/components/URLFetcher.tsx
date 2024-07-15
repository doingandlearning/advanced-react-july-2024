import { useState } from 'react';
import DataDisplay from './DataDisplay';

function URLFetcher() {
	const [url, setUrl] = useState('');
	const [inputValue, setInputValue] = useState('');

	const handleFetchData = () => {
		setUrl(inputValue);
	};

	return (
		<div>
			<h1>URL Fetcher</h1>
			<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
				placeholder="Enter API URL"
			/>
			<button onClick={handleFetchData}>Fetch Data</button>
			{url && <DataDisplay url={url} />}
		</div>
	);
}

export default URLFetcher;
