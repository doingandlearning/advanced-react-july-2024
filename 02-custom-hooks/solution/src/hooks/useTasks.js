import { useReducer, useCallback, useEffect } from "react";

const initialState = { tasks: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        tasks: [
          ...state.tasks,
          { id: Date.now(), text: action.payload, highlight: true },
        ],
      };
    case "delete":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "clearHighlight":
      return {
        tasks: state.tasks.map((task) => ({ ...task, highlight: false })),
      };
    default:
      throw new Error("Unknown action type");
  }
}

function useTasks() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
