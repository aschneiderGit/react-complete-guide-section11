import {useState} from 'react';
import Cart from './components/Cart/Cart';
import Headers from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const shownCartHandler = () => {
		setCartIsShown(true);
	};
	const hideCartHandler = () => {
		setCartIsShown(false);
	};
	return (
		<>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Headers onClickCart={shownCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
