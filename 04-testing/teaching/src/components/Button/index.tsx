import { useState } from 'react';
import "./Button.css"
function Button({ clickedText, unclickedText }) {
	const [clicked, setClicked] = useState(false);

	return (
		<button
			className={clicked ? 'clicked-button' : 'normal-button'}
			onClick={() => setClicked(!clicked)}
		>
			{clicked ? clickedText : unclickedText}
		</button>
	);
}

export default Button;
