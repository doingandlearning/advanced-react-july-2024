import { useContext } from "react";
import TaskSummary from "./TaskSummary";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
	const { state } = useContext(ThemeContext);
	return <nav style={{
		background: state.theme === "light" ? "#fff" : "#333",
		color: state.theme === "light" ? "#000" : "#fff",
	}}>
		<img src="https://placeholder.com/50/50" />

		<TaskSummary />
	</nav>
}