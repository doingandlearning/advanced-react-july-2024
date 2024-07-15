### Advanced React Hooks Lab

#### Lab Overview
This lab will guide you through practical exercises to deepen their understanding of React hooks: `useRef`, `useReducer`, `useCallback`, `useLayoutEffect`, and `useDebugValue`. Each section will build on the previous one, culminating in a single application that utilizes all these hooks effectively.

#### Prerequisites
- Basic understanding of React and JavaScript ES6.
- Knowledge of functional components and basic hooks (`useState`, `useEffect`).

#### Lab Setup
- Ensure you have a React environment set up. You can use Vite for a quick setup:
  ```bash
  npm create vite@latest hooks-lab
  cd hooks-lab
	npm install
  npm run dev
  ```

### Lab Sections

#### Project Overview
You will build a "Task Manager" application where users can add, edit, and delete tasks. This application will use advanced React hooks for optimal performance and functionality.

#### 1. **useRef for DOM Interaction**

**Objective:** Manipulate DOM elements directly using `useRef`.

**Instructions:**
1. Create a component named `TaskInput`.
2. Use it in your page
3. Use `useRef` to create a reference to an input element.
4. Ensure that on start, the field is in focus.
5. Implement a button that, when clicked, logs the input value, clears it and then resets focus to the input element.
6. Test the `TaskInput` component by rendering it in the main `App` component and logging tasks to the console.

- What changes if you don't use the ref? Is this better or worse?
- Is it better or worse to use manage the state of the input field with a ref or with a useState?

#### 2. **useReducer for State Management**

**Objective:** Manage complex state logic using `useReducer`.


**Instructions:**
1. Create a TaskManager component
2. Create an initialState object which will have a key of `tasks` with a value of an empty array.
3. Create a reducer function that will take the state and the action, it will switch over the action and return new states based on the `action.type`. 
4. Return new states for the `add` and `delete` actions.
5. For any other action either throw an Error or return the existing state.
6. Use useReducer in the TaskManager component to manage the tasks state. Destructure the state and dispatch elements from the returned array.
7. Implement a handle add task and a handle 
Create handleAddTask and handleDeleteTask functions, memoizing them using useCallback.

**Possible implementation (only look if you're stuck):**
https://gist.github.com/doingandlearning/49764feeb54031bdfd16252af30788d8

- Integrate `TaskInput` with `TaskManager` and ensure tasks can be added and deleted.

#### 3. **useCallback for Optimizing Performance**

**Objective:** Optimize performance by memoizing functions with `useCallback`.

**Instructions:**
1. Memoize the `handleAddTask` and `handleDeleteTask` functions using `useCallback`.
2. Pass these memoized functions to the `TaskInput` component.
3. Verify that the `TaskManager` component re-renders only when necessary by adding console logs to the functions.
**Code Sample:**
https://gist.github.com/doingandlearning/97a5c0f37056f6d508ee62f9d50c829a

#### 4. **useLayoutEffect for Synchronous DOM Updates**

**Objective:** Use `useLayoutEffect` for scenarios where DOM updates need to happen synchronously.

**Instructions:**
1. Implement a feature to highlight a newly added task.
2. Use `useLayoutEffect` to ensure the highlight happens immediately after the DOM update.
3. Ensure that the newly added task is highlighted briefly before returning to normal style.

**Code Sample:**
https://gist.github.com/doingandlearning/ef41f9bfb6cc92bdf1dd9e75fb4bf604

#### 5. **useDebugValue for Custom Hook Debugging**

**Objective:** Use `useDebugValue` to provide meaningful labels for custom hooks in React DevTools.

**Instructions:**
1. Create a custom hook named `useTasks`.
2. Move the state management logic from `TaskManager` to `useTasks`.
3. Use `useDebugValue` to display the current task count.

**Code Sample:**
https://gist.github.com/doingandlearning/5d179ffddf713b08cb38ccaa285ea653