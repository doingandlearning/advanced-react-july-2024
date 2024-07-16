// LoginForm.js
import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email === '' || password === '') {
			setError('All fields are required');
			return;
		}
		setError('');
		onSubmit({ email, password });
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="email">Email:</label>
				<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div>
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<button type="submit">Login</button>
		</form>
	);
}

export default LoginForm;
