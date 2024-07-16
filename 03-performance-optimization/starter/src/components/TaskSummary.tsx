import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

export default function TaskSummary() {
	const { state } = useContext(TaskContext)
	return <p>{state.tasks.length} tasks left to do</p>
}