### Exercise: Creating and Using a Theme Context

In this exercise, you will create a `ThemeContext` to manage the theme (light or dark mode) of the application. You'll implement a `ThemeProvider` to provide the context and a switch to toggle between light and dark modes. You will also use the context in two components to demonstrate its usage.

### Steps to Create and Use the Theme Context

#### Step 1: Create the Theme Context

1. **Create `ThemeContext.js`**:
   - Create a new file named `ThemeContext.js`.
   - Define the context, provider, and the reducer to manage the theme state.

```jsx
// src/ThemeContext.tsx
import React, { createContext, useReducer } from "react";

const ThemeContext = createContext();

const initialState = { theme: "light" };

function themeReducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error("Unknown action type");
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
```

#### Step 2: Create the Theme Switch Component

1. **Create `ThemeSwitch.js`**:
   - Create a new file named `ThemeSwitch.js`.
   - Implement a switch that toggles the theme between light and dark modes.

```jsx
// src/components/ThemeSwitch.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function ThemeSwitch() {
  const { state, dispatch } = useContext(ThemeContext);

  const toggleTheme = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {state.theme === "light" ? "dark" : "light"} mode
    </button>
  );
}

export default ThemeSwitch;
```

#### Step 3: Use the Theme Context in a Component

1. **Update `Navbar.js`**:
   - Use the theme context to change the appearance of the Navbar based on the current theme.

```jsx
// src/components/Navbar.tsx
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Navbar() {
  const { state } = useContext(ThemeContext);

  return (
    <nav
      style={{
        background: state.theme === "light" ? "#fff" : "#333",
        color: state.theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Task Manager</h1>
      <p>Current theme: {state.theme}</p>
    </nav>
  );
}

export default Navbar;
```

#### Step 4: Wrap the Application with the Theme Provider

1. **Update `App.js`**:
   - Wrap the application with the `ThemeProvider` to provide the theme context to all components.

```jsx
// src/App.js
import React from "react";
import "./App.css";
import TaskManager from "./components/TaskManager";
import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <ThemeSwitch />
      <TaskManager />
    </ThemeProvider>
  );
}

export default App;
```

### Summary of Steps

1. **Create `ThemeContext.js`**:

   - Define the context, reducer, and provider for managing the theme state.

2. **Create `ThemeSwitch.js`**:

   - Implement a switch component to toggle between light and dark modes.

3. **Update `Navbar.js`**:

   - Use the theme context to apply styles based on the current theme.

4. **Update `App.js`**:
   - Wrap the application with the `ThemeProvider` to provide the theme context to all components.

### Reflection Questions

- **Why is `useContext` useful in managing global state like the theme?**
- **How does using a context provider simplify state management in larger applications?**
- **What are some potential drawbacks of using context for state management, and how can they be mitigated?**
