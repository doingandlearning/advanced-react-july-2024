import './App.css'
import React, { Suspense, useMemo, useState } from "react"
import LongList from "./components/LongList"

function lazyWithDelay(importFunction, delay) {
  return React.lazy(() =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(importFunction());
      }, delay);
    })
  );
}

const LazyComponent = lazyWithDelay(() => import("./components/LazyComponent"), 2000)
// const LazyComponent = React.lazy(() => import("./LazyComponent"));
function calculateTotal(len: number) {
  console.log("addin numbers...")
  const arr = Array.from({ length: len }, (_, i) => i + 1);
  return arr.reduce((a, c) => a + c, 0)
}

function App() {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState(0)
  console.log(`Rendering component: ${Date.now()}`)
  const total = useMemo(() => calculateTotal(value), [value])
  return (
    <>
      <button onClick={() => setShow(!show)}>Show component</button>
      <input type="range" max={10000} min={0} value={value} onChange={e => setValue(e.target.value)} />
      <div>
        <p>Value {value}</p>
        <p>Total: {total}</p>
      </div>
      <Suspense fallback={<div>Loading ...</div>}>
        {show && <LazyComponent />}
      </Suspense>
      <LongList />
    </>
  )
}

export default App
