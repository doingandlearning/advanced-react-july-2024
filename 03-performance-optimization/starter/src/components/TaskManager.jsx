import React, { useRef } from 'react';
import TaskInput from './TaskInput';
import useTasks from '../hooks/useTasks';

function TaskManager() {
	const { tasks, addTask, deleteTask } = useTasks();
	const listRef = useRef(null);

	return (
		<div>
			<TaskInput onAddTask={addTask} />
			<ul ref={listRef}>
				{tasks.map(task => (
					<li key={task.id} style={{ background: task.highlight ? 'yellow' : 'white' }}>
						{task.text}
						<button onClick={() => deleteTask(task.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TaskManager;
