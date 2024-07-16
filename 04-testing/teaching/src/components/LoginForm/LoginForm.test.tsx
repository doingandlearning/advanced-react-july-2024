import LoginForm from ".";
import { test, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";


// test initial render
test("render the login form", () => {
	render(<LoginForm onSubmit={() => { }} />)
	expect(screen.getByLabelText("Email:")).toBeInTheDocument();
	expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
	expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
})

// test mandatory fields
test('displays error when fields are empty', async () => {
	render(<LoginForm onSubmit={() => { }} />)

	await screen.getByRole("button", { name: /login/i }).click()

	expect(screen.queryByText('All fields are required')).toBeInTheDocument()
})


// test the onSubmit gets called with the right values
test("calls the onSubmit with when email is valid", async () => {
	const handleSubmit = vi.fn()
	render(<LoginForm onSubmit={handleSubmit} />)

	await userEvent.type(screen.getByLabelText("Email:"), "test@test.com")
	await userEvent.type(screen.getByLabelText(/password/i), "password")
	await userEvent.click(screen.getByRole('button', { name: /login/i }))

	expect(handleSubmit).toHaveBeenCalledWith({ email: "test@test.com", password: "password" })
})

// test that the email is valid
test('displays error when email is invalid', async () => {
	const handleSubmit = vi.fn();
	render(<LoginForm onSubmit={handleSubmit} />);

	// Enter an invalid email
	await userEvent.type(screen.getByLabelText(/email/i), 'invalid-email');
	await userEvent.type(screen.getByLabelText(/password/i), 'password123');
	await userEvent.click(screen.getByRole('button', { name: /login/i }))
	// Try to submit the form

	// Check that the form is invalid
	const emailInput = screen.getByLabelText(/email/i);
	expect(emailInput.validity.valid).toBe(false);

	// Form should not call the submit handler
	expect(handleSubmit).not.toHaveBeenCalled();
});