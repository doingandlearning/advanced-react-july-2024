import React from 'react';
import TaskInput from './TaskInput';

const initialState = { tasks: [] };

function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return { tasks: [...state.tasks, { id: Date.now(), text: action.payload, highlight: true }] };
		case 'delete':
			return { tasks: state.tasks.filter(task => task.id !== action.payload) };
		case 'clearHighlight':
			return { tasks: state.tasks.map(task => ({ ...task, highlight: false })) };
		default:
			throw new Error('Unknown action type');
	}
}

function TaskManager() {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const listRef = React.useRef(null);

	React.useDebugValue(`Task count: ${state.tasks.length}`);

	const handleAddTask = React.useCallback((task) => {
		dispatch({ type: 'add', payload: task });
	}, []);

	const handleDeleteTask = React.useCallback((id) => {
		dispatch({ type: 'delete', payload: id });
	}, []);

	React.useLayoutEffect(() => {
		if (listRef.current) {
			listRef.current.scrollIntoView({ behavior: 'smooth' });
		}

		const timer = setTimeout(() => {
			dispatch({ type: 'clearHighlight' });
		}, 500); // Highlight duration

		return () => clearTimeout(timer);
	}, [state.tasks]);

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
			<div ref={listRef} />
		</div>
	);
}

export default TaskManager;
