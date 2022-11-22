import {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updateItems = state.items.concat(action.item);
		const updateAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updateItems,
			totalAmount: updateAmount,
		};
	}
	return defaultCartState;
};

function CardProvider(props) {
	const [cartState, dispatchCatAction] = useReducer(
		cartReducer,
		defaultCartState
	);
	const addItemToCarHandler = (item) => {
		dispatchCatAction({type: 'ADD', item: item});
	};
	const removeItemToCarHandler = (id) => {
		dispatchCatAction({type: 'REMOVE', id: id});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
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
