import GreetingInput from ".";
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest"

test("displays the correct greeting when name is entered", async () => {
	const { getByPlaceholderText, getByText, queryByText } = render(<GreetingInput />)

	const input = getByPlaceholderText("Enter your name")
	const message = getByText("Please enter your name")

	expect(input).toBeInTheDocument()
	expect(message).toBeInTheDocument()

	await userEvent.type(input, 'Asier')

	expect(getByText('Hello, Asier!')).toBeInTheDocument()
	expect(queryByText("Please enter your name")).not.toBeInTheDocument()


	await userEvent.clear(input)

	expect(queryByText("Please enter your name")).toBeInTheDocument()

})