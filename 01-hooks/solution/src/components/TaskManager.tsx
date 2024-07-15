import React, { useCallback, useLayoutEffect, useRef, useEffect, useContext } from 'react';
import TaskInput from './TaskInput';
import { TaskContext } from '../context/TaskContext';



function TaskManager() {
	const { state, dispatch } = useContext(TaskContext)
	const listRef = useRef(null)
	const handleAddTask = useCallback((task: string) => {
		dispatch({ type: 'add', payload: task });
	}, []);

	const handleDeleteTask = useCallback((id: number) => {
		dispatch({ type: 'delete', payload: id });
	}, []);

	useLayoutEffect(() => {
		if (listRef.current) {
			(listRef.current as HTMLDivElement).scrollIntoView({ behavior: "smooth" })
		}

		const timer = setTimeout(() => {
			dispatch({ type: 'clearHighlight' })
		}, 500)

		return () => clearTimeout(timer)
	}, [state.tasks])


	return (
		<div>
			<TaskInput onAddTask={handleAddTask} />
			<ul>
				{state.tasks.map((task: string) => (
					<li key={task.id} style={{ background: task.highlight ? 'yellow' : 'white' }}>
						{task.text}
						<button onClick={() => handleDeleteTask(task.id)}>Delete</button>
					</li>
				))}
			</ul>
			<div ref={listRef} />
		</div>
	);
}

export default TaskManager;
