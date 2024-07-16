import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

function GreetingInput() {
	const [name, setName] = useState('');
	const { theme, toggleTheme } = useTheme()
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
				placeholder="Enter your name"

			/>
			<p>{name ? `Hello, ${name}!` : 'Please enter your name'}</p>
			<p>{theme}</p>
			<p><button onClick={() => toggleTheme()}>toggle</button></p>
		</div>
	);
}

export default GreetingInput;
