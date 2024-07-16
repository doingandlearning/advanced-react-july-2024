import Button from "./index.tsx"
import { test, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

test('changes the text when clicked', async () => {
	const clickedText = "I was clicked"
	const unclickedText = "I need to be clicked"
	render(<Button clickedText={clickedText} unclickedText={unclickedText} />)

	const button = screen.getByRole('button', { name: unclickedText })
	expect(button).toHaveClass('normal-button')
	expect(button).toHaveTextContent(unclickedText)

	// Simulate a button click
	await userEvent.click(button)
	expect(button).toHaveClass('clicked-button')
	expect(button).toHaveTextContent(clickedText)

	await userEvent.click(button)
	expect(button).toHaveClass('normal-button')
	expect(button).toHaveTextContent(unclickedText)
})