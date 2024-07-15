What useState does?

- initialize
- provide state variable
- provide update function

```tsx
const [count, setCount] = useState(0);
```

useReducer uses a reducer function ...

```js
(state, action) => state;
```

Under the hood - useState uses useReducer!

```jsx
import { useReducer } from "react";

function useState(initialValue) {
  const reducer = (state, action) => action.value;

  const [state, dispatch] = useReducer(reducer, initialValue);

  const setState = (newValue) => {
    dispatch({ value: newValue });
  };

  return [state, setState];
}
```

type Action<T> = {
type: string
value: T
}
