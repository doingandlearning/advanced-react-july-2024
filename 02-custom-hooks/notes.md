### Custom Hooks Section Notes

#### Motivation for Custom Hooks

**1. Code Reusability:**

- Custom hooks allow you to extract and reuse logic across different components.
- Helps avoid code duplication, making your codebase cleaner and more maintainable.

**2. Separation of Concerns:**

- By moving logic into custom hooks, you can separate data-fetching and other side effects from UI logic.
- Leads to components that are easier to read and understand.

**3. Encapsulation of Logic:**

- Custom hooks encapsulate complex logic in a single place.
- Makes it easier to manage, update, and test the logic independently.

**4. Improved Readability:**

- Breaking down complex logic into smaller, manageable hooks improves the readability of your components.
- Readers of your code can quickly understand what each part does without delving into the details of the logic.

#### Definition of Custom Hooks

**1. What is a Custom Hook?**

- A custom hook is a function whose name starts with `use` and that can call other hooks.
- It enables the reuse of stateful logic without changing your component hierarchy.

**2. How is it Different from Regular Functions?**

- Custom hooks can use other hooks (e.g., `useState`, `useEffect`), whereas regular functions cannot.
- They follow the rules of hooks, ensuring the hooks are called in the same order every time a component renders.

#### Developing Custom Hooks

**1. Identify Reusable Logic:**

- Look for logic that's duplicated across components or could be abstracted out.
- Examples include data fetching, form handling, and subscriptions.

**2. Create the Hook:**

- Write a function that starts with `use` (e.g., `useFetch`, `useForm`).
- Inside this function, use built-in hooks to manage state and side effects.

**3. Return Necessary Values:**

- Return the state, functions, or any other values needed by the components using the hook.

**4. Use the Hook in Components:**

- Import and use the custom hook in your components just like you would use built-in hooks.

** Example prehook: **

```jsx
import React from 'react';
import { useState, useEffect } from 'react';

function DataDisplay({ url }) {
 const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

**Example Custom Hook: `useFetch`**

```jsx
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        if (isMounted) {
          setData(result);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```

**Using the `useFetch` Hook**

```jsx
import React from "react";
import useFetch from "./useFetch";

function DataDisplay({ url }) {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;
```

```jsx
import { renderHook } from "@testing-library/react-hooks";
import useFetch from "./useFetch";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ data: "test data" }),
  })
);

describe("useFetch", () => {
  it("should return data after successful fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitForNextUpdate();

    expect(result.current.data).toEqual({ data: "test data" });
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
  });

  it("should return an error if the fetch fails", async () => {
    fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Fetch error"))
    );

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://api.example.com/data")
    );

    await waitForNextUpdate();

    expect(result.current.data).toBe(null);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toEqual(new Error("Fetch error"));
  });
});
```

#### Summary

1. **Motivation for Custom Hooks:**

   - Enhance code reusability, maintainability, and readability.
   - Encapsulate and separate concerns in your components.

2. **Definition of Custom Hooks:**

   - Functions starting with `use` that can call other hooks.
   - Follow the rules of hooks and enable stateful logic reuse.

3. **Developing Custom Hooks:**
   - Identify reusable logic, create the hook, return necessary values, and use the hook in components.
