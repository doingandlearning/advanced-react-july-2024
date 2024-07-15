import React, { useState, useReducer } from 'react';

// initialState
const initialState = {
	username: '',
	email: '',
	password: '',
	confirmPassword: '',
	errors: {}
}

interface Action {
	type: string
	field?: keyof typeof initialState
	error?: string
	value?: string
}

// reducer
function reducer(state, action: Action) {
	switch (action.type) {
		case 'updateField':
			return {
				...state,
				[action.field]: action.value
			}
		case 'setError':
			return {
				...state,
				errors: {
					...state.errors,
					[action.field]: action.error
				}
			}
		case 'clearErrors':
			return {
				...state,
				errors: {}
			}
		case 'clearForm':
			return initialState
		default:
			throw new Error("Unknown action type")
	}
}


function FormComponent() {
	const [state, dispatch] = useReducer(reducer, initialState)

	const handleChange = (e) => {
		dispatch({
			type: 'updateField',
			field: e.target.name,
			value: e.target.value
		})
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (state.password !== state.confirmPassword) {
			dispatch({
				type: 'setError',
				field: 'confirmPassword',
				error: 'Passwords do not match.'
			})
		} else {
			dispatch({ type: 'clearErrors' })
			console.log('Form submitted', state);
			dispatch({ type: 'clearForm' })
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Username</label>
				<input
					type="text"
					name="username"
					value={state.username}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Email</label>
				<input
					type="email"
					name="email"
					value={state.email}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Password</label>
				<input
					type="password"
					name="password"
					value={state.password}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>Confirm Password</label>
				<input
					type="password"
					name="confirmPassword"
					value={state.confirmPassword}
					onChange={handleChange}
				/>
				{state.errors.confirmPassword && (
					<p style={{ color: 'red' }}>{state.errors.confirmPassword}</p>
				)}
			</div>
			<button type="submit">Submit</button>
		</form>
	);
}

export default FormComponent;
