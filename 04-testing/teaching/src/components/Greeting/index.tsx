import React, { useState } from 'react';

function GreetingInput() {
	const [name, setName] = useState('');

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name"

			/>
			<p>{name ? `Hello, ${name}!` : 'Please enter your name'}</p>
		</div>
	);
}

export default GreetingInput;
