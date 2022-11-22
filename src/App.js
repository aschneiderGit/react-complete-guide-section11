import Cart from './components/Cart/Cart';
import Headers from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
	return (
		<>
			<Cart />
			<Headers />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
