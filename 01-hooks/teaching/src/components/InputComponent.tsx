import { useRef, useEffect, useState } from "react"

export default function InputComponent() {
	const ref = useRef<null | HTMLInputElement>(null)
	const [value, setValue] = useState("")
	const prevValue = useRef("")

	useEffect(() => {
		ref.current!.focus();
	}, []);

	useEffect(() => {
		prevValue.current = value
	}, [value])



	return <>
		<input ref={ref} onChange={(e) => setValue(e.target.value)} />
		<button onClick={() => console.log(ref.current!.value)}>
			Log value
		</button>
		<div>
			<p>Current Value: {value}</p>
			<p>Previous Value: {prevValue.current}</p>
		</div>
	</>
}