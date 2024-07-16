
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw"
import { beforeAll, afterAll, afterEach, test, expect, describe } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import DataDisplay from ".";

const server = setupServer(
	http.get('https://api.example.com/data', () => {
		return HttpResponse.json({ message: "Hello world" })
	})
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('DataDisplay', () => {
	test('displays loading initially', () => {
		// render the component
		render(<DataDisplay url="https://api.example.com/data" />)
		// check if Loading ... is on the page
		expect(screen.getByText(/loading/i)).toBeInTheDocument()
	})

	test('displays the data when the fetch is successful', async () => {
		render(<DataDisplay url="https://api.example.com/data" />)
		await waitFor(() => expect(screen.getByText(/hello world/i)).toBeInTheDocument())
	})

	test('displays error message when fetch fails', async () => {
		server.use(
			http.get('https://api.example.com/data', () => {
				return new HttpResponse(null, {
					status: 404,
					statusText: "Out of apples"
				})
			})
		)
		render(<DataDisplay url="https://api.example.com/data" />)

		await waitFor(() => expect(screen.getByText(/out of apples/i)).toBeInTheDocument())
	})
})