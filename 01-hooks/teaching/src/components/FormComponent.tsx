import React, { useState } from 'react';

function FormComponent() {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === 'username') setUsername(value);
		if (name === 'email') setEmail(value);
		if (name === 'password') setPassword(value);
		if (name === 'confirmPassword') setConfirmPassword(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setErrors({ confirmPassword: 'Passwords do not match' });
		} else {
			setErrors({});
			console.log('Form submitted', { username, email, password, confirmPassword });
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Username</label>
				<input
					type="text"
					name="username"
					value={username}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Email</label>
				<input
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleChange}
				/>
				{errors.confirmPassword && (
					<p style={{ color: 'red' }}>{errors.confirmPassword}</p>
				)}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default FormComponent;
