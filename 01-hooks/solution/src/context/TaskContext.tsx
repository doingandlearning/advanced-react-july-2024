import { createContext, useReducer } from "react"
const initialState = { tasks: [] };

function reducer(state, action) {
	switch (action.type) {
		case 'add':
			return { tasks: [...state.tasks, { id: Date.now(), text: action.payload, highlight: true }] };
		case 'delete':
			return { tasks: state.tasks.filter(task => task.id !== action.payload) };
		case 'clearHighlight':
			return { tasks: state.tasks.map(task => ({ ...task, highlight: false })) }
		default:
			throw new Error('Unknown action type');
	}
}

const TaskContext = createContext({})

function TaskProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <TaskContext.Provider value={{ state, dispatch }}>
		{children}
	</TaskContext.Provider>
}

export { TaskContext, TaskProvider }