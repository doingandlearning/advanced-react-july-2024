import React, { useEffect, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import './LongList.css';

export default function LongListVirtualized() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const getData = async () => {
		try {
			setLoading(true);
			setError(false);
			const resp = await fetch('https://api.sampleapis.com/beers/ale');
			const json = await resp.json();
			setData([...json]);
			setLoading(false);
		} catch (err) {
			setData(err.message);
			setError(true);
			setLoading(false);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	if (loading) return <div>Loading data ... </div>;
	if (error) return <div>Something went wrong: {data} </div>;

	return (
		<List
			height={700} // Adjust the height according to your needs
			itemCount={data.length}
			itemSize={150} // Adjust the item size according to your needs
			width={900} // Adjust the width according to your needs
		>
			{({ index, style }) => {
				const item = data[index];
				return (
					<div key={item.id} className="beer-container" style={style}>
						<div className="beer-image-container">
							<img src={item.image} alt={item.name} />
						</div>
						<div className="beer-text-container">
							<h2>{item.name}</h2>
							<h3>{item.rating.average.toFixed(2)} (from {item.rating.reviews} reviews)</h3>
							<p>{item.price}</p>
						</div>
					</div>
				);
			}}
		</List>
	);
}
