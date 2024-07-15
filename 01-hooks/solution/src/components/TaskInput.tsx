import React, { useRef } from 'react';

function TaskInput() {
	const inputRef = useRef<null | HTMLInputElement>(null);

	React.useEffect(() => {
		inputRef.current!.focus();
	}, []);

	const handleAddTask = () => {
		if (!inputRef.current) {
			return
		}
		console.log(inputRef.current.value)
		if (inputRef.current.value.trim() !== "") {
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
