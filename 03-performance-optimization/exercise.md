### Hands-On Exercises:

## **Exercise 1: Code Splitting**

- Task: Implement code splitting in our sample application.

1.  Add a state variable to the App component to keep track of a switch.
2.  Conditionally render the <TaskManager /> component based on the switch
3.  Use React.lazy() to split the import of the <TaskManager /> component
4.  Wrap it in a <Suspense> with a fallback prop.

## **Exercise 2: Memoization with useMemo**

- Task: Optimize a component with expensive calculations using `useMemo`.
- Suppose TaskManager has a computation that calculates the total number of tasks. Memoize this calculation using useMemo.

1.  Find somewhere to create and share the memoized value (could be in the hook or the context)
2.  Memoize the value
3.  Use it in the task summary.

# If time (or interest) permits:

## **Exercise 3: Implementing Virtualized Lists**

- Task: Use `react-window` to render a large list efficiently.

1.  Our lists are pretty small, but look at the teaching example and see if you can use react-window to virtualize the todo list.

## **Exercise 4: Profiling and Optimizing Components**

- Task: Profile a sample application using React DevTools and identify optimization opportunities.

1.  Add the vite configuration and install the tool to visualise the bundle.
2.  Any recommendations?
3.  Use the profiler in React Dev Tools to record some activity. Explore the views and see if you can identify the key features.
