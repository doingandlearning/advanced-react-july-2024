import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeSwitch() {
	const { state, dispatch } = useContext(ThemeContext);

	const toggleTheme = () => {
		dispatch({ type: "toggle" });
	};

	return (
		<button onClick={toggleTheme}>
			Switch to {state.theme === "light" ? "dark" : "light"} mode
		</button>
	);
}

export default ThemeSwitch;