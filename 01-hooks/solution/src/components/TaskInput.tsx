import React, { useRef } from 'react';

function TaskInput({ onAddTask }: { onAddTask: (task: string) => void }) {
	const inputRef = useRef<null | HTMLInputElement>(null);

	React.useEffect(() => {
		inputRef.current!.focus();
	}, []);

	const handleAddTask = () => {
		if (!inputRef.current) {
			return
		}
		onAddTask(inputRef.current.value)
		if (inputRef.current.value.trim() !== "") {
			inputRef.current.value = '';
		}
		inputRef.current.focus();
	};

	return (
		<div className="input-container">
			<input ref={inputRef} type="text" placeholder="Enter a task" />
			<button onClick={handleAddTask}>Add Task</button>
		</div>
	);
}

export default TaskInput;
