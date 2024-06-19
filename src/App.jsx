import { useState } from 'react';
import './App.css';

function App() {
	const [isClick, setIsClick] = useState([false, false]);

	function clickHandler(i) {
		const clickState = [...isClick];
		clickState[i] = !isClick[i];
		setIsClick(clickState);
	}

	return (
		<main className="main">
			<div className={`card ${!isClick[0] ? 'flipped' : ''}`} onClick={() => clickHandler(0)}>
				<div className="front">
					<img src="/cat1.jpg" />
				</div>
				<div className="back"></div>
			</div>
			<div className={`card ${!isClick[1] ? 'flipped' : ''}`} onClick={() => clickHandler(1)}>
				<div className="front">
					<img src="/cat2.jpg" />
				</div>
				<div className="back"></div>
			</div>
		</main>
	);
}

export default App;
