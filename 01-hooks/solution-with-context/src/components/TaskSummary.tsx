import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"
import ThemeSwitch from "./ThemeSwitch"
import { ThemeContext } from "../context/ThemeContext"

export default function TaskSummary() {
	const { state } = useContext(TaskContext)
	const { state: themeState } = useContext(ThemeContext)

	return <>
		<p style={{ color: themeState.theme === 'light' ? 'black' : 'white' }}>{state.tasks.length} tasks left to do</p>
		<ThemeSwitch />
	</>

}