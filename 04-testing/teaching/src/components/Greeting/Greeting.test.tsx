import GreetingInput from ".";
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest"
import { ThemeProvider } from "../../context/ThemeContext";

const renderWithProvider = (ui, providerProps) => {
	return render(<ThemeProvider {...providerProps}>{ui}</ThemeProvider>)
}


test("displays the correct greeting when name is entered", async () => {
	const { getByPlaceholderText, getByText, queryByText } = renderWithProvider(<GreetingInput />)

	const input = getByPlaceholderText("Enter your name")
	const message = getByText("Please enter your name")

	const button = getByText(/toggle/i)
	const themeDescription = getByText("light")

	expect(input).toBeInTheDocument()
	expect(message).toBeInTheDocument()
	expect(themeDescription).toBeInTheDocument()
	await userEvent.type(input, 'Asier')

	expect(getByText('Hello, Asier!')).toBeInTheDocument()
	expect(queryByText("Please enter your name")).not.toBeInTheDocument()


	await userEvent.clear(input)

	expect(queryByText("Please enter your name")).toBeInTheDocument()

})