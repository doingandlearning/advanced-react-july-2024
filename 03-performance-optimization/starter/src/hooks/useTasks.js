import { useContext, useCallback, useEffect } from "react";
import { TaskContext } from "../context/TaskContext";



function useTasks() {
  const { state, dispatch } = useContext(TaskContext);

  const addTask = useCallback((task) => {
    dispatch({ type: "add", payload: task });
  }, []);

  const deleteTask = useCallback((id) => {
    dispatch({ type: "delete", payload: id });
  }, []);

  const clearHighlight = useCallback(() => {
    dispatch({ type: "clearHighlight" });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      clearHighlight();
    }, 500);

    return () => clearTimeout(timer);
  }, [state.tasks, clearHighlight]);

  return {
    tasks: state.tasks,
    addTask,
    deleteTask,
  };
}

export default useTasks;
