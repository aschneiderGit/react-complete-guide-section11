import CartContext from './cart-context';

function CardProvider(props) {
	const addItemToCarHandler = (item) => {};
	const removeItemToCarHandler = (id) => {};

	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCarHandler,
		removeItem: removeItemToCarHandler,
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CardProvider;
