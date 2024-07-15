import { createContext, useReducer } from "react";

const ThemeContext = createContext({});

const initialState = { theme: "light" };

function themeReducer(state, action) {
	switch (action.type) {
		case "toggle":
			return { theme: state.theme === "light" ? "dark" : "light" };
		default:
			throw new Error("Unknown action type");
	}
}

function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(themeReducer, initialState);

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeContext, ThemeProvider };