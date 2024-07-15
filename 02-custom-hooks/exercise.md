### Custom Hooks Section Exercise: Refactor TaskManager

#### Exercise Overview

In this exercise, we will refactor the `TaskManager` component to use a custom hook, `useTasks`, to manage the task state and logic. This will demonstrate how to encapsulate complex state logic and reuse it across different components.

### Motivation for Refactor

**1. Code Reusability:**

- Encapsulating task management logic in a custom hook makes it reusable in other components.

**2. Separation of Concerns:**

- By moving the task logic to a custom hook, the `TaskManager` component focuses only on rendering and UI logic.

**3. Improved Readability:**

- Simplifies the `TaskManager` component by moving state logic out, making the component easier to read and maintain.

### Step-by-Step Instructions

1. **Identify Reusable Logic:**

   - The logic for adding, deleting, and highlighting tasks will be moved to a custom hook.

2. **Create the Custom Hook:**

   - Create a `useTasks` hook that manages the state and actions related to tasks.

3. **Refactor the Component:**
   - Use the `useTasks` hook in the `TaskManager` component to handle task-related logic.

### Custom Hook: useTasks

Certainly! Here is a more step-driven version of the exercise that encourages thinking and includes questions to prompt reflection. This will end with a link to the source code for finding the answer.

### Part 1: Create the Custom Hook

#### Step 1: Setup the Hook File

1. **Create the File**:

   - Create a file named `useTasks.js` in your project.
   - This file will contain the custom hook for managing tasks.

2. **Define Initial State**:

   - Define the initial state of your tasks.
   - **Question**: What should the initial state of your tasks look like? Why?

3. **Create the Reducer**:

   - Implement a reducer function to handle different actions (`add`, `delete`, `clearHighlight`).
   - **Question**: Why do we use a reducer function in this context? What advantages does it provide?

4. **Define the Hook**:

   - Use the `useReducer` hook to manage the state based on the reducer.
   - Implement `addTask`, `deleteTask`, and `clearHighlight` using `useCallback` to ensure stable references.
   - **Question**: Why is `useCallback` used here? What would happen if we didn't use it?

5. **Setup Effect for Clearing Highlight**:

   - Use `useEffect` to clear task highlights after a certain period.
   - **Question**: Why is it necessary to clear the highlights? What would happen if this effect wasn't included?

6. **Return the State and Functions**:

   - Ensure the hook returns the tasks, `addTask`, and `deleteTask` functions.

You can find an answer and complete implementation here: [Source Code](https://gist.github.com/)

### Refactor TaskManager Component

#### Step 2: Integrate and Test the Hook

1. Integrate into a Component:

- Create a component that uses the useTasks hook.
- Question: How will you structure the component to utilize the tasks and task management functions?

2. Test the Hook:

- Ensure that you can add, delete, and clear highlights of tasks through the component.
- Question: What tests would you write to ensure the hook works correctly?

3. Observe the Behavior:

- Pay attention to how tasks are added, removed, and how highlights are managed.
- Question: What improvements or changes can you think of for the task management logic?

### Step 3: Review and Optimize

#### Code Review:

- Review the code for potential improvements or optimizations.
- Question: Are there any parts of the hook or component that can be optimized further?
