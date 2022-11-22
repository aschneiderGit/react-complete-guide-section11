import Modal from '../UI/Modal';
import style from './Cart.module.css';

function Cart(props) {
	const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map(
		(item) => <li key={item.name}>{item.name}</li>
	);
	console.log(cartItems);
	return (
		<Modal>
			<ul className={style['cart-items']}>{cartItems}</ul>
			<div className={style.total}>
				<span>Total Amount</span>
				<span> 23.34</span>
			</div>
			<div className={style.actions}>
				<button className={style['button--alt']}>Close</button>
				<button className={style.button}>Order</button>
			</div>
		</Modal>
	);
}

export default Cart;
