import React, { useRef } from 'react';

function TaskInput({ onAddTask } = { onAddTask: (value) => { console.log(value) } }) {
	const inputRef = useRef(null);

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleAddTask = () => {
		if (inputRef.current.value.trim() !== "") {
			onAddTask(inputRef.current.value);
			inputRef.current.value = '';
		}
		inputRef.current.focus();
	};


	return (
		<div>
			<input ref={inputRef} type="text" placeholder="Enter a task" />
			<button onClick={handleAddTask}>Add Task</button>
		</div>
	);
}

export default TaskInput;
