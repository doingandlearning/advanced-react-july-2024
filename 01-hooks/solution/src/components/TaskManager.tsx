import React from 'react';
import TaskInput from './TaskInput';

const initialState = { tasks: [] };

function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return { tasks: [...state.tasks, { id: Date.now(), text: action.payload }] };
		case 'delete':
			return { tasks: state.tasks.filter(task => task.id !== action.payload) };
		default:
			throw new Error('Unknown action type');
	}
}

function TaskManager() {
	const [state, dispatch] = React.useReducer(reducer, initialState);


	const handleAddTask = (task: string) => {
		dispatch({ type: 'add', payload: task });
	};

	const handleDeleteTask = (id: number) => {
		dispatch({ type: 'delete', payload: id });
	};


	return (
		<div>
			<TaskInput onAddTask={handleAddTask} />
			<ul>
				{state.tasks.map(task => (
					<li key={task.id} style={{ background: task.highlight ? 'yellow' : 'white' }}>
						{task.text}
						<button onClick={() => handleDeleteTask(task.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TaskManager;
